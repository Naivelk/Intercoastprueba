
import React, { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const QuoteForm: React.FC = () => {
  const { t } = useLanguage();

  // Asegurar que el iframe se cargue correctamente en producción
  useEffect(() => {
    // Añadir estilos específicos para el iframe
    const style = document.createElement('style');
    style.textContent = `
      .form-iframe {
        width: 100%;
        min-height: 1000px;
        border: none;
        margin: 0;
        padding: 0;
        display: block;
        overflow: hidden;
      }
      @media (max-width: 768px) {
        .form-iframe {
          min-height: 1100px;
        }
      }
      
      /* Estilos para el formulario dentro del iframe */
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
      }
      
      .container {
        padding: 0;
        width: 100%;
        max-width: 100%;
        margin: 0;
      }
      
      #formulario {
        padding: 1.5rem;
        max-width: 100%;
      }
      
      .form-header {
        margin-bottom: 1.5rem;
        text-align: center;
      }
      
      .form-header h2 {
        font-size: 1.75rem;
        margin-bottom: 0.5rem;
        color: #1f2937;
      }
      
      .form-header p {
        font-size: 1.1rem;
        color: #4b5563;
      }
      
      /* Ajustar los elementos del formulario */
      label, input, select, button {
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Usar URL absoluta para producción y relativa para desarrollo
  const formUrl = process.env.NODE_ENV === 'production' 
    ? '/formulario/index.html' 
    : '/formulario/index.html';

  // Datos de beneficios/promociones con iconos temáticos de seguros
  const benefits = [
    {
      emoji: '🛡️',
      title: t('footer.benefitCards.totalCoverage.title'),
      description: t('footer.benefitCards.totalCoverage.description'),
      color: 'bg-blue-50 text-blue-700',
      iconBg: 'bg-blue-100 text-blue-600',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'
    },
    {
      emoji: '💵',
      title: t('footer.benefitCards.saveUpTo.title'),
      description: t('footer.benefitCards.saveUpTo.description'),
      color: 'bg-green-50 text-green-700',
      iconBg: 'bg-green-100 text-green-600',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z'
    },
    {
      emoji: '⚡',
      title: t('quoteForm.benefits.fastAndEasy.title'),
      description: t('quoteForm.benefits.fastAndEasy.description'),
      color: 'bg-yellow-50 text-yellow-700',
      iconBg: 'bg-yellow-100 text-yellow-600',
      icon: 'M7 2v11h3v9l7-12h-4l4-8z'
    },
    {
      emoji: '📱',
      title: t('quoteForm.benefits.mobileApp.title'),
      description: t('quoteForm.benefits.mobileApp.description'),
      color: 'bg-purple-50 text-purple-700',
      iconBg: 'bg-purple-100 text-purple-600',
      icon: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z'
    },
    {
      emoji: '👨‍👩‍👧‍👦',
      title: t('quoteForm.benefits.familyProtection.title'),
      description: t('quoteForm.benefits.familyProtection.description'),
      color: 'bg-red-50 text-red-700',
      iconBg: 'bg-red-100 text-red-600',
      icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
    },
    {
      emoji: '🛟',
      title: 'Asistencia 24/7',
      description: 'Servicio de emergencia disponible las 24 horas del día.',
      color: 'bg-cyan-50 text-cyan-700',
      iconBg: 'bg-cyan-100 text-cyan-600',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'
    }
  ];

  // Función para obtener beneficios aleatorios
  const getRandomBenefits = (count: number) => {
    const shuffled = [...benefits].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const leftBenefits = getRandomBenefits(3);
  const rightBenefits = getRandomBenefits(3);

  return (
    <section className="py-8 md:py-12 w-full bg-gradient-to-b from-white to-gray-50" id="quote-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Cotización en Línea
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('quoteForm.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('quoteForm.subtitle')}
          </p>
          
          {/* Process Steps */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {t<string[]>('quoteForm.steps').map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xl font-bold mb-2">
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{step}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Beneficios lado izquierdo */}
          <div className="hidden lg:block w-full lg:w-1/4 space-y-6 sticky top-6">
            {leftBenefits.map((benefit, index) => (
              <div key={`left-${index}`} className={`${benefit.color} p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}>
                <div className={`w-12 h-12 ${benefit.iconBg} rounded-full flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={benefit.icon}></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Formulario */}
          <div className="w-full lg:w-2/4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe 
                src={formUrl}
                className="form-iframe w-full"
                title="Cotizador de Seguros"
                loading="eager"
                sandbox="allow-same-origin allow-forms allow-scripts allow-popups allow-top-navigation"
                style={{ 
                  border: 'none',
                  display: 'block',
                  margin: '0 auto',
                  width: '100%',
                  minHeight: '1000px'
                }}
              />
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                {t('quoteForm.disclaimer')}
              </p>
            </div>
          </div>
          
          {/* Beneficios lado derecho */}
          <div className="hidden lg:block w-full lg:w-1/4 space-y-6 sticky top-6">
            {rightBenefits.map((benefit, index) => (
              <div key={`right-${index}`} className={`${benefit.color} p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}>
                <div className={`w-12 h-12 ${benefit.iconBg} rounded-full flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={benefit.icon}></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-opacity-90">{benefit.description}</p>
              </div>
            ))}
            
            {/* Sección de confianza */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">{t('whyChooseUs.title')}</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                {(t<string[]>('whyChooseUs.points') as string[]).map((point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Beneficios para móviles */}
        <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.slice(0, 4).map((benefit, index) => (
            <div key={`mobile-${index}`} className={`${benefit.color} p-4 rounded-lg shadow-sm`}>
              <div className="flex items-start">
                <div className={`w-10 h-10 ${benefit.iconBg} rounded-full flex-shrink-0 flex items-center justify-center mr-3`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={benefit.icon}></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                  <p className="text-xs opacity-90">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
