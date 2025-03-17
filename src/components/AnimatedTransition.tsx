
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedTransitionProps {
  children: React.ReactNode;
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ children }) => {
  const location = useLocation();
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    // Add a small delay to ensure the CSS transition is applied
    const timeout = setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 50);
    
    return () => clearTimeout(timeout);
  }, [location.pathname]);
  
  return (
    <div 
      ref={elementRef}
      className="transition-all duration-500 ease-in-out"
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
