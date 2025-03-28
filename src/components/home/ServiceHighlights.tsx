
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const ServiceHighlights = () => {
  const services = [
    {
      title: 'Dental Consultations',
      description: 'Professional assessment of your dental health with personalized treatment plans.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/dental-services'
    },
    {
      title: 'Braces & Alignments',
      description: 'Affordable options for straightening teeth, including metallic and ceramic braces.',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/dental-services'
    },
    {
      title: 'Pharmacy Services',
      description: 'Access to a wide range of medications, supplements, and healthcare products.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/pharmacy'
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
            <div key={index} className="service-card flex flex-col h-full">
              <div className="h-48 overflow-hidden rounded-md mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-davmed-darkblue mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-davmed-blue hover:text-davmed-darkblue font-medium mt-auto"
              >
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
