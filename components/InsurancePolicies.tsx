import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Car, Home, Bike, Sailboat } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PolicyModal from './PolicyModal';

interface PolicyType {
  icon: React.ReactNode;
  title: string;
  description: string;
  emoji: string;
  gradient: string;
  delay: string;
  coverageType: string[];
  coverages: string[];
  benefits: string[];
  type: 'auto' | 'home' | 'motorcycle' | 'boat';
}

interface PolicyCardProps extends PolicyType {
  isActive?: boolean;
  onClick?: () => void;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ 
  icon, 
  title, 
  description, 
  emoji, 
  gradient, 
  delay,
  coverageType,
  isActive = false,
  onClick
}) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className={`h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
        isActive ? 'ring-2 ring-blue-500' : ''
      }`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex justify-between items-start p-4">
        <div className={`h-2 ${gradient} rounded-full flex-1 mt-2`}></div>
        <div className="flex flex-wrap justify-end gap-1 ml-2">
          {coverageType.map((type, idx) => (
            <span 
              key={idx}
              className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-4 mx-auto" style={{ background: `${gradient}20` }}>
          {React.cloneElement(icon as React.ReactElement, {
            // @ts-ignore - Ignorar error de tipo para className
            className: 'w-8 h-8',
            // @ts-ignore - Ignorar error de tipo para style
            style: { fill: 'none', strokeWidth: '1.5px' }
          })}
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center mb-2 flex items-center justify-center">
          <span className="mr-2" role="img" aria-hidden="true">{emoji}</span>
          {title}
        </h3>
        <p className="text-gray-600 text-center mb-6">{description}</p>
        <div className="text-center">
            <button
              type="button"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group w-full"
              onClick={onClick}
            >
              {title.includes('Auto') && '🚗'}
              {title.includes('Hogar') && '🏠'}
              {title.includes('Moto') && '🏍️'}
              {title.includes('Bote') && '⛵'}
              <span className="ml-2">{t('common.viewDetails')}</span>
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

const InsurancePolicies: React.FC = () => {
  const { t } = useLanguage();
  const [selectedPolicy, setSelectedPolicy] = useState<typeof policies[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const policies = [
    {
      icon: <Car />,
      title: t('policies.auto.title'),
      description: t('policies.auto.description'),
      emoji: '🚗',
      gradient: 'from-blue-500 to-blue-600',
      delay: '100',
      type: 'auto',
      coverageType: ['Cobertura Total', 'Daños a Terceros', 'Asistencia Vial'],
      coverages: [
        '✅ Responsabilidad civil por daños a terceros (obligatoria en California)',
        '🚘 Daños al vehículo propio por accidente',
        '🔧 Asistencia en carretera (grúa, cambio de llanta, batería)',
        '🛡️ Protección contra robo, vandalismo y desastres naturales',
        '👨‍⚕️ Gastos médicos para conductor y pasajeros',
        '🔄 Cobertura de autos alquilados y reemplazo'
      ],
      benefits: [
        'Cotización rápida',
        'Personalizable según tu presupuesto',
        'Ideal para autos nuevos o usados'
      ]
    },
    {
      icon: <Home />,
      title: t('policies.home.title'),
      description: t('policies.home.description'),
      emoji: '🏠',
      gradient: 'from-green-500 to-teal-500',
      delay: '200',
      type: 'home',
      coverageType: ['Cobertura Integral', 'Responsabilidad Civil', 'Daños Materiales'],
      coverages: [
        '🔥 Incendios, explosiones, humo',
        '🌪️ Daños por tormentas, granizo o sismos (según la región)',
        '🧯 Robo o vandalismo',
        '💧 Fugas de agua o daños por plomería',
        '📦 Bienes personales (electrodomésticos, joyas, computadoras)',
        '👷 Responsabilidad civil si alguien se lesiona en tu propiedad'
      ],
      benefits: [
        'Tranquilidad para tu inversión más importante',
        'Protección del hogar y todo lo que contiene',
        'Opciones con y sin deducible'
      ]
    },
    {
      icon: <Bike />,
      title: t('policies.motorcycle.title'),
      description: t('policies.motorcycle.description'),
      emoji: '🏍️',
      gradient: 'from-amber-500 to-orange-500',
      delay: '300',
      type: 'motorcycle',
      coverageType: ['Cobertura Básica', 'Robo Total', 'Asistencia en Ruta'],
      coverages: [
        '🛵 Daños a tu moto en caso de accidente o caída',
        '🚧 Daños a terceros y sus bienes',
        '🚑 Cobertura médica al conductor',
        '🛠 Asistencia en ruta y reparación',
        '🔐 Robo total o parcial'
      ],
      benefits: [
        'Protege tus recorridos diarios y de fin de semana',
        'Ahorro en reparaciones y responsabilidad legal',
        'Ideal para motos deportivas o de uso personal'
      ]
    },
    {
      icon: <Sailboat />,
      title: t('policies.boat.title'),
      description: t('policies.boat.description'),
      emoji: '⛵',
      gradient: 'from-indigo-500 to-purple-600',
      delay: '400',
      type: 'boat',
      coverageType: ['Casco Náutico', 'Responsabilidad Civil', 'Asistencia Náutica'],
      coverages: [
        '⚓ Daños físicos al bote (colisión, varada, incendio)',
        '💼 Responsabilidad civil por lesiones a terceros',
        '🧭 Robo, vandalismo o hundimiento',
        '🛠 Remolque de emergencia',
        '⚠ Daños en muelles, rampas o durante transporte'
      ],
      benefits: [
        'Navega con seguridad y confianza',
        'Cobertura tanto en el agua como fuera de ella',
        'Ideal para embarcaciones recreativas, jetskis, y lanchas'
      ]
    }
  ];

  const openPolicyModal = (policy: typeof policies[number]) => {
    setSelectedPolicy(policy);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50" id="policies">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {t('policies.subtitleBadge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('policies.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('policies.subtitle')}
          </p>
        </div>
        
        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {policies.map((policy, index) => (
            <PolicyCard 
              key={`desktop-${index}`} 
              {...policy} 
              onClick={() => openPolicyModal(policy)}
            />
          ))}
        </div>

        {/* Mobile Carousel - Only shows on mobile */}
        <div className="md:hidden w-full py-4">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="w-full"
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.5,
              },
            }}
          >
            {policies.map((policy, index) => (
              <SwiperSlide key={`mobile-${index}`}>
                <PolicyCard 
                  {...policy} 
                  isActive={true} 
                  onClick={() => openPolicyModal(policy)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <PolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        policy={selectedPolicy}
      />
    </section>
  );
};

export default InsurancePolicies;
