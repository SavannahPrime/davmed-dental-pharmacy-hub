
import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import Hero from '@/components/home/Hero';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <BaseLayout>
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <CallToAction />
    </BaseLayout>
  );
};

export default Index;
