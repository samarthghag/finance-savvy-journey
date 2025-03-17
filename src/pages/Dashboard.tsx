
import React from 'react';
import Navbar from '@/components/Navbar';
import ExpenseTracker from '@/components/ExpenseTracker';
import AnimatedTransition from '@/components/AnimatedTransition';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <AnimatedTransition>
        <main className="pt-24 pb-16">
          <div className="content-container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="section-heading">Expense Tracker</h1>
                <p className="text-lg text-muted-foreground">
                  Monitor and manage your expenses to build better financial habits.
                </p>
              </div>
              
              <ExpenseTracker />
            </div>
          </div>
        </main>
      </AnimatedTransition>
    </div>
  );
};

export default Dashboard;
