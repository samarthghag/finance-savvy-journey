
import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Award, DollarSign, TrendingUp, Send, Tag, PieChart, LineChart } from 'lucide-react';
import Illustration from './ui/illustrations';

interface CategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  topics: string[];
  illustration: 'education' | 'investing' | 'budget' | 'analysis' | 'trading' | 'stocks' | 'savings' | 'chart' | 'wallet';
  delay?: number;
}

const categories: CategoryProps[] = [
  {
    title: "Investment Fundamentals",
    description: "Learn the basics of investing and building a portfolio.",
    icon: <TrendingUp className="h-6 w-6" />,
    iconColor: "bg-finance-100 text-finance-700",
    topics: ["Asset Classes", "Risk & Return", "Portfolio Diversification", "Time Value of Money"],
    illustration: "investing"
  },
  {
    title: "Mutual Funds",
    description: "Understand mutual funds, types, and selection strategies.",
    icon: <PieChart className="h-6 w-6" />,
    iconColor: "bg-purple-100 text-purple-600",
    topics: ["Fund Types", "Expense Ratios", "NAV & Returns", "SIP vs. Lump Sum"],
    illustration: "chart"
  },
  {
    title: "Stock Trading",
    description: "Master stock analysis and trading techniques.",
    icon: <LineChart className="h-6 w-6" />,
    iconColor: "bg-finance-100 text-finance-700",
    topics: ["Technical Analysis", "Fundamental Analysis", "Market Orders", "Trading Psychology"],
    illustration: "stocks"
  },
  {
    title: "Financial Terms",
    description: "Decode essential financial terminology and concepts.",
    icon: <BookOpen className="h-6 w-6" />,
    iconColor: "bg-amber-100 text-amber-600",
    topics: ["Financial Ratios", "Market Indicators", "Economic Metrics", "Accounting Basics"],
    illustration: "education"
  },
  {
    title: "Personal Finance",
    description: "Optimize your personal financial management.",
    icon: <DollarSign className="h-6 w-6" />,
    iconColor: "bg-finance-100 text-finance-700",
    topics: ["Budgeting", "Debt Management", "Emergency Fund", "Financial Goals"],
    illustration: "budget"
  },
  {
    title: "Tax Planning",
    description: "Strategies to optimize your tax liability legally.",
    icon: <Tag className="h-6 w-6" />,
    iconColor: "bg-indigo-100 text-indigo-600",
    topics: ["Tax-saving Investments", "Income Tax Basics", "Capital Gains", "Tax Forms"],
    illustration: "savings"
  }
];

const FinancialEducation = () => {
  return (
    <div className="space-y-8 w-full">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto relative">
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-70 hidden md:block">
          <Illustration name="education" size="md" />
        </div>
        
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-finance-100 text-finance-700 mb-4">
          <Award className="h-6 w-6" />
        </div>
        <h1 className="section-heading font-spaceGrotesk">Financial Knowledge Hub</h1>
        <p className="text-lg text-muted-foreground">
          Expand your understanding of finance with our curated educational resources.
          Master the concepts that will help you make informed financial decisions.
        </p>
      </div>
      
      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <CategoryCard 
            key={category.title} 
            {...category} 
            delay={idx * 100} 
          />
        ))}
      </div>
    </div>
  );
};

const CategoryCard = ({ title, description, icon, iconColor, topics, illustration, delay = 0 }: CategoryProps) => {
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden animate-fade-in hoverable-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center mb-4", iconColor)}>
            {icon}
          </div>
          <div className="w-20 h-20">
            <Illustration name={illustration} size="sm" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 font-spaceGrotesk">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </div>
      
      <div className="bg-background/50 border-t border-border p-4">
        <h4 className="text-sm font-medium text-foreground mb-3">Popular Topics:</h4>
        <div className="flex flex-wrap gap-2">
          {topics.map(topic => (
            <span 
              key={topic}
              className="inline-flex items-center text-xs font-medium rounded-full px-2.5 py-1 bg-finance-100 text-finance-700"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialEducation;
