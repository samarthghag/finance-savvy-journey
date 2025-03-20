
import React from 'react';
import { cn } from '@/lib/utils';

interface IllustrationProps {
  name: 'finance' | 'education' | 'investing' | 'budget' | 'analysis' | 'trading' | 'stocks' | 'savings' | 'chart' | 'wallet';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
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
    xl: 'w-80 h-80',
  };
  
  return (
    <div className={cn(sizeClasses[size], 'relative', className)}>
      {name === 'finance' && <FinanceIllustration />}
      {name === 'education' && <EducationIllustration />}
      {name === 'investing' && <InvestingIllustration />}
      {name === 'budget' && <BudgetIllustration />}
      {name === 'analysis' && <AnalysisIllustration />}
      {name === 'trading' && <TradingIllustration />}
      {name === 'stocks' && <StocksIllustration />}
      {name === 'savings' && <SavingsIllustration />}
      {name === 'chart' && <ChartIllustration />}
      {name === 'wallet' && <WalletIllustration />}
    </div>
  );
};

const FinanceIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#ECFDF3" />
    <rect x="60" y="60" width="80" height="100" rx="4" fill="white" stroke="#10B981" strokeWidth="3" />
    <rect x="70" y="75" width="60" height="10" rx="2" fill="#10B981" />
    <rect x="70" y="95" width="40" height="8" rx="2" fill="#D1FAE5" />
    <rect x="70" y="110" width="50" height="8" rx="2" fill="#D1FAE5" />
    <rect x="70" y="125" width="35" height="8" rx="2" fill="#D1FAE5" />
    <circle cx="85" cy="150" r="10" fill="#10B981" />
    <path d="M83 150L85 152L90 147" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="125" cy="70" r="20" fill="#059669" />
    <path d="M125 62V78M118 70H132" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const EducationIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#ECFDF3" />
    <rect x="50" y="120" width="100" height="20" rx="4" fill="#059669" />
    <rect x="60" y="60" width="80" height="60" rx="4" fill="white" stroke="#10B981" strokeWidth="2" />
    <rect x="70" y="75" width="60" height="30" rx="2" fill="#D1FAE5" />
    <path d="M100 40L130 60L100 80L70 60L100 40Z" fill="#10B981" />
    <path d="M70 60V90L100 110L130 90V60" stroke="#059669" strokeWidth="2" />
    <circle cx="100" cy="60" r="8" fill="#34D399" />
    <path d="M100 55V65M95 60H105" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const InvestingIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#ECFDF3" />
    <path d="M50 140H150V150H50V140Z" fill="#059669" />
    <path d="M60 140V90M90 140V70M120 140V100M150 140V60" stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
    <path d="M50 90L80 70L110 90L150 60" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="80" cy="70" r="8" fill="#34D399" stroke="white" strokeWidth="2" />
    <circle cx="110" cy="90" r="8" fill="#34D399" stroke="white" strokeWidth="2" />
    <circle cx="60" cy="90" r="6" fill="#D1FAE5" />
    <circle cx="120" cy="100" r="6" fill="#D1FAE5" />
    <circle cx="150" cy="60" r="6" fill="#D1FAE5" />
  </svg>
);

const BudgetIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#ECFDF3" />
    <circle cx="100" cy="100" r="40" fill="white" stroke="#10B981" strokeWidth="3" />
    <path d="M100 70V100H130" stroke="#10B981" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M85 130L100 145L115 130" fill="#D1FAE5" />
    <path d="M85 130L100 145L115 130" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="90" y="50" width="20" height="10" rx="2" fill="#059669" />
    <rect x="140" y="90" width="20" height="10" rx="2" fill="#059669" transform="rotate(90 140 90)" />
    <rect x="90" y="140" width="20" height="10" rx="2" fill="#059669" />
    <rect x="50" y="90" width="20" height="10" rx="2" fill="#059669" transform="rotate(-90 50 90)" />
  </svg>
);

const AnalysisIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#ECFDF3" />
    <rect x="50" y="50" width="100" height="100" rx="4" fill="white" stroke="#10B981" strokeWidth="2" />
    <path d="M60 120L80 100L100 110L120 80L140 95" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="80" cy="100" r="5" fill="#34D399" />
    <circle cx="100" cy="110" r="5" fill="#34D399" />
    <circle cx="120" cy="80" r="5" fill="#34D399" />
    <rect x="60" y="130" width="80" height="10" rx="2" fill="#D1FAE5" />
    <path d="M50 70H150M70 50V70M90 50V70M110 50V70M130 50V70" stroke="#059669" strokeWidth="2" />
  </svg>
);

const TradingIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#ECFDF3" />
    <rect x="40" y="60" width="120" height="80" rx="4" fill="white" stroke="#10B981" strokeWidth="3" />
    <path d="M50 100L70 85L90 95L110 75L130 90L150 70" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="70" cy="85" r="5" fill="#34D399" />
    <circle cx="90" cy="95" r="5" fill="#34D399" />
    <circle cx="110" cy="75" r="5" fill="#34D399" />
    <circle cx="130" cy="90" r="5" fill="#34D399" />
    <circle cx="150" cy="70" r="5" fill="#34D399" />
    <path d="M80 120L90 110L100 120" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M110 120L120 110L130 120" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="50" y="150" width="100" height="10" rx="2" fill="#059669" />
  </svg>
);

const StocksIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#ECFDF3" />
    <rect x="50" y="50" width="100" height="100" rx="4" fill="white" stroke="#10B981" strokeWidth="2" />
    <path d="M60 140H140" stroke="#059669" strokeWidth="2" />
    <path d="M60 140V60M80 140V80M100 140V90M120 140V70M140 140V100" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
    <path d="M60 110L80 80L100 90L120 70L140 100" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="60" cy="110" r="4" fill="white" stroke="#10B981" strokeWidth="2" />
    <circle cx="80" cy="80" r="4" fill="white" stroke="#10B981" strokeWidth="2" />
    <circle cx="100" cy="90" r="4" fill="white" stroke="#10B981" strokeWidth="2" />
    <circle cx="120" cy="70" r="4" fill="white" stroke="#10B981" strokeWidth="2" />
    <circle cx="140" cy="100" r="4" fill="white" stroke="#10B981" strokeWidth="2" />
  </svg>
);

const SavingsIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#ECFDF3" />
    <path d="M60 70C60 64.477 64.477 60 70 60H140C145.523 60 150 64.477 150 70V130C150 135.523 145.523 140 140 140H70C64.477 140 60 135.523 60 130V70Z" fill="#D1FAE5" stroke="#10B981" strokeWidth="3" />
    <circle cx="100" cy="100" r="25" fill="#10B981" />
    <path d="M100 85V115M90 95H110M90 105H110" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M60 90H50V120H60" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M150 90H160V120H150" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChartIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#ECFDF3" />
    <rect x="40" y="40" width="120" height="120" rx="4" fill="white" stroke="#10B981" strokeWidth="2" />
    <path d="M60 140V60M180 140H20" stroke="#059669" strokeWidth="2" />
    <path d="M60 120L85 90L110 110L135 80L160 95" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M60 100L85 70L110 90L135 60L160 75" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5" />
    <circle cx="85" cy="90" r="4" fill="#10B981" />
    <circle cx="110" cy="110" r="4" fill="#10B981" />
    <circle cx="135" cy="80" r="4" fill="#10B981" />
    <circle cx="160" cy="95" r="4" fill="#10B981" />
    <circle cx="85" cy="70" r="4" fill="#34D399" />
    <circle cx="110" cy="90" r="4" fill="#34D399" />
    <circle cx="135" cy="60" r="4" fill="#34D399" />
    <circle cx="160" cy="75" r="4" fill="#34D399" />
  </svg>
);

const WalletIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#ECFDF3" />
    <rect x="40" y="70" width="120" height="70" rx="8" fill="white" stroke="#10B981" strokeWidth="3" />
    <rect x="40" y="90" width="120" height="50" rx="4" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
    <circle cx="130" cy="115" r="10" fill="#059669" />
    <rect x="60" y="60" width="80" height="10" rx="2" fill="#10B981" />
    <rect x="70" y="105" width="40" height="20" rx="2" fill="white" stroke="#059669" strokeWidth="2" />
    <path d="M75 115H105M120 115H140" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default Illustration;
