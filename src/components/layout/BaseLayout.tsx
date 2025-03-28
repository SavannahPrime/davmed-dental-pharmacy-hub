
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  useEffect(() => {
    // Simple function to handle fade-in animations on scroll
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('active');
        }
      });
    };
    
    // Initialize on load
    handleScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
