
import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Clock, Check } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Dentist',
      bio: 'Dr. Johnson has over 10 years of experience in general and cosmetic dentistry, specializing in braces and alignments.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Michael Kimani',
      role: 'Dental Surgeon',
      bio: 'Specializing in extractions and restorative procedures, Dr. Kimani brings 8 years of expertise to our practice.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Jane Wangari',
      role: 'Lead Pharmacist',
      bio: 'With a background in pharmaceutical sciences, Jane oversees all pharmacy operations and patient consultations.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'David Muthoni',
      role: 'Dental Hygienist',
      bio: 'David specializes in preventative dental care, including cleanings, scaling, and oral hygiene education.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' }
  ];

  const values = [
    {
      title: 'Affordability',
      description: 'We believe quality dental care should be accessible to everyone, which is why we offer competitive pricing.'
    },
    {
      title: 'Quality Care',
      description: 'We never compromise on the quality of care, using modern techniques and equipment for all procedures.'
    },
    {
      title: 'Patient-Centered',
      description: 'Your comfort and satisfaction are our priorities. We take time to listen and address your concerns.'
    },
    {
      title: 'Integrity',
      description: 'We are transparent about treatments and costs, ensuring you make informed decisions about your care.'
    }
  ];

  return (
    <BaseLayout>
      {/* Hero section */}
      <div className="bg-davmed-darkblue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Davmed Dental & Pharmacy
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Your trusted partner for affordable, high-quality dental and pharmacy services in Eastleigh.
            </p>
          </div>
        </div>
      </div>

      {/* About content */}
      <div className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Story"
            subtitle="Davmed Dental & Pharmacy was established with a vision to provide accessible healthcare services to the Eastleigh community."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Davmed Dental Clinic" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                At Davmed, we believe that everyone deserves access to quality dental care and pharmaceutical services without the burden of excessive costs. Founded by a team of healthcare professionals, our practice is committed to combining affordability with excellence.
              </p>
              <p className="text-gray-700">
                Our mission is to improve the health and well-being of our community by providing comprehensive dental care and pharmacy services in a comfortable, welcoming environment. We strive to educate our patients about preventative care and empower them to make informed decisions about their health.
              </p>
              <p className="text-gray-700">
                What sets us apart is our integrated approach to healthcare. By combining dental services with a fully-stocked pharmacy, we offer convenience and continuity of care that few other practices can match.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-davmed-darkblue mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Working Hours */}
      <div className="section-padding bg-davmed-light">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="rounded-full bg-davmed-blue/10 p-6">
                  <Clock size={80} className="text-davmed-blue" />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-davmed-darkblue mb-6">Working Hours</h2>
                
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-100">
                      <span className="font-medium text-gray-800">{schedule.day}</span>
                      <span className="text-davmed-blue font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-start space-x-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      We offer extended hours to accommodate your busy schedule. For emergencies outside of regular hours, please call our emergency line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Our experienced professionals are dedicated to providing the highest standard of care."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-davmed-darkblue mb-1">{member.name}</h3>
                  <p className="text-davmed-blue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default AboutPage;
