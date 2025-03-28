
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  price: string;
  description?: string;
  highlighted?: boolean;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  highlighted = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'service-card',
        highlighted && 'border-davmed-blue bg-gradient-to-br from-white to-davmed-lightblue/10',
        className
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-davmed-darkblue">{title}</h3>
        <div className="price-tag">{price}</div>
      </div>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default ServiceCard;
