
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;
