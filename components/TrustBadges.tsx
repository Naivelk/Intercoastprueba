
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { LockIcon, StarIcon, AwardIcon } from './icons';

const TrustBadges: React.FC = () => {
  const { t } = useLanguage();

  const badges = [
    { icon: <LockIcon className="text-[#2ECC71] h-7 w-7" />, textKey: 'trustBadges.secure' },
    { icon: <StarIcon className="text-yellow-500 fill-yellow-500 h-7 w-7" />, textKey: 'trustBadges.google' },
    { icon: <AwardIcon className="text-blue-800 h-7 w-7" />, textKey: 'trustBadges.bbb' },
  ];

  return (
    <section className="py-12 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center justify-center space-x-3">
              {badge.icon}
              <p className="font-semibold text-gray-700">{t(badge.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
