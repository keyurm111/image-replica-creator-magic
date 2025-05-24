
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Empower Your Business with
        </h1>
        
        {/* Gradient Text */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            24X7 SMART AI THAT BOOST
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            SALES & PRODUCTIVITY
          </span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-white text-xl md:text-2xl mb-12 font-light">
          Join The Moment And Streamline Your Work
        </p>
        
        {/* CTA Button */}
        <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white text-xl font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Start with Just $79
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
