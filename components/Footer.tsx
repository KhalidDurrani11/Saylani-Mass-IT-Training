import React from 'react';

const Footer: React.FC = () => {
  return (
    // Switched to a darker, more modern background color
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Ready to Start Your Tech Journey?</h2>
          <p className="mt-4 text-lg text-gray-300">Apply now and take the first step towards a successful career in IT.</p>
          <a href="#contact" className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white text-lg rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Apply Now
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-t border-gray-700 pt-12">
          <div>
            <h3 className="font-semibold text-lg mb-2">SMIT Program</h3>
            <p className="text-gray-400">Saylani Welfare International Trust</p>
            <p className="text-gray-400">A-25, Bahadurabad Chowrangi, Karachi, Pakistan</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
            <p className="text-gray-400">Helpline: (021) 111-729-526</p>
            <p className="text-gray-400">Email: info@saylaniwelfare.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.019c0 3.255 1.54 6.173 3.938 8.086l-1.026 3.59c-.21 1.05.806 1.86 1.83 1.34l3.582-1.82c.453.11.92.204 1.396.282A9.947 9.947 0 0012 22c5.523 0 10-4.477 10-9.981S17.523 2 12 2zM8.883 14.999a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm4.242 0a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm4.242 0a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" /></svg></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Saylani Mass IT Training Program. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;