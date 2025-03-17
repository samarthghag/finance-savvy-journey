
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CreditCard, BookOpen, BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 gradient-bg"></div>
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="content-container pt-16 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary animate-fade-in">
              Your Personal Finance Journey
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary animate-slide-down" style={{ animationDelay: '100ms' }}>
            <span className="block">Master Your Finances.</span>
            <span className="block mt-2">Empower Your Future.</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-down" style={{ animationDelay: '200ms' }}>
            Track expenses, learn financial concepts, and practice investment strategies — all in one elegant platform designed for your financial success.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-down" style={{ animationDelay: '300ms' }}>
            <Link
              to="/dashboard"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              to="/education"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Explore Resources
            </Link>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {featureItems.map((item, index) => (
            <FeatureCard 
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 hoverable-card animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const featureItems = [
  {
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    title: "Track Expenses",
    description: "Monitor your daily expenses, categorize spending, and gain insights into your financial habits."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Financial Education",
    description: "Access curated learning materials about investing, mutual funds, and essential financial concepts."
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    title: "Practice Trading",
    description: "Develop your investment skills through paper trading without risking real money."
  }
];

export default Hero;
