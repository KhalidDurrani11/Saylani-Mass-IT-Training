
import React from 'react';
import { EducationIcon, SkillsIcon, CareersIcon } from './icons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About the Program</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to bridge the digital divide by providing free, high-quality IT education to underprivileged youth, equipping them with the skills needed to thrive in the global tech industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
              <EducationIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Training</h3>
            <p className="text-gray-600">Completely free of cost, high-quality IT training for everyone, removing financial barriers.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto mb-4">
              <SkillsIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Labs</h3>
            <p className="text-gray-600">State-of-the-art computer labs with the latest hardware and software for hands-on learning.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mx-auto mb-4">
               <CareersIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experienced Instructors</h3>
            <p className="text-gray-600">Learn from industry experts and seasoned professionals dedicated to student success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
