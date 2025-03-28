
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Appointment Request Sent",
      description: "We will contact you soon to confirm your appointment.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-davmed-darkblue mb-6">Book an Appointment</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-davmed-blue"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-davmed-blue"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-davmed-blue"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-gray-700 mb-2">
            Service Interested In *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-davmed-blue"
          >
            <option value="">Select a Service</option>
            <option value="consultation">Dental Consultation</option>
            <option value="braces">Braces</option>
            <option value="whitening">Teeth Whitening</option>
            <option value="filling">Dental Filling</option>
            <option value="scaling">Root Canal/Scaling</option>
            <option value="extraction">Tooth Extraction</option>
            <option value="pharmacy">Pharmacy Services</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="date" className="block text-gray-700 mb-2">
              Preferred Date *
            </label>
            <div className="relative">
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-davmed-blue"
              />
              <Calendar size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          
          <div>
            <label htmlFor="time" className="block text-gray-700 mb-2">
              Preferred Time *
            </label>
            <div className="relative">
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-davmed-blue"
              />
              <Clock size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Additional Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-davmed-blue"
          />
        </div>
        
        <Button type="submit" className="w-full bg-davmed-blue hover:bg-davmed-darkblue">
          Submit Appointment Request
        </Button>
        
        <p className="text-sm text-gray-500">
          * Required fields. We'll contact you shortly to confirm your appointment.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
