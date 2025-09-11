import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* More tech-focused background image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
      {/* Switched to a gradient overlay for a more modern feel */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-blue-900/60"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Saylani Mass IT Training Program (SMIT)
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8 max-w-3xl mx-auto">
          Empowering the youth with free digital skills for a brighter future
        </p>
        <a href="#contact" className="px-8 py-4 bg-blue-600 text-white text-lg rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default Hero;