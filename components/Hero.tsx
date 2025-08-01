import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ShieldCheckIcon } from './icons';
import Logo from './Logo';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#003E73] to-[#007BFF] text-white relative overflow-hidden pt-16 md:pt-20">
      <div className="container mx-auto px-6 pb-32 md:pb-40 text-center">
        {/* Logo con animación */}
        <div 
          className={`flex justify-center mb-4 md:mb-6 transition-all duration-1000 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <Logo 
            variant="white" 
            className="h-32 md:h-40 w-auto max-w-[400px] md:max-w-[600px]" 
            width={600}
          />
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-100 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto drop-shadow-md px-4">
            {t('hero.subtitle')}
          </p>
          <a
            href="#quote-form"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label={t('hero.cta')}
          >
            <ShieldCheckIcon className="h-6 w-6" />
            <span className="whitespace-nowrap">{t('hero.cta')}</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: 'calc(100% + 1.3px)', height: '100px' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{ fill: '#F8F9FA' }}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
