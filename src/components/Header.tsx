
import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
