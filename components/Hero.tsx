import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ShieldCheckIcon, CheckCircleIcon, LightningBoltIcon, ClockIcon } from './icons';
import Logo from './Logo';

const FeatureItem: React.FC<{ icon: React.ReactNode; text: string; delay?: number }> = ({ icon, text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200 + (delay * 100));
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`
        flex items-center justify-center gap-2 
        bg-gradient-to-r from-red-50/95 to-red-100/95
        backdrop-blur-sm px-4 py-2 rounded-full
        border border-red-100/80
        transform transition-all duration-500 ease-out
        hover:shadow-lg hover:shadow-red-200/20 hover:scale-105
        hover:border-red-200
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      <span className="text-red-500">{icon}</span>
      <span className="text-sm md:text-base font-medium text-red-600">{text}</span>
    </div>
  );
};

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003E73] to-[#007BFF] text-white">
      {/* Degradado adicional en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#003E73] to-transparent"></div>
      {/* Imagen izquierda, completamente responsiva */}
      <div 
        className="
          hidden md:block absolute z-0 pointer-events-none
          left-[5%] top-1/2 -translate-y-1/2
          w-[22vw] max-w-[340px] min-w-[160px]
        " 
        style={{minHeight: '160px'}}
      >
        <img
          src="/hero/izquierda3.png"
          alt="Seguro"
          className="w-full h-auto object-contain"
          draggable={false}
          onError={(e) => console.error('Error cargando imagen izquierda:', e)}
        />
      </div>

      {/* Imagen derecha, completamente responsiva */}
      <div 
        className="
          hidden md:block absolute z-0 pointer-events-none
          right-0 top-1/2
          w-[29vw] max-w-[480px] min-w-[200px]
        " 
        style={{height: 'auto', transform: 'translateY(-15%)'}}
      >
        <img
          src="/hero/derecha2.png"
          alt="Carro y moto"
          className="w-full h-auto object-contain"
          draggable={false}
          onError={(e) => console.error('Error cargando imagen derecha:', e)}
        />
      </div>

      {/* Contenido central */}
      <div className="
          relative z-10 container mx-auto px-6
          pb-32 md:pb-40 text-center
          max-w-5xl
          xl:px-[17vw]
        ">
        {/* Logo con animación */}
        <div 
          className={`flex justify-center mb-4 md:mb-6 transition-all duration-1000 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <Logo 
            variant="white" 
            className="h-32 md:h-40 w-auto max-w-[400px] md:max-w-[600px] drop-shadow-lg" 
            width={600}
          />
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-100 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md px-4">
            {t('hero.subtitle')}
          </p>
          
          {/* Características destacadas */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-3xl mx-auto">
            <FeatureItem 
              icon={<CheckCircleIcon className="h-5 w-5" />} 
              text={t('hero.features.secure')}
              delay={0}
            />
            <FeatureItem 
              icon={<LightningBoltIcon className="h-5 w-5" />} 
              text={t('hero.features.fast')}
              delay={1}
            />
            <FeatureItem 
              icon={<ClockIcon className="h-5 w-5" />} 
              text={t('hero.features.easy')}
              delay={2}
            />
          </div>

          {/* Botón de cotización eliminado */}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1920 160"
          preserveAspectRatio="none"
          className="min-w-[110%] h-20 md:h-24 block -ml-1"
        >
          <path
            fill="#ffffff"
            d="M0,96C120,128,240,160,480,160C720,160,960,96,1200,80C1440,64,1680,96,1920,112L1920,160L0,160Z"
          />
        </svg>
      </div>
      
      {/* Estilos globales para animaciones */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }

        `
      }} />
    </section>
  );
};

export default Hero;
