
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">SMIT</h1>
          </a>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="#contact" className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md">
              Apply Now
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                {link.name}
              </a>
            ))}
          </div>
          <div className="p-4">
             <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
