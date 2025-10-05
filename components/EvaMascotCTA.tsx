import React from 'react';

export default function EvaMascotCTA() {
  const openChat = () => {
    try {
      window.dispatchEvent(new CustomEvent('eva:dock:open'));
      window.dispatchEvent(new CustomEvent('eva:sound:open'));
      // Fallback toggle shortly after to handle edge event listeners
      setTimeout(() => {
        try { window.dispatchEvent(new CustomEvent('eva:toggle')); } catch {}
      }, 30);
    } catch {}
  };

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        className="
          relative overflow-hidden rounded-3xl border border-black/5 bg-white
          shadow-[0_10px_30px_-10px_rgb(2_6_23/0.2)]
        "
        style={{
          backgroundImage:
            'radial-gradient(1200px 400px at -10% -20%, rgba(56,189,248,0.12), transparent 60%),' +
            'radial-gradient(800px 300px at 110% 10%, rgba(16,185,129,0.10), transparent 60%)',
        }}
      >
        {/* Decoraciones de fondo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-sky-200/70 to-emerald-200/70 blur-2xl"
        />
        {/* Eliminamos el patrón de cuadrícula para un look más limpio */}

        <div className="grid items-center gap-6 p-6 md:grid-cols-[minmax(280px,420px)_1fr] md:p-10">
          {/* Ilustración */}
          <div className="relative grid place-items-center">
            <button onClick={openChat} aria-label="Abrir chat con EVA" className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-2xl">
              <picture>
                <source srcSet="/eva/eva-baby-cta-1200.webp" media="(min-width: 768px)" type="image/webp" />
                <source srcSet="/eva/eva-baby-cta-720.webp" type="image/webp" />
                <img
                  src="/eva/eva-baby-cta.webp"
                  onError={(e) => (e.currentTarget.src = '/eva/EVA-baby-CTA.png')}
                  alt="EVA invita a chatear ahora"
                  className="max-h-[360px] w-auto md:max-h-[420px] drop-shadow-xl select-none"
                  width={1200}
                  height={1200}
                  loading="eager"
                  draggable={false}
                />
              </picture>
            </button>
          </div>

          {/* Texto + botón */}
          <div className="relative z-10">
            <p className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Habla ya mismo con <span className="text-sky-600">nuestra asistente virtual</span>
            </p>
            <p className="mt-3 max-w-prose text-neutral-600">
              EVA te ayuda a cotizar, resolver dudas y avanzar en tu compra en minutos.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={openChat}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3
                           font-semibold text-white shadow hover:bg-emerald-600 focus:outline-none focus:ring-2
                           focus:ring-emerald-400 focus:ring-offset-2"
                aria-label="Abrir chat con EVA"
              >
                Abrir chat con EVA
              </button>

              <span className="text-xs text-neutral-500">100% online • Respuesta en segundos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
