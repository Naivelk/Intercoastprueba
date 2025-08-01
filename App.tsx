
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Benefits from './components/Benefits';
import TrustSection from './components/TrustSection';
import QuoteForm from './components/QuoteForm';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WaveSeparator from './components/WaveSeparator';
import OfferButton from './components/OfferButton';
import InsurancePolicies from './components/InsurancePolicies';

const App: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA]">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Benefits />
        <WaveSeparator direction="down" fillColor="#212529" height="100px" />
        <TrustSection />
        <QuoteForm />
        <WaveSeparator direction="up" fillColor="#F8F9FA" height="80px" />
        <InsurancePolicies />
        <WaveSeparator direction="down" fillColor="#F8F9FA" height="80px" />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <OfferButton />
    </div>
  );
};

export default App;
