import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { 
  CreditCardIcon, 
  DollarSignIcon, 
  FacebookIcon, 
  InstagramIcon, 
  GoogleIcon, 
  TiktokIcon, 
  MapPinIcon, 
  PhoneCallIcon, 
  MessageSquareIcon, 
  CheckCircleIcon,
  StarIcon 
} from './icons';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    if (!targetId) return; // Prevents scrolling for href="#"

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerNavLinks = [
    { href: '#benefits', textKey: 'footer.navBenefits' },
    { href: '#quote-form', textKey: 'footer.navQuote' },
    { href: '#contact', textKey: 'footer.navContact' },
    { href: '#', textKey: 'footer.navPrivacy' },
  ];

  const socialLinks = [
    { 
      icon: <FacebookIcon className="h-6 w-6 hover:text-blue-500 transition-colors" />, 
      url: 'https://facebook.com',
      label: 'Facebook'
    },
    { 
      icon: <InstagramIcon className="h-6 w-6 hover:text-pink-500 transition-colors" />, 
      url: 'https://instagram.com',
      label: 'Instagram'
    },
    { 
      icon: <GoogleIcon className="h-6 w-6 hover:text-red-500 transition-colors" />, 
      url: 'https://g.page/intercoast-insurance',
      label: 'Google Business'
    },
    { 
      icon: <TiktokIcon className="h-6 w-6 hover:text-black transition-colors" />, 
      url: 'https://tiktok.com',
      label: 'TikTok'
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: Logo y lema */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start md:ml-20">
              <img 
                alt="Intercoast Insurance Logo" 
                className="h-16 w-auto" 
                src="/logo.png"
                style={{
                  filter: 'brightness(0) invert(1)',
                  maxWidth: '200px',
                  height: 'auto'
                }}
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-center md:text-left">
              {t('footer.tagline')}
            </p>
            
            {/* Botón de Google Reviews */}
            <div className="pt-3 md:ml-4">
              <a 
                href="https://g.page/intercoast-insurance/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-medium text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <StarIcon className="h-4 w-4 mr-2" />
                <span className="whitespace-nowrap">{t('footer.leaveReview')}</span>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider border-b border-gray-700 pb-2">
              {t('footer.navTitle')}
            </h3>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.textKey}>
                  <a
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                    {t(link.textKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider border-b border-gray-700 pb-2">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{t('footer.address')}</span>
              </li>
              <li className="flex items-center">
                <PhoneCallIcon className="h-5 w-5 text-gray-400 mr-3" />
                <div className="text-gray-300 text-sm">
                  <div>{t('footer.phone1')}</div>
                  <div>{t('footer.phone2')}</div>
                </div>
              </li>
              <li className="flex items-center">
                <MessageSquareIcon className="h-5 w-5 text-gray-400 mr-3" />
                <a href="https://wa.me/17756754559" className="text-gray-300 hover:text-white text-sm transition-colors">
                  {t('footer.whatsapp')}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">{t('footer.followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columna 4: Métodos de pago y certificaciones */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider border-b border-gray-700 pb-2">
              {t('footer.paymentTitle')}
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-lg hover:bg-gray-700/50 transition-colors flex-1 min-w-[120px] justify-center">
                <CreditCardIcon className="h-5 w-5 text-gray-200 mr-2" />
                <span className="text-sm font-medium">{t('footer.creditCards')}</span>
              </div>
              <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-lg hover:bg-gray-700/50 transition-colors flex-1 min-w-[120px] justify-center">
                <DollarSignIcon className="h-5 w-5 text-gray-200 mr-2" />
                <span className="text-sm font-medium">{t('footer.cash')}</span>
              </div>
              <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-lg hover:bg-gray-700/50 transition-colors flex-1 min-w-[120px] justify-center">
                <img 
                  alt="Zelle" 
                  className="h-5 w-auto mr-2" 
                  src="/zelle.png"
                />
                <span className="text-sm font-medium">{t('footer.zelle')}</span>
              </div>
            </div>

            {/* Certificaciones */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-300">{t('footer.license')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 font-bold text-sm">A+</span>
                <span className="text-sm text-gray-300">{t('footer.bbbRating')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center text-center space-y-3">
            <p className="text-center text-sm text-gray-400">
              {t('footer.copyright')} {new Date().getFullYear()} Intercoast Insurance. {t('footer.allRightsReserved')}
            </p>
            <div className="flex items-center space-x-2">
              <a 
                href="#" 
                className="text-gray-500 hover:text-white text-xs transition-colors"
              >
                {t('footer.termsOfService')}
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="#" 
                className="text-gray-500 hover:text-white text-xs transition-colors"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
