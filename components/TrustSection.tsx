
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { FileCheck2Icon, UsersIcon, ThumbsUpIcon } from './icons';

const TrustItem: React.FC<{ icon: React.ReactNode; titleKey: string; subtitle: string }> = ({ icon, titleKey, subtitle }) => {
  const { t } = useLanguage();
  return (
    <div className="text-center">
      <div className="bg-[#FFC107] text-[#212529] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
        {icon}
      </div>
      <p className="mt-2 font-semibold text-xl">{t(titleKey)}</p>
      <p className="text-gray-300">{subtitle}</p>
    </div>
  );
};

const TrustSection: React.FC = () => {
  const { t } = useLanguage();
  
  const trustData = [
    { icon: <FileCheck2Icon className="h-12 w-12" />, titleKey: 'trustSection.license', subtitle: '#0K94627' },
    { icon: <UsersIcon className="h-12 w-12" />, titleKey: 'trustSection.clients', subtitle: t('trustSection.clientsSub') },
    { icon: <ThumbsUpIcon className="h-12 w-12" />, titleKey: 'trustSection.experience', subtitle: t('trustSection.experienceSub') },
  ];

  return (
    <section className="pt-20 pb-44 bg-[#212529] text-white relative overflow-hidden" id="trust-section">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">{t('trustSection.title')}</h2>
        <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-lg">{t('trustSection.subtitle')}</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {trustData.map((item, index) => (
            <TrustItem key={index} {...item} />
          ))}
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

export default TrustSection;
