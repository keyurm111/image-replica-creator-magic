
import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/039771cb-4189-47d9-87af-d107b22cfac4.png" 
            alt="TRYZENIQ Logo" 
            className="h-8 w-auto mr-3"
          />
          <span className="text-white text-xl font-bold">TRYZENIQ</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Platform</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">AI Agents</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Solutions</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Resources</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">About</a>
        </div>
        
        {/* Book Meeting Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          Book Meeting
        </button>
      </nav>
    </header>
  );
};

export default Header;
