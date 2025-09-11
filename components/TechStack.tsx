import React from 'react';

const TechIcon: React.FC<{ name: string; children: React.ReactNode }> = ({ name, children }) => (
  // Updated styles for dark theme
  <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-transform transform hover:scale-110 hover:bg-gray-700">
    <div className="w-12 h-12 mb-2 text-gray-300">{children}</div>
    <span className="font-medium text-sm text-gray-400">{name}</span>
  </div>
);

const TechStack: React.FC = () => {
  return (
    // Switched to a dark theme for this section
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Text colors updated for dark background */}
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technology Stack</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            We leverage modern technologies to build our platform and deliver a seamless learning experience.
          </p>
        </div>
        {/* Increased gap for better spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
            <TechIcon name="HTML5">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.42-.003L6.15 12.37h8.133l-.323 3.467-2.94.796-2.93-.81-.186-2.11h-2.61l.344 3.87L12 19.41l5.021-1.37.715-8.028-11.455.002z"/></svg>
            </TechIcon>
            <TechIcon name="Tailwind CSS">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.334,13.382,8.973,12,6.001,12z"/></svg>
            </TechIcon>
             <TechIcon name="JavaScript">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0h0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.89 12.4h-1.35v3.3h-1.6v-3.3h-.84V13h3.79v1.4zm-4.71-2.92c-.31-.19-.69-.31-1.14-.31-.97 0-1.63.58-1.63 1.48 0 .89.65 1.48 1.63 1.48.45 0 .83-.12 1.14-.31v.29h1.58V9.45h-1.58v2.03zM10 12.1c0-.49-.35-.85-.88-.85s-.87.36-.87.85.35.85.87.85.88-.36.88-.85z"/></svg>
            </TechIcon>
            <TechIcon name="Firebase">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M3.719 14.86L2 13.194l7.937-12.11h3.75L3.719 14.86zm10.033-11.777L5.344 19.5h3.625l2.125-6.027 4.156-1.531-1.5-6.265h-3.75zM12.031 22l5.906-8.203-3.031-1.078-2.875 9.281z"/></svg>
            </TechIcon>
            <TechIcon name="Google Sheets">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M15 2H9v5h6V2zM9 9v5h6V9H9zm6 7v5H9v-5h6zM4 2v5h3V2H4zm0 7v5h3V9H4zm0 7v5h3v-5H4zM20 2v5h-3V2h3zm-3 7v5h3V9h-3zm0 7v5h3v-5h-3z"/></svg>
            </TechIcon>
        </div>
      </div>
    </section>
  );
};

export default TechStack;