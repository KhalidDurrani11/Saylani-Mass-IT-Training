
import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Saylani Roti Bank has been a blessing for my family. We no longer worry about where our next meal will come from. Thank you for giving us hope.",
    name: "Fatima Ahmed",
    role: "Beneficiary",
    image: "https://picsum.photos/100/100?random=4"
  },
  {
    quote: "Volunteering here is a deeply fulfilling experience. Seeing the smiles on people's faces when they receive a warm meal is the best reward.",
    name: "Ali Raza",
    role: "Volunteer",
    image: "https://picsum.photos/100/100?random=5"
  },
  {
    quote: "As a partner, we are proud to support Saylani Roti Bank. Their transparent and efficient system ensures that our contributions make a real impact on the ground.",
    name: "Imran Khan",
    role: "Corporate Donor",
    image: "https://picsum.photos/100/100?random=6"
  }
];

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, role, image }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
    <p className="text-gray-600 italic mb-6 flex-grow">"{quote}"</p>
    <div className="flex items-center">
      <img className="w-16 h-16 rounded-full mr-4" src={image} alt={name} />
      <div>
        <p className="font-bold text-saylani-blue">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-saylani-blue">Stories of Hope</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Read the real stories of the lives you have touched.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
