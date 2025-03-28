
import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  title: string;
  price: string;
  description?: string;
  highlighted?: boolean;
  benefits?: string[];
}

interface ServiceCategoryProps {
  title: string;
  services: Service[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, services }) => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-davmed-darkblue">{title}</h2>
        <div className="ml-4 h-px bg-gray-200 flex-grow"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            price={service.price}
            description={service.description}
            highlighted={service.highlighted}
            benefits={service.benefits}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
