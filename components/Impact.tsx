
import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter: React.FC<{ end: number; duration?: number; label: string }> = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const animateCount = () => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-6xl font-extrabold text-white">
        {count.toLocaleString()}+
      </p>
      <p className="text-lg text-saylani-light-blue mt-2">{label}</p>
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-saylani-blue relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=3')" }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white">Our Impact</h2>
                <p className="text-saylani-light-blue mt-2 max-w-2xl mx-auto">Your contributions create tangible change. Here's a glimpse of what we achieve together.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimatedCounter end={125000} label="Meals Served Per Day" />
                <AnimatedCounter end={75000} label="Families Supported Monthly" />
                <AnimatedCounter end={15} label="Cities Covered" />
            </div>
        </div>
    </section>
  );
};

export default Impact;
