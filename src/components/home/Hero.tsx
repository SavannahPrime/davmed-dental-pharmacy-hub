
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-davmed-darkblue to-davmed-blue text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-4">
              <span className="text-white font-medium">Special Offer: KSH 500 Consultation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Quality Dental Care at Affordable Prices
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Davmed Dental & Pharmacy provides professional dental services and comprehensive pharmacy solutions in Eastleigh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-white text-davmed-darkblue hover:bg-gray-100">
                <Link to="/dental-services">
                  Explore Services <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dental care" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-davmed-darkblue/80 to-transparent p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                  <p className="text-davmed-darkblue font-semibold">Valid from 13th Jan 2025</p>
                  <h3 className="text-2xl font-bold text-davmed-blue">KSH 500 Consultation</h3>
                  <p className="text-gray-700 text-sm">Book your dental checkup today at our special promotional rate!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
