
import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const navItems = [
    { name: 'Platform', href: '#' },
    { name: 'AI Agents', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <nav className="flex items-center justify-between w-full">
      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative text-white hover:text-purple-400 transition-colors duration-300 font-medium text-lg group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      
      {/* CTA Button */}
      <Button 
        variant="outline" 
        className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white border-none px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Book Meeting
      </Button>
    </nav>
  );
};

export default Navbar;
