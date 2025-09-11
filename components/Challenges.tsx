import React from 'react';

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start space-x-3">
        <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <p className="text-gray-600">{children}</p>
    </li>
);

const Challenges: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div className="lg:col-start-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Challenges We Address</h2>
                        <p className="mt-4 text-lg text-gray-600">Pakistan's youth face significant hurdles in accessing quality education and employment opportunities. SMIT was founded to tackle these critical issues head-on.</p>
                        <ul className="mt-8 space-y-4 text-lg">
                            <BulletPoint>High rates of youth unemployment due to a lack of marketable skills.</BulletPoint>
                            <BulletPoint>Limited access to affordable, high-quality IT education for the masses.</BulletPoint>
                            <BulletPoint>A growing digital skills gap between industry demands and graduate capabilities.</BulletPoint>
                        </ul>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                        <div className="relative">
                            <img className="rounded-lg shadow-xl w-full h-auto object-cover" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop" alt="Students facing challenges" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenges;