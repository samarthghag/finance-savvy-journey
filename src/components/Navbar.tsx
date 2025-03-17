
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  ChevronRight, 
  Menu, 
  X,
  PiggyBank,
  BookOpen,
  BarChart2,
  Home
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary font-semibold text-xl"
          >
            <span className="relative w-8 h-8">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-gentle"></div>
              <div className="absolute inset-[2px] bg-primary/20 rounded-full"></div>
              <div className="absolute inset-[4px] bg-primary/30 rounded-full"></div>
              <div className="absolute inset-[6px] bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">FE</span>
              </div>
            </span>
            <span className="tracking-tight">FinEmpower</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={cn(
                "nav-link",
                isActive('/') && "text-foreground after:w-full"
              )}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={cn(
                "nav-link",
                isActive('/dashboard') && "text-foreground after:w-full"
              )}
            >
              Expense Tracker
            </Link>
            <Link 
              to="/education" 
              className={cn(
                "nav-link",
                isActive('/education') && "text-foreground after:w-full"
              )}
            >
              Learning
            </Link>
            <Link 
              to="/trading" 
              className={cn(
                "nav-link",
                isActive('/trading') && "text-foreground after:w-full"
              )}
            >
              Paper Trading
            </Link>
          </nav>
          
          {/* Call to Action */}
          <div className="hidden md:block">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center rounded-md p-2 text-foreground hover:bg-accent"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card m-4 rounded-xl animate-fade-in overflow-hidden">
          <nav className="flex flex-col divide-y divide-border">
            <Link
              to="/"
              className="flex items-center px-5 py-4 text-foreground hover:bg-accent/50"
            >
              <Home className="mr-3 h-5 w-5" />
              Home
            </Link>
            <Link
              to="/dashboard"
              className="flex items-center px-5 py-4 text-foreground hover:bg-accent/50"
            >
              <PiggyBank className="mr-3 h-5 w-5" />
              Expense Tracker
            </Link>
            <Link
              to="/education"
              className="flex items-center px-5 py-4 text-foreground hover:bg-accent/50"
            >
              <BookOpen className="mr-3 h-5 w-5" />
              Learning
            </Link>
            <Link
              to="/trading"
              className="flex items-center px-5 py-4 text-foreground hover:bg-accent/50"
            >
              <BarChart2 className="mr-3 h-5 w-5" />
              Paper Trading
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
