
import React from 'react';

const StepCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="mb-4 inline-block p-4 bg-saylani-light-blue rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-saylani-blue mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-saylani-blue">How It Works</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Our process is simple, efficient, and impactful. Here’s how we turn your donations into hope.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            title="Collect Donations"
            description="We gather financial support and surplus food from generous individuals, restaurants, and partners."
          />
          <StepCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0118 18c-5.523 0-10-4.477-10-10a8 8 0 011.343-4.343m6.314 5.343a8 8 0 01-1.343 4.343" /></svg>}
            title="Prepare Meals"
            description="Our volunteers and chefs hygienically prepare thousands of wholesome and nutritious meals daily."
          />
          <StepCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1zM21 11.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z" /></svg>}
            title="Distribute Food"
            description="Meals are distributed through our dedicated centers and mobile units to reach the most vulnerable communities."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
