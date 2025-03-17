
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className, 
  iconClassName,
  delay = 0 
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 hoverable-card animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={cn(
        "h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4",
        iconClassName
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
