
import React from 'react';

const DonationCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border-t-4 border-saylani-green">
      <div className="text-saylani-green mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-saylani-blue mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <button className="mt-auto bg-saylani-green text-white px-6 py-2 rounded-full font-semibold hover:bg-saylani-blue transition-colors duration-300">
        Donate {title}
      </button>
    </div>
);


const DonationOptions: React.FC = () => {
  return (
    <section id="donate" className="py-20 bg-saylani-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-saylani-blue">Ways to Donate</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Every contribution helps. Choose the donation method that works best for you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <DonationCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                title="Cash"
                description="Your cash donations are used to purchase fresh ingredients and cover operational costs."
            />
            <DonationCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M5 3a2 2 0 00-2 2v1h4V5a2 2 0 00-2-2zm14 0a2 2 0 00-2 2v1h4V5a2 2 0 00-2-2zM5 11h4a1 1 0 011 1v5h-1a1 1 0 01-1-1v-2a1 1 0 00-1-1H5z" /></svg>}
                title="Food Items"
                description="Donate non-perishable food items like flour, rice, lentils, and oil at our collection points."
            />
            <DonationCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
                title="Online Transfer"
                description="Securely donate online through our portal using your credit/debit card or bank account."
            />
            <DonationCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                title="Zakat"
                description="Fulfill your religious obligation by donating your Zakat, which we ensure reaches the most deserving."
            />
        </div>
      </div>
    </section>
  );
};

export default DonationOptions;
