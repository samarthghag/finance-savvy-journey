
import React from 'react';
import { Trash2, DollarSign } from 'lucide-react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: string;
}

interface RecentTransactionProps {
  transaction: Transaction;
  icon: React.ReactNode;
  onDelete: () => void;
  delay?: number;
}

const RecentTransaction = ({ transaction, icon, onDelete, delay = 0 }: RecentTransactionProps) => {
  // Format date from YYYY-MM-DD to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div 
      className="glass-card rounded-lg p-4 flex items-center justify-between animate-fade-in hoverable-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          {icon}
        </div>
        <div>
          <h4 className="font-medium">{transaction.description}</h4>
          <p className="text-sm text-muted-foreground">{formatDate(transaction.date)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-semibold mr-4 flex items-center">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          {transaction.amount.toFixed(2)}
        </p>
        <button
          onClick={onDelete}
          className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors"
          aria-label="Delete transaction"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default RecentTransaction;
