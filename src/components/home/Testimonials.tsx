
import React from 'react';
import { Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The dental team at Davmed provided excellent care for my braces treatment. The affordability and professional service exceeded my expectations.",
      author: "Sarah K.",
      role: "Braces Patient"
    },
    {
      quote: "I was nervous about my root canal, but Dr. Ahmed made the entire process painless. Their modern equipment and gentle approach made all the difference.",
      author: "James M.",
      role: "Root Canal Patient"
    },
    {
      quote: "As someone who requires regular medication, I appreciate the convenience of having the pharmacy right next to the dental clinic. The staff is always helpful and knowledgeable.",
      author: "Elizabeth W.",
      role: "Pharmacy Customer"
    }
  ];

  return (
    <section className="section-padding bg-davmed-light">
      <div className="container mx-auto">
        <SectionHeading
          title="Patient Testimonials"
          subtitle="Read what our satisfied patients have to say about their experience at Davmed Dental & Pharmacy"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md border border-gray-100 relative">
              <div className="absolute top-4 left-4 text-davmed-accent opacity-20">
                <Quote size={40} />
              </div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-davmed-darkblue">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
