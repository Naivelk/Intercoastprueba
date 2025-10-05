
import React, { Suspense, lazy, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WaveSeparator from './components/WaveSeparator';
import Loader from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary';
import Chatbot from './components/chatbot/Chatbot';
import EvaPhoneDock from './components/eva/EvaPhoneDock';
import EvaSoundHub from './components/eva/EvaSoundHub';
import EvaBubbleButton from './components/eva/EvaBubbleButton';
import EvaMascotCTA from './components/EvaMascotCTA';
import BrandStrip from './components/eva/BrandStrip';

// Carga diferida de componentes pesados
const TrustBadges = lazy(() => import('./components/TrustBadges'));
const Benefits = lazy(() => import('./components/Benefits'));
const TrustSection = lazy(() => import('./components/TrustSection'));
const QuoteForm = lazy(() => import('./components/QuoteForm'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const OfferButton = lazy(() => import('./components/OfferButton'));
const InsurancePolicies = lazy(() => import('./components/InsurancePolicies'));

const App: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen flex flex-col">
      <EvaSoundHub />
      <Header />
      <main className="flex-grow">
        <ErrorBoundary>
          <Hero />
          
          <Suspense fallback={<Loader />}>
            <TrustBadges />
            <EvaMascotCTA />
            <QuoteForm />
            <WaveSeparator direction="down" fillColor="#F8F9FA" height="80px" />
            <Benefits />
            <BrandStrip />
            <WaveSeparator direction="down" fillColor="#212529" height="100px" />
            <TrustSection />
            <InsurancePolicies />
            <WaveSeparator direction="down" fillColor="#F8F9FA" height="80px" />
            <Testimonials />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
        <OfferButton />
      </Suspense>
      
      {/* Chatbot dentro de dock tipo iPhone v2 */}
      <EvaPhoneDock>
        <Chatbot embedded />
      </EvaPhoneDock>
      {/* Burbuja con mascota para abrir/cerrar */}
      <EvaBubbleButton />
      
      {/* Script de Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </script>
    </div>
  );
};

export default App;
