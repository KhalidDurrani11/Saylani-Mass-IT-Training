
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-saylani-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-saylani-blue">Get in Touch</h2>
          <p className="text-gray-600 mt-2">We'd love to hear from you. Whether you have a question or want to partner with us, drop us a line.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-saylani-blue mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saylani-green focus:border-saylani-green" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saylani-green focus:border-saylani-green" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saylani-green focus:border-saylani-green"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-saylani-green text-white px-6 py-3 rounded-full font-semibold hover:bg-saylani-blue transition-colors duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-saylani-blue mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-2"><strong>Helpline:</strong> (123) 456-7890</p>
                <p className="text-gray-600 mb-4"><strong>Email:</strong> info@saylaniroti.org</p>
                <a href="#" className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300">
                    Contact on WhatsApp
                </a>
            </div>
            <div className="bg-gray-300 h-64 rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-gray-600 font-semibold">Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
