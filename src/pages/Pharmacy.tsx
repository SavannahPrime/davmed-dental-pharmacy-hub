
import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PharmacyPage = () => {
  const pharmacyServices = [
    {
      title: 'Prescription Medications',
      description: 'We fill prescriptions from all healthcare providers with quick service and competitive pricing.',
      icon: '/prescription.png'
    },
    {
      title: 'Over-the-Counter Medications',
      description: 'Wide range of OTC medications for pain relief, allergies, colds, and more.',
      icon: '/otc.png'
    },
    {
      title: 'Vitamins & Supplements',
      description: 'Comprehensive selection of vitamins, minerals, and dietary supplements for all ages.',
      icon: '/vitamins.png'
    },
    {
      title: 'Personal Care Products',
      description: 'Quality personal care and hygiene products for the whole family.',
      icon: '/personal-care.png'
    },
    {
      title: 'Healthcare Devices',
      description: 'Blood pressure monitors, thermometers, and other health monitoring devices.',
      icon: '/devices.png'
    },
    {
      title: 'Professional Consultation',
      description: 'Our pharmacists are available to provide medication guidance and health advice.',
      icon: '/consultation.png'
    }
  ];

  return (
    <BaseLayout>
      {/* Hero section for pharmacy page */}
      <div className="bg-davmed-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pharmacy Services
            </h1>
            <p className="text-xl mb-8 text-white">
              Your trusted neighborhood pharmacy providing quality medications and healthcare products at affordable prices.
            </p>
            <Button asChild className="bg-white text-davmed-accent hover:bg-gray-100">
              <Link to="/contact">Visit Our Pharmacy</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Pharmacy content */}
      <div className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Pharmacy Services"
            subtitle="At Davmed Pharmacy, we are committed to providing accessible and affordable pharmaceutical services to our community."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {pharmacyServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="rounded-full bg-davmed-accent/10 p-4 inline-block mb-4">
                  <CheckCircle size={24} className="text-davmed-accent" />
                </div>
                <h3 className="text-xl font-bold text-davmed-darkblue mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          {/* Payment information */}
          <div className="mt-16 bg-gray-50 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-davmed-darkblue mb-6">Payment Information</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-davmed-darkblue mb-4">M-Pesa Payment</h3>
                <div className="space-y-3">
                  <p className="text-gray-600"><span className="font-medium">Paybill:</span> 522533</p>
                  <p className="text-gray-600"><span className="font-medium">Account No:</span> 5781445</p>
                  <p className="text-gray-600 mt-4 text-sm">
                    Simply send your payment via M-Pesa using the Paybill number and Account number above.
                  </p>
                </div>
              </div>
              
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-davmed-darkblue mb-4">Other Payment Options</h3>
                <p className="text-gray-600 mb-4">
                  We also accept cash payments at our pharmacy location. For large orders or special arrangements, please contact us directly.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-davmed-blue hover:text-davmed-darkblue font-medium"
                >
                  Contact Us <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Pharmacy guidance */}
          <div className="mt-16">
            <SectionHeading
              title="Medication Guidance"
              subtitle="Proper medication usage is crucial for effective treatment. Our pharmacists provide guidance on:"
            />
            
            <div className="bg-white rounded-lg shadow-md p-8 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-davmed-darkblue mb-4">Medication Usage</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={18} className="text-davmed-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Proper dosage and administration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={18} className="text-davmed-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Potential side effects and how to manage them</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={18} className="text-davmed-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Drug interactions with other medications</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={18} className="text-davmed-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-600">When to take medications (with meals, before bedtime, etc.)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-davmed-darkblue mb-4">Medication Storage</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={18} className="text-davmed-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Proper storage conditions (temperature, humidity)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={18} className="text-davmed-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Child-proof storage recommendations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={18} className="text-davmed-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Expiration dates and safe disposal of medications</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={18} className="text-davmed-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Travel considerations for medication storage</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">
                  For personalized medication guidance, please visit our pharmacy or contact our pharmacists directly.
                </p>
                <Button asChild className="bg-davmed-accent hover:bg-davmed-darkblue">
                  <Link to="/contact">Get Professional Advice</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default PharmacyPage;
