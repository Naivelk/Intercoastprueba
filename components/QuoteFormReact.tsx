import React, { useState } from 'react';

// Utilidad para decodificar el VIN usando la API pública de NHTSA
type VinData = {
  year: string;
  make: string;
  model: string;
  bodyClass: string;
  vehicleType: string;
  fuelType: string;
  engineHP: string;
  engineCylinders: string;
  displacementL: string;
  driveType: string;
  transmissionStyle: string;
  transmissionSpeeds: string;
  doors: string;
  seats: string;
  gvwr: string;
  series: string;
  trim: string;
  plantCountry: string;
  plantCity: string;
};

const initialVinData: VinData = {
  year: '', make: '', model: '', bodyClass: '', vehicleType: '', fuelType: '', engineHP: '', engineCylinders: '', displacementL: '', driveType: '', transmissionStyle: '', transmissionSpeeds: '', doors: '', seats: '', gvwr: '', series: '', trim: '', plantCountry: '', plantCity: ''
};

async function decodeVIN2Steps(vin: string): Promise<VinData> {
  // Paso 1: año
  const r1 = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${encodeURIComponent(vin)}?format=json`).then(res => res.json());
  const dict1: Record<string, string> = {};
  (r1.Results || []).forEach((r: any) => {
    if (r.Variable && r.Value != null && r.Value !== "") dict1[r.Variable] = r.Value;
  });
  const year = dict1["Model Year"];
  // Paso 2: más campos
  const url2 = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${encodeURIComponent(vin)}?format=json` + (year ? `&modelyear=${year}` : "");
  const r2 = await fetch(url2).then(res => res.json());
  const row = (r2.Results && r2.Results[0]) ? r2.Results[0] : {};
  return {
    year: row.ModelYear || dict1["Model Year"] || "",
    make: row.Make || dict1.Make || "",
    model: row.Model || dict1.Model || "",
    bodyClass: row.BodyClass || dict1["Body Class"] || "",
    vehicleType: row.VehicleType || "",
    fuelType: row.FuelTypePrimary || row["Fuel Type - Primary"] || "",
    engineHP: row.EngineHP || dict1["Engine HP"] || "",
    engineCylinders: row.EngineCylinders || "",
    displacementL: row.DisplacementL || "",
    driveType: row.DriveType || dict1["Drive Type"] || "",
    transmissionStyle: row.TransmissionStyle || "",
    transmissionSpeeds: row.TransmissionSpeeds || "",
    doors: row.Doors || "",
    seats: row.Seats || "",
    gvwr: row.GVWR || "",
    series: row.Series || "",
    trim: row.Trim || "",
    plantCountry: row.PlantCountry || "",
    plantCity: row.PlantCity || ""
  };
}

function fmt(x: string) { return (x && x !== "0") ? x : "N/D"; }
function round5(x: number) { return Math.round(x / 5) * 5; }

// Motor de precios (idéntico al original)
const rateConfig = {
  baseByBodyClass: {
    "Sedan/Saloon": 210,
    "Hatchback": 185,
    "Wagon": 185,
    "Coupe": 240,
    "Convertible": 260,
    "Sport Utility Vehicle (SUV)": 195,
    "Crossover": 190,
    "Pickup": 215,
    "Van": 200,
    "Minivan": 160,
    "Truck": 215,
    "Other": 200
  },
  modelOverrides: [
    { make: "tesla", modelIncludes: ["model 3"], base: 295 },
    { make: "tesla", modelIncludes: ["model y"], base: 288 },
    { make: "toyota", modelIncludes: ["camry"], base: 157 },
    { make: "toyota", modelIncludes: ["rav4"], base: 173 },
    { make: "honda",  modelIncludes: ["cr-v","crv"], base: 158 },
    { make: "nissan", modelIncludes: ["rogue"], base: 180 },
    { make: "ford",   modelIncludes: ["f-150","f150","f-series","f series"], base: 172 },
    { make: "chevrolet", modelIncludes: ["silverado"], base: 226 }
  ],
  adjusters: {
    year: (y: string) => {
      const n = parseInt(y, 10);
      if (!n) return 1.0;
      if (n >= 2022) return 0.92;
      if (n >= 2016) return 1.00;
      if (n >= 2010) return 1.05;
      return 1.12;
    },
    fuel: (f: string) => {
      const x = (f || "").toLowerCase();
      if (x.includes("electric")) return 1.08;
      if (x.includes("hybrid") || x.includes("plug-in")) return 1.03;
      if (x.includes("diesel")) return 1.02;
      return 1.0;
    },
    engineHp: (hp: string) => {
      const n = parseInt(hp, 10);
      if (!n) return 1.0;
      if (n >= 400) return 1.20;
      if (n >= 300) return 1.10;
      return 1.0;
    },
    driveType: (d: string) => {
      const t = (d || "").toLowerCase();
      if (t.includes("awd") || t.includes("4wd") || t.includes("4x4") || t.includes("all")) return 1.03;
      return 1.0;
    },
    modelHint: (m: string) => {
      const x = (m || "").toLowerCase();
      if (x.includes("turbo")) return 1.10;
      if (x.includes("hybrid")) return 1.04;
      if (x.includes("sport")) return 1.08;
      return 1.0;
    }
  }
};

function estimatePrice(vinData: VinData) {
  // Model override
  const make = (vinData.make || '').toLowerCase();
  const model = (vinData.model || '').toLowerCase();
  for (const o of rateConfig.modelOverrides) {
    if (make.includes(o.make) && o.modelIncludes.some(m => model.includes(m))) {
      return o.base;
    }
  }
  // Base por tipo de carrocería
  let base = rateConfig.baseByBodyClass[vinData.bodyClass] || rateConfig.baseByBodyClass["Other"];
  // Ajustadores
  base *= rateConfig.adjusters.year(vinData.year);
  base *= rateConfig.adjusters.fuel(vinData.fuelType);
  base *= rateConfig.adjusters.engineHp(vinData.engineHP);
  base *= rateConfig.adjusters.driveType(vinData.driveType);
  base *= rateConfig.adjusters.modelHint(vinData.model);
  return round5(base);
}

// Formulario principal
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../types';

export default function QuoteFormReact() {
  const [cantidadVehiculos, setCantidadVehiculos] = useState(1);
  const [vins, setVins] = useState<string[]>([""]);
  const [vinDatas, setVinDatas] = useState<VinData[]>([initialVinData]);
  const [nombre, setNombre] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [documento, setDocumento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [showDiscount, setShowDiscount] = useState(false);

  const { t, language, setLanguage } = useLanguage();

  // Actualiza los campos VIN según la cantidad de vehículos
  React.useEffect(() => {
    setVins(vins => Array(cantidadVehiculos).fill("").map((v, i) => vins[i] || ""));
    setVinDatas(datas => Array(cantidadVehiculos).fill(initialVinData).map((d, i) => datas[i] || initialVinData));
  }, [cantidadVehiculos]);

  const handleVinChange = (idx: number, val: string) => {
    setVins(vins => vins.map((v, i) => i === idx ? val : v));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResultado(null);
    setConfirm("");
    setShowDiscount(true);
    setLoading(true);
    try {
      // Decodificar todos los VINs y armar vehículos
      const vehiculos: any[] = [];
      let estimadoTotal = 0;
      const estimadosIndividuales: number[] = [];
      for (let i = 0; i < cantidadVehiculos; ++i) {
        if (!vins[i] || vins[i].length !== 17) throw new Error(`El VIN del vehículo ${i + 1} no es válido. Debe tener 17 caracteres.`);
        const v = await decodeVIN2Steps(vins[i]);
        if (!v.year || !v.make || !v.model) throw new Error(`No se pudo decodificar el VIN del vehículo ${i + 1}.`);
        // Calcular estimado individual
        const estimado = estimatePrice(v);
        estimadoTotal += estimado;
        estimadosIndividuales.push(estimado);
        vehiculos.push({
          vin: vins[i],
          ...v,
          estimado
        });
      }
      // Descuentos
      let descuento = 0;
      if (cantidadVehiculos === 1) descuento = 0.30;      // 30% de descuento para 1 vehículo
      else if (cantidadVehiculos === 2) descuento = 0.25;  // 25% de descuento para 2 vehículos
      else if (cantidadVehiculos === 3) descuento = 0.25;  // 25% de descuento para 3 vehículos
      else if (cantidadVehiculos === 4) descuento = 0.10;  // 10% de descuento para 4 vehículos
      else if (cantidadVehiculos >= 5) descuento = 0.15;   // 15% de descuento para 5 o más vehículos
      const totalConDescuento = Math.round((estimadoTotal * (1 - descuento)) * 100) / 100;
      // Mostrar resultado detallado
      setResultado({
        cantidad: cantidadVehiculos,
        vehiculos,
        estimadosIndividuales,
        estimadoTotal,
        descuento,
        totalConDescuento
      });
      // Enviar a Google Apps Script
      const fd = new FormData();
      fd.append("nombre", nombre);
      fd.append("nacimiento", nacimiento);
      fd.append("documento", documento);
      fd.append("direccion", direccion);
      fd.append("email", correo);
      fd.append("telefono", telefono);
      fd.append("cantidadVehiculos", String(cantidadVehiculos));
      fd.append("totalEstimado", String(totalConDescuento));
      vehiculos.forEach((v, idx) => {
        fd.append(`vehiculo${idx}`, JSON.stringify({
          vin: v.vin,
          year: v.year || '',
          make: v.make || '',
          model: v.model || '',
          bodyClass: v.bodyClass || '',
          estimated: v.estimado || 0
        }));
      });
      fd.append("timestamp", new Date().toISOString());
      fetch("https://script.google.com/macros/s/AKfycbwc9Wg3fubgmvIMlXPPoJVcgiQ96cQwVU_vIIM1Qr1oIPpO0OkrG-DBCRaVcGjgXiGA/exec", {
        method: "POST",
        mode: "no-cors",
        body: fd
      }).then(() => {
        setConfirm("✔️ Cotización guardada. Un asesor te contactará pronto.");
      }).catch(() => {
        setConfirm("");
      });
    } catch (err: any) {
      setError(err.message || "Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-[80vh] py-10 px-2">
      <div className="relative w-full max-w-xl">
        <form className="bg-rose-50 border border-rose-200 p-10 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-rose-200/70 focus-within:shadow-rose-200/90 flex flex-col gap-2" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-extrabold mb-2 text-rose-700 flex items-center gap-3 drop-shadow">
            <span className="bg-white rounded-full p-2 shadow text-rose-500 text-2xl">🚗</span> {t('quoteForm.resultTitle')}
          </h2>
          <p className="mb-6 text-rose-500 font-semibold text-base text-center">Cotiza en minutos y obtén el mejor precio con descuento exclusivo online.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div>
              <label htmlFor="numVehicles" className="block text-sm font-bold text-rose-700 mb-1">🚗 {t('quoteForm.numberOfVehiclesLabel')}</label>
              <select id="numVehicles" value={cantidadVehiculos} onChange={e => setCantidadVehiculos(Number(e.target.value))} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white rounded-lg shadow-sm transition">
                {(t('quoteForm.numberOfVehiclesOptions') as string[]).map((label, idx) => (
                  <option key={idx} value={idx + 1}>{label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-rose-700 mb-1">📅 {t('quoteForm.birthLabel')}</label>
              <input
                type="date"
                className="w-full border border-rose-200 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white transition"
                value={nacimiento}
                onChange={e => setNacimiento(e.target.value)}
                required
              />
            </div>
          </div>
          {Array.from({ length: cantidadVehiculos }).map((_, idx) => (
            <div key={idx} className="mb-4">
              <label className="block font-bold text-rose-700 mb-1">🔑 {t('quoteForm.vinLabel')}</label>
              <input
                type="text"
                className="w-full border border-rose-200 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white transition"
                value={vins[idx] || ''}
                onChange={e => handleVinChange(idx, e.target.value)}
                placeholder={t('quoteForm.vinPlaceholder')}
                maxLength={17}
                required
              />
            </div>
          ))}
          <label className="block font-bold text-rose-700 mb-1">👤 {t('quoteForm.nameLabel')}</label>
          <input
            type="text"
            className="w-full border border-rose-200 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white transition mb-2"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder={t('quoteForm.namePlaceholder')}
            required
          />
          <label className="block font-bold text-rose-700 mb-1">📧 {t('quoteForm.emailLabel')}</label>
          <input
            type="email"
            className="w-full border border-rose-200 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white transition mb-2"
            value={correo}
            onChange={e => setCorreo(e.target.value)}
            placeholder={t('quoteForm.emailPlaceholder')}
            required
          />
          <label className="block font-bold text-rose-700 mb-1">📱 {t('quoteForm.phoneLabel')}</label>
          <input
            type="tel"
            className="w-full border border-rose-200 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white transition mb-2"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            placeholder={t('quoteForm.phonePlaceholder')}
            required
          />
          <label className="block font-bold text-rose-700 mb-1">🪪 {t('quoteForm.idLabel')}</label>
          <input
            type="text"
            className="w-full border border-rose-200 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white transition mb-2"
            value={documento}
            onChange={e => setDocumento(e.target.value)}
            placeholder={t('quoteForm.idPlaceholder')}
            required
          />
          <label className="block font-bold text-rose-700 mb-1">🏠 {t('quoteForm.addressLabel')}</label>
          <input
            type="text"
            className="w-full border border-rose-200 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white transition mb-4"
            value={direccion}
            onChange={e => setDireccion(e.target.value)}
            placeholder={t('quoteForm.addressPlaceholder')}
            required
          />
          <button type="submit" className="w-full bg-gradient-to-r from-rose-500 via-rose-400 to-red-400 text-white font-extrabold py-3 rounded-xl mt-2 shadow-lg hover:scale-105 hover:shadow-rose-300 transition-all text-lg tracking-wide disabled:opacity-60" disabled={loading}>
            {loading ? t('quoteForm.loading') : t('quoteForm.cta')}
          </button>
          <p className="text-xs text-rose-500 mt-2 text-center">💨 {t('quoteForm.disclaimer')}</p>
          {error && <div className="bg-red-100 text-red-700 mt-4 p-2 rounded text-center font-bold animate-fade-in">{error}</div>}
        </form>
        {resultado && (
          <div className="mt-6 bg-green-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg mb-4">✅ {t('quoteForm.resultTitle')} ({resultado.cantidad} {resultado.cantidad === 1 ? t('quoteForm.vehicleSingular') : t('quoteForm.vehiclePlural')})</h3>
            <div className="bg-green-100 p-3 rounded mb-4 border-l-4 border-green-500">
              <strong>{t('quoteForm.discountTitle')}</strong> {t('quoteForm.discountDesc')}
            </div>
            <div className="mb-4 bg-gray-50 p-4 rounded relative">
              <div className="font-bold text-lg mb-1">{t('quoteForm.totalLabel')}</div>
              <div className="text-2xl text-blue-700 font-bold">${resultado.totalConDescuento.toFixed(2)}/mes</div>
              

            </div>
            <div className="mb-4">
              <div className="font-bold mb-2">{t('quoteForm.includedVehicles')}</div>
              {resultado.vehiculos.map((v: any, i: number) => (
                <div key={i} className="mb-3 bg-white border rounded p-3">
                  <div className="font-semibold mb-1">🚗 {v.year} {v.make} {v.model}</div>
                  <div className="text-xs text-gray-700 mb-1"><strong>VIN:</strong> {v.vin}</div>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-700">
                    {v.bodyClass && <div><strong>{t('quoteForm.typeLabel')}</strong> {v.bodyClass}</div>}
                    {v.fuelType && <div><strong>{t('quoteForm.fuelLabel')}</strong> {v.fuelType}</div>}
                    {v.engineHP && <div><strong>{t('quoteForm.hpLabel')}</strong> {v.engineHP}</div>}
                    {v.seats && <div><strong>{t('quoteForm.seatsLabel')}</strong> {v.seats}</div>}
                    {v.doors && <div><strong>{t('quoteForm.doorsLabel')}</strong> {v.doors}</div>}
                  </div>
                </div>
              ))}
            </div>
            <div className="font-medium text-gray-700 mt-4">
              <div className="p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-start gap-2">
                <span className="text-green-600">✔️</span>
                <span>{t('quoteForm.contactMessage').replace('✔️', '').trim()}</span>
              </div>
            </div>
            {confirm && showDiscount && (
              <div className="mt-4 animate-fade-in-up">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-800 p-4 rounded-lg shadow-lg border-2 border-yellow-300">
                  <div className="flex flex-col items-center">
                    <div className="font-bold flex items-center gap-2 text-center">
                      <span className="text-xl animate-bounce">🎉</span>
                      <span>{t('quoteForm.promoMessage')}</span>
                      <span className="text-xl animate-bounce" style={{animationDelay: '0.3s'}}>🎉</span>
                    </div>
                    <div className="text-sm mt-2 font-medium bg-yellow-100/50 px-3 py-1 rounded-full">
                      {t('quoteForm.termsMessage')}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <p className="text-xs text-gray-500 mt-4">{t('quoteForm.estimateDisclaimer')}</p>
          </div>
        )}
      </div>
    </section>
  );
}
