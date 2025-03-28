
import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  title: string;
  price: string;
  description?: string;
  highlighted?: boolean;
}

interface ServiceCategoryProps {
  title: string;
  services: Service[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, services }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-davmed-darkblue mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            price={service.price}
            description={service.description}
            highlighted={service.highlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
