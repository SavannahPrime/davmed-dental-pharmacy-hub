
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-heading font-bold text-davmed-darkblue">
                DAVMED
              </span>
              <span className="hidden md:inline text-sm text-gray-500 font-medium">
                Dental & Pharmacy
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-davmed-blue transition-colors font-medium">
              Home
            </Link>
            <Link to="/dental-services" className="text-gray-700 hover:text-davmed-blue transition-colors font-medium">
              Dental Services
            </Link>
            <Link to="/pharmacy" className="text-gray-700 hover:text-davmed-blue transition-colors font-medium">
              Pharmacy
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-davmed-blue transition-colors font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-davmed-blue transition-colors font-medium">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-davmed-blue" />
              <span className="text-sm font-medium">0794 811 811</span>
            </div>
            <Button asChild className="bg-davmed-blue hover:bg-davmed-darkblue">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-davmed-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dental-services" 
              className="block py-2 text-gray-700 hover:text-davmed-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Dental Services
            </Link>
            <Link 
              to="/pharmacy" 
              className="block py-2 text-gray-700 hover:text-davmed-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Pharmacy
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:text-davmed-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-700 hover:text-davmed-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-davmed-blue hover:bg-davmed-darkblue">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
            </Button>
            <div className="flex items-center py-2 space-x-2">
              <Phone size={18} className="text-davmed-blue" />
              <span className="font-medium">0794 811 811</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
