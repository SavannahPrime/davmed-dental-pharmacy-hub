
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-davmed-darkblue mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
      <div className="flex items-center space-x-1 mt-4 mb-1">
        <div className={cn("h-1 bg-davmed-accent rounded-full", centered ? "w-12 mx-auto" : "w-24")}></div>
        {!centered && <div className="w-12 h-1 bg-davmed-lightblue rounded-full"></div>}
      </div>
    </div>
  );
};

export default SectionHeading;
