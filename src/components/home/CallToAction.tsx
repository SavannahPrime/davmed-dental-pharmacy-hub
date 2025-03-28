
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="hero-gradient text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6">
            <span className="text-white font-medium">Limited Time Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Dental Appointment?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Take advantage of our KSH 500 consultation offer. Our friendly team is ready to assist you with all your dental needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-davmed-darkblue hover:bg-gray-100 group">
              <Link to="/contact" className="flex items-center">
                <Calendar size={18} className="mr-2" /> 
                Book Appointment
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:0794811811" className="flex items-center">
                <Phone size={18} className="mr-2" /> Call 0794 811 811
              </a>
            </Button>
          </div>
          
          <div className="mt-10 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center">
              <span className="opacity-75 mr-2">M-Pesa Paybill:</span>
              <span className="font-bold">522533</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center">
              <span className="opacity-75 mr-2">Account No:</span>
              <span className="font-bold">5781445</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
