
import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCategory from '@/components/services/ServiceCategory';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TeethColoringFeature from '@/components/services/TeethColoringFeature';
import { Calendar, Clock, Palette, Shield } from 'lucide-react';

const DentalServices = () => {
  // Define dental service categories and their services
  const bracesServices = [
    {
      title: 'Fixed Braces (Metallic/Silver)',
      price: 'KSH 12,500 - 25,000',
      description: 'One jaw: KSH 12,500 | Two jaws: KSH 25,000',
      highlighted: true,
      benefits: [
        'Effective for complex alignment issues',
        'Includes regular adjustments',
        'Complimentary initial consultation'
      ]
    },
    {
      title: 'Removable Braces',
      price: 'KSH 3,000',
      description: 'Per jaw',
      benefits: [
        'Easily removed for cleaning',
        'Less noticeable than fixed options',
        'Suitable for minor corrections'
      ]
    },
    {
      title: 'Ceramic/Clear Braces',
      price: 'from KSH 50,000',
      description: 'Aesthetic option for less visible treatment',
      benefits: [
        'Virtually invisible treatment',
        'Premium materials for comfort',
        'Ideal for professional settings'
      ]
    }
  ];

  const cosmeticServices = [
    {
      title: 'Teeth Whitening',
      price: 'KSH 5,000',
      description: 'Professional whitening for a brighter smile',
      benefits: [
        'Removes years of staining',
        'Safe for enamel',
        'Results visible immediately'
      ]
    },
    {
      title: 'Veneers',
      price: 'from KSH 5,000',
      description: 'Improve the appearance of front teeth',
      benefits: [
        'Custom-made for your smile',
        'Resistant to staining',
        'Natural appearance'
      ]
    },
    {
      title: 'Teeth Washing / Bleaching',
      price: 'from KSH 200',
      description: 'For children starting from KSH 200',
      benefits: [
        'Gentle enough for children',
        'Removes surface stains',
        'Improves overall oral hygiene'
      ]
    }
  ];

  const restorativeServices = [
    {
      title: 'Fillings',
      price: 'KSH 2,000',
      description: 'Restore damaged or decayed teeth',
      benefits: [
        'Tooth-colored options available',
        'Prevents further decay',
        'Strengthens damaged teeth'
      ]
    },
    {
      title: 'Root Canal Cleaning / Scaling',
      price: 'KSH 2,000',
      description: 'Treatment for infected tooth pulp',
      benefits: [
        'Relieves pain and sensitivity',
        'Preserves natural tooth',
        'Prevents extraction'
      ]
    },
    {
      title: 'Polishing',
      price: 'KSH 1,000',
      description: 'Professional teeth polishing',
      benefits: [
        'Removes surface stains',
        'Smooths tooth surfaces',
        'Reduces plaque buildup'
      ]
    },
    {
      title: 'Permanent Replacement',
      price: 'KSH 2,000',
      description: 'Replace missing teeth with permanent solutions',
      benefits: [
        'Restores natural appearance',
        'Improves chewing function',
        'Prevents shifting of remaining teeth'
      ]
    },
    {
      title: 'Permanent Crown',
      price: 'KSH 5,000',
      description: 'Cap that covers damaged tooth',
      benefits: [
        'Protects weakened teeth',
        'Restores tooth shape and function',
        'Long-lasting solution'
      ]
    },
    {
      title: 'Partial Denture (with Bridge)',
      price: 'Varies',
      description: 'Replace multiple missing teeth',
      benefits: [
        'Custom-fitted for comfort',
        'Improves speech and eating',
        'Natural-looking replacement'
      ]
    }
  ];

  const basicServices = [
    {
      title: 'Consultation',
      price: 'KSH 500',
      description: 'Special offer from 13th Jan 2025',
      highlighted: true,
      benefits: [
        'Comprehensive oral examination',
        'Treatment planning',
        'Digital imaging if necessary'
      ]
    },
    {
      title: 'Extractions',
      price: 'KSH 1,500',
      description: 'Per tooth',
      benefits: [
        'Modern pain management',
        'Quick recovery protocols',
        'Emergency slots available'
      ]
    },
    {
      title: 'Removable Dentures',
      price: 'KSH 3,000 - 8,000',
      description: 'Per tooth',
      benefits: [
        'Custom-fitted for comfort',
        'Natural appearance',
        'Follow-up adjustments included'
      ]
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

          {/* Professional benefits banner */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start">
              <div className="bg-davmed-lightblue/20 p-3 rounded-full mr-4">
                <Shield className="text-davmed-darkblue h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-davmed-darkblue mb-1">Certified Specialists</h3>
                <p className="text-sm text-gray-600">All treatments performed by qualified dental professionals</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-davmed-lightblue/20 p-3 rounded-full mr-4">
                <Palette className="text-davmed-darkblue h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-davmed-darkblue mb-1">Advanced Techniques</h3>
                <p className="text-sm text-gray-600">Modern approaches for better results and comfort</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-davmed-lightblue/20 p-3 rounded-full mr-4">
                <Calendar className="text-davmed-darkblue h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-davmed-darkblue mb-1">Flexible Scheduling</h3>
                <p className="text-sm text-gray-600">Appointments that fit your busy lifestyle</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-davmed-lightblue/20 p-3 rounded-full mr-4">
                <Clock className="text-davmed-darkblue h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-davmed-darkblue mb-1">Timely Service</h3>
                <p className="text-sm text-gray-600">Respect for your time with minimal waiting</p>
              </div>
            </div>
          </div>

          {/* Interactive Tooth Coloring Feature */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-davmed-darkblue mb-6 flex items-center">
              <Palette className="mr-3 text-davmed-accent" />
              Explore Dental Color Options
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Try our interactive tool to visualize different dental color options for your treatments. This can help you decide on the perfect shade for your smile makeover.
            </p>
            <TeethColoringFeature />
          </div>

          {/* Service categories */}
          <ServiceCategory title="Braces & Alignments" services={bracesServices} />
          <ServiceCategory title="Cosmetic Dentistry" services={cosmeticServices} />
          <ServiceCategory title="Restorative Treatments" services={restorativeServices} />
          <ServiceCategory title="Basic Dental Services" services={basicServices} />
          
          {/* Call to action */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center bg-gradient-to-r from-davmed-blue/5 to-davmed-accent/5">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-davmed-darkblue mb-4">
                Ready to improve your smile?
              </h2>
              <div className="h-1 w-20 bg-davmed-accent mx-auto mb-6"></div>
              <p className="text-gray-600 mb-6">
                Take advantage of our KSH 500 consultation offer and discuss your dental needs with our professionals.
              </p>
              <Button asChild size="lg" className="bg-davmed-blue hover:bg-davmed-darkblue">
                <Link to="/contact">Schedule Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default DentalServices;
