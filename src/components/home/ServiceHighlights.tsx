
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const ServiceHighlights = () => {
  const services = [
    {
      title: 'Dental Consultations',
      description: 'Professional assessment of your dental health with personalized treatment plans.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/dental-services',
      features: ['Expert diagnosis', 'Treatment planning', 'Affordable rates']
    },
    {
      title: 'Braces & Alignments',
      description: 'Affordable options for straightening teeth, including metallic and ceramic braces.',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/dental-services',
      features: ['Metallic braces', 'Ceramic options', 'Regular adjustments']
    },
    {
      title: 'Pharmacy Services',
      description: 'Access to a wide range of medications, supplements, and healthcare products.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/pharmacy',
      features: ['Prescription fulfillment', 'OTC medications', 'Health products']
    }
  ];

  return (
    <section className="section-padding bg-davmed-light">
      <div className="container mx-auto">
        <SectionHeading
          title="Our Services"
          subtitle="We provide comprehensive dental and pharmaceutical care for all your healthcare needs"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group flex flex-col h-full transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden rounded-t-lg relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-davmed-darkblue/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-davmed-darkblue mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="mb-6 mt-2 space-y-2 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Shield size={14} className="text-davmed-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-davmed-blue hover:text-davmed-darkblue font-medium mt-auto group-hover:underline"
                >
                  Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 text-davmed-darkblue">
            <Sparkles size={20} className="text-davmed-accent" />
            <span className="font-medium">Modern Equipment</span>
          </div>
          <div className="flex items-center gap-3 text-davmed-darkblue">
            <Shield size={20} className="text-davmed-accent" />
            <span className="font-medium">Experienced Professionals</span>
          </div>
          <div className="flex items-center gap-3 text-davmed-darkblue">
            <Clock size={20} className="text-davmed-accent" />
            <span className="font-medium">Extended Working Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
