import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { TagIcon } from './icons';

const OfferButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div 
        className="bg-[#2ECC71] text-white py-3 px-6 rounded-full inline-flex items-center gap-3 shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:rotate-[-2deg] animate-pulse cursor-pointer"
        onClick={() => {
          document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <TagIcon className="h-6 w-6" />
        <p className="font-bold text-lg">{t('hero.offer')}</p>
      </div>
    </div>
  );
};

export default OfferButton;
