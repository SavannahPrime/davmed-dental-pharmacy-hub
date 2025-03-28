
import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import ContactForm from '@/components/contact/ContactForm';
import MapLocation from '@/components/contact/MapLocation';
import SectionHeading from '@/components/ui/SectionHeading';

const ContactPage = () => {
  return (
    <BaseLayout>
      {/* Hero section */}
      <div className="bg-davmed-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100">
              We're here to help with your dental and pharmacy needs. Reach out to us for appointments, inquiries, or directions.
            </p>
          </div>
        </div>
      </div>

      {/* Contact content */}
      <div className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have questions or ready to book an appointment? Contact us through any of the methods below or use our appointment request form."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <ContactForm />
            <MapLocation />
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to commonly asked questions about our services and procedures."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-davmed-darkblue mb-3">Do I need to make an appointment?</h3>
              <p className="text-gray-600">
                While we do accept walk-ins, we recommend scheduling an appointment to minimize waiting time. You can book online, call us, or visit our location.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-davmed-darkblue mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept M-Pesa payments (Paybill: 522533, Account: 5781445) and cash. For other payment arrangements, please contact us directly.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-davmed-darkblue mb-3">How long does a dental appointment typically take?</h3>
              <p className="text-gray-600">
                Consultation visits typically take 30-45 minutes. Treatment duration varies based on the procedure, with some treatments requiring multiple visits.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-davmed-darkblue mb-3">Can I get my prescription filled at your pharmacy?</h3>
              <p className="text-gray-600">
                Yes, our integrated pharmacy can fill prescriptions from our dentists and other healthcare providers. We stock a wide range of medications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ContactPage;
