
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnimatedTransition from '@/components/AnimatedTransition';
import FeatureCard from '@/components/FeatureCard';
import { 
  DollarSign, 
  BarChart2, 
  BookOpen, 
  LightbulbIcon, 
  TrendingUp, 
  ChevronRight 
} from 'lucide-react';

const featuresData = [
  {
    title: "Track Your Expenses",
    description: "Keep a close eye on your spending habits with our intuitive expense tracker. Categorize, analyze, and optimize your finances.",
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    link: "/dashboard"
  },
  {
    title: "Financial Education",
    description: "Expand your knowledge with curated resources on investment, mutual funds, and essential financial concepts.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    link: "/education"
  },
  {
    title: "Paper Trading Simulator",
    description: "Practice investment strategies without risking real money. Build your skills before entering the market.",
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    link: "/trading"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <AnimatedTransition>
        <main>
          <Hero />
          
          {/* Features Section */}
          <section className="py-24 bg-background">
            <div className="content-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block mb-4">
                  <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    Key Features
                  </span>
                </div>
                <h2 className="section-heading">Everything You Need for Financial Growth</h2>
                <p className="text-lg text-muted-foreground">
                  FinEmpower provides the tools and knowledge to help you master your personal finances and build a secure financial future.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuresData.map((feature, index) => (
                  <Link key={feature.title} to={feature.link} className="group">
                    <FeatureCard
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      delay={index * 150}
                      className="h-full transition-all duration-300 group-hover:border-primary/30"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-24 bg-background">
            <div className="content-container">
              <div className="glass-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto animate-scale-in">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <LightbulbIcon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Start your journey today with FinEmpower's suite of tools designed to empower your financial decisions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer className="bg-background border-t border-border py-12">
          <div className="content-container">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center space-x-2 text-primary font-semibold text-xl mb-4">
                <span className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
                  <div className="absolute inset-[2px] bg-primary/20 rounded-full"></div>
                  <div className="absolute inset-[4px] bg-primary/30 rounded-full"></div>
                  <div className="absolute inset-[6px] bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">FE</span>
                  </div>
                </span>
                <span className="tracking-tight">FinEmpower</span>
              </div>
              <p className="text-muted-foreground">
                Your all-in-one platform for financial education and management.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
                <Link to="/education" className="text-muted-foreground hover:text-foreground transition-colors">
                  Education
                </Link>
                <Link to="/trading" className="text-muted-foreground hover:text-foreground transition-colors">
                  Trading
                </Link>
              </div>
              <div className="mt-8 text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} FinEmpower. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </AnimatedTransition>
    </div>
  );
};

export default Index;
