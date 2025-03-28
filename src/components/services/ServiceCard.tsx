
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  price: string;
  description?: string;
  highlighted?: boolean;
  className?: string;
  benefits?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  highlighted = false,
  className,
  benefits,
}) => {
  return (
    <div
      className={cn(
        'service-card p-6 relative overflow-hidden',
        highlighted 
          ? 'border-davmed-blue bg-gradient-to-br from-white to-davmed-lightblue/10' 
          : 'hover:border-davmed-blue/50',
        className
      )}
    >
      {highlighted && (
        <div className="absolute top-0 right-0">
          <div className="bg-davmed-accent text-white text-xs font-semibold py-1 px-3 transform rotate-45 translate-x-2 -translate-y-1 shadow-sm">
            Popular
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-davmed-darkblue mb-1">{title}</h3>
        <div className="h-0.5 w-10 bg-davmed-accent mb-3"></div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="price-tag bg-davmed-lightblue/30 text-davmed-darkblue px-4 py-2 rounded-md font-medium">
          {price}
        </div>
      </div>
      
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      
      {benefits && benefits.length > 0 && (
        <ul className="space-y-2 mt-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Check size={16} className="text-davmed-accent mr-2 mt-1 flex-shrink-0" />
              <span className="text-sm text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
