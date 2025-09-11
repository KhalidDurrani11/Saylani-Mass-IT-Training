
import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Impact', href: '#impact' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={() => scrollToSection('#home')} className="text-2xl font-bold text-saylani-blue">
              Saylani <span className="text-saylani-green">Roti Bank</span>
            </a>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href)
                }}
                className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-saylani-green transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="#donate" onClick={(e) => {e.preventDefault(); scrollToSection('#donate')}} className="bg-saylani-green text-white px-6 py-2 rounded-full font-semibold hover:bg-saylani-blue transition-colors duration-300 transform hover:scale-105">
              Donate Now
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-saylani-green"
            >
              {link.name}
            </a>
          ))}
          <a href="#donate" onClick={(e) => {e.preventDefault(); scrollToSection('#donate')}} className="block w-full text-center bg-saylani-green text-white mt-4 px-6 py-3 rounded-full font-semibold hover:bg-saylani-blue transition-colors duration-300">
            Donate Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
