
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { PhoneIcon, MessageCircleIcon, SendIcon } from './icons';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212529]">{t('contact.title')}</h2>
          <p className="text-gray-600 mt-4 text-lg">{t('contact.subtitle')}</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <a
            className="block bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            href="tel:+15623812012"
          >
            <PhoneIcon className="text-[#0057D9] h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#212529]">{t('contact.callTitle')}</h3>
            <p className="text-gray-600 mb-4">{t('contact.callText')}</p>
            <span className="bg-[#0057D9] text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 shadow-lg mt-4">
              (562) 381-2012
            </span>
          </a>
          <a
            className="block bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            href="https://wa.me/15623812012"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircleIcon className="text-[#0057D9] h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#212529]">{t('contact.whatsappTitle')}</h3>
            <p className="text-gray-600 mb-4">{t('contact.whatsappText')}</p>
            <span className="bg-[#0057D9] text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 shadow-lg mt-4">
              <SendIcon className="h-5 w-5" />
              {t('contact.whatsappCta')}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
