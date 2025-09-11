
import React from 'react';

const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')" }}></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          No One Sleeps Hungry
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-light max-w-3xl mx-auto">
          Join Saylani Roti Bank in our mission to eradicate hunger and bring smiles to millions of faces.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => scrollToSection('#donate')} className="bg-saylani-green text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-saylani-blue transition-colors duration-300 transform hover:scale-105 w-full sm:w-auto">
            Donate Now
          </button>
          <button onClick={() => scrollToSection('#about')} className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-saylani-blue transition-colors duration-300 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
