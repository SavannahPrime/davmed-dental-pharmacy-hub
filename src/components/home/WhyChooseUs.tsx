
import React from 'react';
import { Check, DollarSign, Users, Package, MapPin, Clock, PlusSquare } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Affordable Pricing',
      description: 'We offer quality dental care at competitive prices to ensure everyone can access the care they need.',
      icon: DollarSign
    },
    {
      title: 'Experienced Professionals',
      description: 'Our team consists of qualified dental practitioners committed to providing the best care possible.',
      icon: Users
    },
    {
      title: 'Comprehensive Services',
      description: 'From routine checkups to complex procedures, we offer a wide range of dental services.',
      icon: Package
    },
    {
      title: 'Convenient Location',
      description: 'Located in Eastleigh 1, 3rd Avenue, we are easily accessible to residents in the area.',
      icon: MapPin
    },
    {
      title: 'Extended Hours',
      description: 'Open 7 days a week, including evenings and weekends, to accommodate your busy schedule.',
      icon: Clock
    },
    {
      title: 'Integrated Pharmacy',
      description: 'Get your prescriptions filled right after your dental appointment for a seamless experience.',
      icon: PlusSquare
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
            <div key={index} className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg p-6 border border-gray-100 hover:border-davmed-lightblue">
              <div className="flex items-start space-x-4">
                <div className="bg-davmed-blue rounded-full p-3 mt-1">
                  <reason.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-davmed-darkblue mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-davmed-light px-6 py-4 rounded-lg">
            <div className="font-medium text-davmed-darkblue mb-1">Trusted by patients across Eastleigh</div>
            <div className="text-3xl font-bold text-davmed-blue">500+ Happy Patients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
