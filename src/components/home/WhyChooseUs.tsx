
import React from 'react';
import { Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Affordable Pricing',
      description: 'We offer quality dental care at competitive prices to ensure everyone can access the care they need.'
    },
    {
      title: 'Experienced Professionals',
      description: 'Our team consists of qualified dental practitioners committed to providing the best care possible.'
    },
    {
      title: 'Comprehensive Services',
      description: 'From routine checkups to complex procedures, we offer a wide range of dental services.'
    },
    {
      title: 'Convenient Location',
      description: 'Located in Eastleigh 1, 3rd Avenue, we are easily accessible to residents in the area.'
    },
    {
      title: 'Extended Hours',
      description: 'Open 7 days a week, including evenings and weekends, to accommodate your busy schedule.'
    },
    {
      title: 'Integrated Pharmacy',
      description: 'Get your prescriptions filled right after your dental appointment for a seamless experience.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <SectionHeading
          title="Why Choose Davmed"
          subtitle="Discover the advantages of choosing Davmed for your dental and pharmacy needs"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-davmed-blue rounded-full p-2 mt-1">
                  <Check size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-davmed-darkblue mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
