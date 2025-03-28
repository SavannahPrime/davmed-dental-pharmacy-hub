
import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCategory from '@/components/services/ServiceCategory';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DentalServices = () => {
  // Define dental service categories and their services
  const bracesServices = [
    {
      title: 'Fixed Braces (Metallic/Silver)',
      price: 'KSH 12,500 - 25,000',
      description: 'One jaw: KSH 12,500 | Two jaws: KSH 25,000',
      highlighted: true
    },
    {
      title: 'Removable Braces',
      price: 'KSH 3,000',
      description: 'Per jaw',
    },
    {
      title: 'Ceramic/Clear Braces',
      price: 'from KSH 50,000',
      description: 'Aesthetic option for less visible treatment',
    }
  ];

  const cosmeticServices = [
    {
      title: 'Teeth Whitening',
      price: 'KSH 5,000',
      description: 'Professional whitening for a brighter smile',
    },
    {
      title: 'Veneers',
      price: 'from KSH 5,000',
      description: 'Improve the appearance of front teeth',
    },
    {
      title: 'Teeth Washing / Bleaching',
      price: 'from KSH 200',
      description: 'For children starting from KSH 200',
    }
  ];

  const restorativeServices = [
    {
      title: 'Fillings',
      price: 'KSH 2,000',
      description: 'Restore damaged or decayed teeth',
    },
    {
      title: 'Root Canal Cleaning / Scaling',
      price: 'KSH 2,000',
      description: 'Treatment for infected tooth pulp',
    },
    {
      title: 'Polishing',
      price: 'KSH 1,000',
      description: 'Professional teeth polishing',
    },
    {
      title: 'Permanent Replacement',
      price: 'KSH 2,000',
      description: 'Replace missing teeth with permanent solutions',
    },
    {
      title: 'Permanent Crown',
      price: 'KSH 5,000',
      description: 'Cap that covers damaged tooth',
    },
    {
      title: 'Partial Denture (with Bridge)',
      price: 'Varies',
      description: 'Replace multiple missing teeth',
    }
  ];

  const basicServices = [
    {
      title: 'Consultation',
      price: 'KSH 500',
      description: 'Special offer from 13th Jan 2025',
      highlighted: true
    },
    {
      title: 'Extractions',
      price: 'KSH 1,500',
      description: 'Per tooth',
    },
    {
      title: 'Removable Dentures',
      price: 'KSH 3,000 - 8,000',
      description: 'Per tooth',
    }
  ];

  return (
    <BaseLayout>
      {/* Hero section for services page */}
      <div className="bg-davmed-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dental Services & Pricing
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Quality dental care at affordable prices. We offer a comprehensive range of dental services to meet your needs.
            </p>
            <Button asChild className="bg-white text-davmed-darkblue hover:bg-gray-100">
              <Link to="/contact">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Services content */}
      <div className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Dental Services"
            subtitle="At Davmed, we provide a wide range of dental services at competitive prices. All our services are performed by experienced professionals using modern equipment."
          />

          {/* Service categories */}
          <ServiceCategory title="Braces & Alignments" services={bracesServices} />
          <ServiceCategory title="Cosmetic Dentistry" services={cosmeticServices} />
          <ServiceCategory title="Restorative Treatments" services={restorativeServices} />
          <ServiceCategory title="Basic Dental Services" services={basicServices} />
          
          {/* Call to action */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-davmed-darkblue mb-4">
              Ready to improve your smile?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take advantage of our KSH 500 consultation offer and discuss your dental needs with our professionals.
            </p>
            <Button asChild size="lg" className="bg-davmed-blue hover:bg-davmed-darkblue">
              <Link to="/contact">Schedule Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default DentalServices;
