
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-saylani-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="wow slideInLeft">
            <img src="https://picsum.photos/600/400?random=2" alt="Volunteers serving food" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-saylani-blue mb-4">About Saylani Roti Bank</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Saylani Roti Bank is a cornerstone of the Saylani Welfare International Trust's mission to alleviate hunger. We believe that access to food is a fundamental human right. Our operations are designed to efficiently collect surplus food and donations to prepare and distribute nutritious meals to those in need across the nation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated team of volunteers and staff work tirelessly around the clock, ensuring that every donation, big or small, reaches the plates of deserving individuals and families. We are committed to transparency, compassion, and creating a sustainable solution to food insecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
