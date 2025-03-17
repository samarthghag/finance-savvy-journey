
import React from 'react';
import Navbar from '@/components/Navbar';
import FinancialEducation from '@/components/FinancialEducation';
import AnimatedTransition from '@/components/AnimatedTransition';

const Education = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <AnimatedTransition>
        <main className="pt-24 pb-16">
          <div className="content-container">
            <FinancialEducation />
          </div>
        </main>
      </AnimatedTransition>
    </div>
  );
};

export default Education;
