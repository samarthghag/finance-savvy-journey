
import React from 'react';
import { cn } from '@/lib/utils';

interface IllustrationProps {
  name: 'finance' | 'education' | 'investing' | 'budget' | 'analysis';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Illustration = ({ 
  name, 
  className, 
  size = 'md' 
}: IllustrationProps) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-60 h-60',
  };
  
  return (
    <div className={cn(sizeClasses[size], 'relative', className)}>
      {name === 'finance' && <FinanceIllustration />}
      {name === 'education' && <EducationIllustration />}
      {name === 'investing' && <InvestingIllustration />}
      {name === 'budget' && <BudgetIllustration />}
      {name === 'analysis' && <AnalysisIllustration />}
    </div>
  );
};

const FinanceIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#DCFCE7" />
    <rect x="60" y="60" width="80" height="100" rx="4" fill="white" stroke="#16A34A" strokeWidth="3" />
    <rect x="70" y="75" width="60" height="10" rx="2" fill="#16A34A" />
    <rect x="70" y="95" width="40" height="8" rx="2" fill="#BBF7D0" />
    <rect x="70" y="110" width="50" height="8" rx="2" fill="#BBF7D0" />
    <rect x="70" y="125" width="35" height="8" rx="2" fill="#BBF7D0" />
    <circle cx="85" cy="150" r="10" fill="#22C55E" />
    <path d="M83 150L85 152L90 147" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="125" cy="70" r="20" fill="#15803D" />
    <path d="M125 62V78M118 70H132" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const EducationIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#DCFCE7" />
    <rect x="50" y="120" width="100" height="20" rx="4" fill="#15803D" />
    <rect x="60" y="60" width="80" height="60" rx="4" fill="white" stroke="#16A34A" strokeWidth="2" />
    <rect x="70" y="75" width="60" height="30" rx="2" fill="#BBF7D0" />
    <path d="M100 40L130 60L100 80L70 60L100 40Z" fill="#22C55E" />
    <path d="M70 60V90L100 110L130 90V60" stroke="#15803D" strokeWidth="2" />
    <circle cx="100" cy="60" r="8" fill="#4ADE80" />
    <path d="M100 55V65M95 60H105" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const InvestingIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#DCFCE7" />
    <path d="M50 140H150V150H50V140Z" fill="#15803D" />
    <path d="M60 140V90M90 140V70M120 140V100M150 140V60" stroke="#16A34A" strokeWidth="8" strokeLinecap="round" />
    <path d="M50 90L80 70L110 90L150 60" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="80" cy="70" r="8" fill="#4ADE80" stroke="white" strokeWidth="2" />
    <circle cx="110" cy="90" r="8" fill="#4ADE80" stroke="white" strokeWidth="2" />
    <circle cx="60" cy="90" r="6" fill="#BBF7D0" />
    <circle cx="120" cy="100" r="6" fill="#BBF7D0" />
    <circle cx="150" cy="60" r="6" fill="#BBF7D0" />
  </svg>
);

const BudgetIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#DCFCE7" />
    <circle cx="100" cy="100" r="40" fill="white" stroke="#16A34A" strokeWidth="3" />
    <path d="M100 70V100H130" stroke="#22C55E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M85 130L100 145L115 130" fill="#BBF7D0" />
    <path d="M85 130L100 145L115 130" stroke="#15803D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="90" y="50" width="20" height="10" rx="2" fill="#15803D" />
    <rect x="140" y="90" width="20" height="10" rx="2" fill="#15803D" transform="rotate(90 140 90)" />
    <rect x="90" y="140" width="20" height="10" rx="2" fill="#15803D" />
    <rect x="50" y="90" width="20" height="10" rx="2" fill="#15803D" transform="rotate(-90 50 90)" />
  </svg>
);

const AnalysisIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#DCFCE7" />
    <rect x="50" y="50" width="100" height="100" rx="4" fill="white" stroke="#16A34A" strokeWidth="2" />
    <path d="M60 120L80 100L100 110L120 80L140 95" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="80" cy="100" r="5" fill="#4ADE80" />
    <circle cx="100" cy="110" r="5" fill="#4ADE80" />
    <circle cx="120" cy="80" r="5" fill="#4ADE80" />
    <rect x="60" y="130" width="80" height="10" rx="2" fill="#BBF7D0" />
    <path d="M50 70H150M70 50V70M90 50V70M110 50V70M130 50V70" stroke="#15803D" strokeWidth="2" />
  </svg>
);

export default Illustration;
