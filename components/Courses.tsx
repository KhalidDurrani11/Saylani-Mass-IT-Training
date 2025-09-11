import React from 'react';
import { CodeIcon, AiIcon, CloudIcon, CybersecurityIcon, FreelanceIcon } from './icons';

interface Course {
  icon: JSX.Element;
  title: string;
  description: string;
}

const courses: Course[] = [
  {
    icon: <CodeIcon />,
    title: 'Web & App Development',
    description: 'Master front-end and back-end technologies to build modern, responsive websites and applications.',
  },
  {
    icon: <AiIcon />,
    title: 'Artificial Intelligence & Data Science',
    description: 'Dive into machine learning, data analysis, and AI to solve complex problems and drive innovation.',
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud Computing',
    description: 'Gain expertise in cloud platforms like AWS and Azure, mastering infrastructure as code and cloud services.',
  },
  {
    icon: <CybersecurityIcon />,
    title: 'Cybersecurity',
    description: 'Learn to protect networks, systems, and data from cyber threats with ethical hacking and defense techniques.',
  },
  {
    icon: <FreelanceIcon />,
    title: 'Freelancing & Entrepreneurship',
    description: 'Develop the business acumen to succeed as a freelancer or launch your own tech startup.',
  },
   {
    icon: <CodeIcon />,
    title: 'Graphic Design & UI/UX',
    description: 'Create stunning visuals and intuitive user interfaces for digital products that users love.',
  },
];

const CourseCard: React.FC<Course> = ({ icon, title, description }) => (
  // Added a subtle border on hover for a cleaner interaction cue
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-blue-500">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Courses Offered</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our courses are designed to provide practical, in-demand skills that open doors to global opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;