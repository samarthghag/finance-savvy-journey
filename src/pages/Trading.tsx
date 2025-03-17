
import React from 'react';
import Navbar from '@/components/Navbar';
import PaperTrading from '@/components/PaperTrading';
import AnimatedTransition from '@/components/AnimatedTransition';

const Trading = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <AnimatedTransition>
        <main className="pt-24 pb-16">
          <div className="content-container">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="section-heading">Paper Trading Simulator</h1>
                <p className="text-lg text-muted-foreground">
                  Practice investment strategies without risking real money. Build your portfolio and track your performance.
                </p>
              </div>
              
              <PaperTrading />
            </div>
          </div>
        </main>
      </AnimatedTransition>
    </div>
  );
};

export default Trading;
