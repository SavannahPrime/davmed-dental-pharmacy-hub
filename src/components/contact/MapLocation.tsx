
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const MapLocation = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8143418509716!2d36.85132901475846!3d-1.2730158990770335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sEastleigh%201%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1657552681233!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Davmed Dental & Pharmacy Location"
          className="w-full h-full"
        ></iframe>
      </div>
      
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-davmed-darkblue mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin size={24} className="text-davmed-blue flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Address</h4>
              <p className="text-gray-600">Eastleigh 1, 3rd Avenue</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Phone size={24} className="text-davmed-blue flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <p className="text-gray-600">0794 811 811</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Mail size={24} className="text-davmed-blue flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-gray-600">info@davmeddental.com</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Clock size={24} className="text-davmed-blue flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Working Hours</h4>
              <p className="text-gray-600">Monday - Saturday: 8:00 AM - 9:00 PM</p>
              <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">Payment Information</h4>
          <p className="text-gray-600 mb-1">Paybill: 522533</p>
          <p className="text-gray-600">Account No: 5781445</p>
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
