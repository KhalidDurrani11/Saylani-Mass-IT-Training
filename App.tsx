
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Challenges from './components/Challenges';
import Solutions from './components/Solutions';
import Courses from './components/Courses';
import Impact from './components/Impact';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Challenges />
        <Solutions />
        <Courses />
        <Impact />
        <TechStack />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
};

export default App;
