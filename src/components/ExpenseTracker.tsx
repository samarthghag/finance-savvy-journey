
import React, { useState } from 'react';
import { 
  PlusCircle, 
  Trash2, 
  DollarSign, 
  ShoppingBag, 
  Home, 
  Car, 
  Utensils, 
  Bus, 
  Gift, 
  Coffee
} from 'lucide-react';
import { cn } from '@/lib/utils';
import RecentTransaction from './RecentTransaction';

// Sample initial data
const initialTransactions = [
  { id: 1, description: "Grocery Shopping", amount: 85.45, category: "shopping", date: "2023-05-15" },
  { id: 2, description: "Monthly Rent", amount: 1200, category: "housing", date: "2023-05-01" },
  { id: 3, description: "Gas Station", amount: 45.67, category: "transportation", date: "2023-05-10" },
  { id: 4, description: "Restaurant Dinner", amount: 78.99, category: "food", date: "2023-05-12" },
  { id: 5, description: "Coffee Shop", amount: 4.50, category: "personal", date: "2023-05-14" },
];

const categories = [
  { id: "shopping", label: "Shopping", icon: <ShoppingBag className="h-4 w-4" /> },
  { id: "housing", label: "Housing", icon: <Home className="h-4 w-4" /> },
  { id: "transportation", label: "Transportation", icon: <Car className="h-4 w-4" /> },
  { id: "food", label: "Food & Dining", icon: <Utensils className="h-4 w-4" /> },
  { id: "travel", label: "Travel", icon: <Bus className="h-4 w-4" /> },
  { id: "entertainment", label: "Entertainment", icon: <Gift className="h-4 w-4" /> },
  { id: "personal", label: "Personal", icon: <Coffee className="h-4 w-4" /> },
];

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    category: 'shopping',
    date: new Date().toISOString().split('T')[0]
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTransaction(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTransaction.description || !newTransaction.amount) return;
    
    setTransactions(prev => [
      {
        id: Date.now(),
        description: newTransaction.description,
        amount: parseFloat(newTransaction.amount),
        category: newTransaction.category,
        date: newTransaction.date
      },
      ...prev
    ]);
    
    setNewTransaction({
      description: '',
      amount: '',
      category: 'shopping',
      date: new Date().toISOString().split('T')[0]
    });
    
    setIsFormVisible(false);
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id));
  };

  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : <ShoppingBag className="h-4 w-4" />;
  };

  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto">
      {/* Summary Panel */}
      <div className="glass-card rounded-xl p-6 animate-scale-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Total Expenses</h3>
            <p className="text-3xl font-bold flex items-center">
              <DollarSign className="h-6 w-6 text-primary mr-1" />
              {totalExpenses.toFixed(2)}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Transactions</h3>
            <p className="text-3xl font-bold">{transactions.length}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Average</h3>
            <p className="text-3xl font-bold flex items-center">
              <DollarSign className="h-6 w-6 text-primary mr-1" />
              {(totalExpenses / (transactions.length || 1)).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      
      {/* Add Transaction Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className={cn(
          "w-full flex items-center justify-center py-3 rounded-lg transition-colors duration-300",
          !isFormVisible 
            ? "bg-primary text-primary-foreground hover:bg-primary/90" 
            : "bg-muted text-muted-foreground hover:bg-muted/80"
        )}
      >
        <PlusCircle className="h-5 w-5 mr-2" />
        {isFormVisible ? "Cancel" : "Add New Transaction"}
      </button>
      
      {/* Add Transaction Form */}
      {isFormVisible && (
        <form 
          onSubmit={handleAddTransaction} 
          className="glass-card rounded-xl p-6 border border-border animate-slide-down"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={newTransaction.description}
                onChange={handleInputChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                placeholder="What did you spend on?"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-foreground mb-1">
                  Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={newTransaction.amount}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={newTransaction.date}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-foreground mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={newTransaction.category}
                onChange={handleInputChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium transition-colors"
            >
              Save Transaction
            </button>
          </div>
        </form>
      )}
      
      {/* Transactions List */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <div className="space-y-3">
          {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <RecentTransaction
                key={transaction.id}
                transaction={transaction}
                icon={getCategoryIcon(transaction.category)}
                onDelete={() => handleDeleteTransaction(transaction.id)}
                delay={index * 50}
              />
            ))
          ) : (
            <p className="text-center py-6 text-muted-foreground">No transactions yet. Add one to get started!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
