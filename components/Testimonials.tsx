
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { StarIcon, StarHalfIcon } from './icons';

const TestimonialCard: React.FC<{ rating: number; reviewKey: string; client: string }> = ({ rating, reviewKey, client }) => {
  const { t } = useLanguage();
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  
  return (
    <div className="bg-[#F8F9FA] p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="flex items-center mb-4">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} className="text-[#FFC107] fill-[#FFC107] h-7 w-7 mr-1" />
        ))}
        {halfStar && <StarHalfIcon key="half" className="text-[#FFC107] h-7 w-7 mr-1" />}
         {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <StarIcon key={`empty-${i}`} className="text-gray-300 h-7 w-7 mr-1" />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">"{t(reviewKey)}"</p>
      <p className="font-bold text-[#212529]">{client}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212529]">{t('testimonials.title')}</h2>
          <p className="text-gray-600 mt-4 text-lg">{t('testimonials.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <TestimonialCard rating={4.5} reviewKey="testimonials.review1" client={t('testimonials.client1')} />
          <TestimonialCard rating={5} reviewKey="testimonials.review2" client={t('testimonials.client2')} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
