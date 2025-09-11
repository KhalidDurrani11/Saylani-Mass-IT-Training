import React from 'react';
import { ApplicationIcon, TrainingIcon, ProjectIcon, InternshipIcon, CareerIcon } from './icons';

interface TimelineStepProps {
  icon: JSX.Element;
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ icon, title, description, isLast = false }) => (
  // Added a hover effect to the entire step
  <div className="flex items-start md:block md:text-center group transition-transform duration-300 hover:scale-105">
    <div className="flex-shrink-0">
      <div className="relative flex items-center justify-center">
        {/* Added a gradient to the icon background */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg group-hover:shadow-xl transition-shadow">
          {icon}
        </div>
        {/* Made the connecting line slightly thicker/more prominent */}
        {!isLast && (
          <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-300"></div>
        )}
         {!isLast && (
          <div className="md:hidden absolute top-full left-1/2 w-0.5 h-full bg-blue-300 -translate-x-1/2"></div>
        )}
      </div>
    </div>
    <div className="ml-6 md:ml-0 md:mt-4 flex-1">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Your Journey at SMIT</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From application to employment, we provide a clear roadmap for your success.
          </p>
        </div>
        <div className="relative">
           {/* Increased spacing between items for a less cramped look */}
           <div className="flex flex-col md:flex-row justify-between space-y-20 md:space-y-0 md:space-x-8">
              <TimelineStep 
                icon={<ApplicationIcon/>} 
                title="Application"
                description="Submit your application and take our entrance test to get started."
              />
              <TimelineStep 
                icon={<TrainingIcon />} 
                title="Training"
                description="Engage in intensive, hands-on training led by industry experts."
              />
              <TimelineStep 
                icon={<ProjectIcon />} 
                title="Projects"
                description="Apply your skills by building real-world projects for your portfolio."
              />
              <TimelineStep 
                icon={<InternshipIcon />} 
                title="Internship"
                description="Gain practical experience through internships with our partner companies."
              />
               <TimelineStep 
                icon={<CareerIcon />} 
                title="Career"
                description="Launch your career as a skilled professional in the tech industry."
                isLast
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;