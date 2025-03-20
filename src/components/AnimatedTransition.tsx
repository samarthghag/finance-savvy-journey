
import React, { useEffect, useRef, memo } from 'react';
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
    
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    });
    
    // No need for setTimeout which can cause delays
  }, [location.pathname]);
  
  return (
    <div 
      ref={elementRef}
      className="transition-all duration-300 ease-in-out"
    >
      {children}
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(AnimatedTransition);
