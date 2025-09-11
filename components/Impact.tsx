import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-blue-50 p-6 rounded-lg text-center shadow-inner">
    <p className="text-4xl md:text-5xl font-extrabold text-blue-600">{value}</p>
    <p className="mt-2 text-lg font-medium text-gray-700">{label}</p>
  </div>
);

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Impact & Achievements</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We measure our success by the success of our students. The numbers speak for themselves.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard value="50,000+" label="Students Trained" />
          <StatCard value="10,000+" label="Graduates Employed" />
          <StatCard value="$5M+" label="Freelancing Income" />
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Student Success Story</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img className="w-24 h-24 rounded-full object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" alt="Successful student" />
            <div>
              <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
                “SMIT completely changed my life. I went from being unemployed to a successful freelance web developer working with international clients. The skills and mentorship I received were invaluable.”
              </blockquote>
              <p className="mt-4 font-semibold text-gray-900">Aisha Khan</p>
              <p className="text-gray-500">Web & App Development Graduate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;