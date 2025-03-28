
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-davmed-darkblue text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Davmed</h3>
            <p className="text-gray-300 mb-4">
              Providing affordable, high-quality dental and pharmacy services. Your trusted healthcare partner in Eastleigh.
            </p>
            <div className="flex items-center space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dental-services" className="text-gray-300 hover:text-white transition-colors">
                  Dental Services
                </Link>
              </li>
              <li>
                <Link to="/pharmacy" className="text-gray-300 hover:text-white transition-colors">
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Dental Consultations</li>
              <li className="text-gray-300">Braces & Alignments</li>
              <li className="text-gray-300">Teeth Whitening</li>
              <li className="text-gray-300">Root Canal Treatment</li>
              <li className="text-gray-300">Pharmacy Services</li>
              <li className="text-gray-300">Prescription Fulfillment</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300">Eastleigh 1, 3rd Avenue</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span className="text-gray-300">0794 811 811</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Mon-Sat: 8:00 AM - 9:00 PM</p>
                  <p>Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <span className="text-gray-300">info@davmeddental.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Davmed Dental & Pharmacy. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              <p>Paybill: 522533 | Account No: 5781445</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
