import React from 'react';

const CheckPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0">
      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <p className="text-gray-600">{children}</p>
  </li>
);

const Solutions: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Solution: Empowering Through Skills</h2>
            <p className="mt-4 text-lg text-gray-600">SMIT provides a comprehensive solution by offering world-class training that is both accessible and relevant to today's job market.</p>
            <ul className="mt-8 space-y-4 text-lg">
              <CheckPoint>Free access to a wide range of career-oriented IT courses.</CheckPoint>
              <CheckPoint>An industry-aligned curriculum developed with input from tech leaders.</CheckPoint>
              <CheckPoint>A focus on hands-on practical learning through real-world projects.</CheckPoint>
              <CheckPoint>Pathways to employment, freelancing, and entrepreneurship.</CheckPoint>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="relative">
              <img className="rounded-lg shadow-xl w-full h-auto object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" alt="Students learning in a modern lab" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;