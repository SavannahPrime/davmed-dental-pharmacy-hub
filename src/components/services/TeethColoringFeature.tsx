
import React, { useState } from 'react';
import { Palette, Droplet } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TeethColoringFeature = () => {
  const [currentColor, setCurrentColor] = useState('#FFFFFF');
  const [activeSection, setActiveSection] = useState('upper');
  
  const colorOptions = [
    { name: 'Natural White', value: '#FFFFFF', description: 'Perfect match for natural teeth' },
    { name: 'Porcelain White', value: '#F5F6F0', description: 'Slightly off-white for a natural look' },
    { name: 'Bright White', value: '#E8F4FA', description: 'Bright, cosmetic whitening shade' },
    { name: 'Ivory White', value: '#FFFFF0', description: 'Warm, natural-looking shade' },
    { name: 'Ceramic White', value: '#FAFAFA', description: 'Modern ceramic-look finish' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Interactive Teeth Display */}
        <div className="flex-1 p-6 bg-gradient-to-br from-davmed-light to-white">
          <div className="relative mx-auto max-w-xs">
            {/* Teeth preview */}
            <div className="teeth-preview mb-4">
              <div className={`upper-teeth mb-2 ${activeSection === 'upper' ? 'active' : ''}`}
                onClick={() => setActiveSection('upper')}>
                <svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <path
                    d="M10,70 C50,30 190,30 230,70 C210,75 190,80 120,80 C50,80 30,75 10,70 Z"
                    fill={activeSection === 'upper' ? currentColor : '#F0F0F0'}
                    stroke="#E6E6E6"
                    strokeWidth="1"
                  />
                  {/* Tooth separators */}
                  <path d="M40,50 L40,75" stroke="#E6E6E6" strokeWidth="1" />
                  <path d="M80,40 L80,78" stroke="#E6E6E6" strokeWidth="1" />
                  <path d="M120,35 L120,80" stroke="#E6E6E6" strokeWidth="1" />
                  <path d="M160,40 L160,78" stroke="#E6E6E6" strokeWidth="1" />
                  <path d="M200,50 L200,75" stroke="#E6E6E6" strokeWidth="1" />
                </svg>
              </div>

              <div className={`lower-teeth ${activeSection === 'lower' ? 'active' : ''}`}
                onClick={() => setActiveSection('lower')}>
                <svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <path
                    d="M10,10 C30,5 50,0 120,0 C190,0 210,5 230,10 C190,50 50,50 10,10 Z"
                    fill={activeSection === 'lower' ? currentColor : '#F0F0F0'}
                    stroke="#E6E6E6"
                    strokeWidth="1"
                  />
                  {/* Tooth separators */}
                  <path d="M40,30 L40,5" stroke="#E6E6E6" strokeWidth="1" />
                  <path d="M80,40 L80,2" stroke="#E6E6E6" strokeWidth="1" />
                  <path d="M120,45 L120,0" stroke="#E6E6E6" strokeWidth="1" />
                  <path d="M160,40 L160,2" stroke="#E6E6E6" strokeWidth="1" />
                  <path d="M200,30 L200,5" stroke="#E6E6E6" strokeWidth="1" />
                </svg>
              </div>
            </div>

            {/* Selected option label */}
            <div className="text-center text-sm text-davmed-darkblue font-medium">
              <span>Selected: </span>
              <span className="px-2 py-1 rounded bg-davmed-lightblue/20">{
                colorOptions.find(c => c.value === currentColor)?.name || 'Custom'
              }</span>
            </div>
            
            {/* Click to select indicators */}
            <div className="text-center mt-4 text-xs text-gray-500">
              Click on upper or lower teeth to select
            </div>
          </div>
        </div>

        {/* Color Options */}
        <div className="flex-1 p-6 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100">
          <div className="mb-4">
            <h3 className="flex items-center text-lg font-medium text-davmed-darkblue mb-2">
              <Palette className="mr-2 h-5 w-5 text-davmed-accent" />
              Color Options
            </h3>
            <p className="text-sm text-gray-600">
              Select a color to visualize how different dental treatments would look on your teeth.
            </p>
          </div>

          <div className="space-y-3">
            {colorOptions.map((color, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all hover:border-davmed-accent ${currentColor === color.value ? 'border-davmed-accent bg-davmed-light' : ''}`}
                onClick={() => setCurrentColor(color.value)}
              >
                <CardContent className="p-3 flex items-center">
                  <div 
                    className="w-8 h-8 rounded-full mr-3 border border-gray-200 flex-shrink-0"
                    style={{ backgroundColor: color.value }}
                  >
                    {currentColor === color.value && (
                      <Droplet className="h-4 w-4 text-davmed-accent mx-auto mt-1.5" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{color.name}</h4>
                    <p className="text-xs text-gray-500">{color.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button 
            className="w-full mt-4 bg-davmed-accent hover:bg-davmed-accent/90"
            onClick={() => setActiveSection(activeSection === 'upper' ? 'lower' : 'upper')}
          >
            Switch to {activeSection === 'upper' ? 'Lower' : 'Upper'} Teeth
          </Button>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-sm text-gray-600">
        Discuss your color preferences with our dental professionals during your KSH 500 consultation.
      </div>
    </div>
  );
};

export default TeethColoringFeature;
