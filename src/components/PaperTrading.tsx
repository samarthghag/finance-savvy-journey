
import React, { useState } from 'react';
import { 
  LineChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign,
  BarChart2,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Illustration from './ui/illustrations';

// Sample stock data
const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 175.43, change: 2.15, changePercent: 1.24 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 330.16, change: -1.53, changePercent: -0.46 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 142.87, change: 3.42, changePercent: 2.45 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 126.25, change: 0.87, changePercent: 0.69 },
  { symbol: "META", name: "Meta Platforms Inc.", price: 467.92, change: -5.63, changePercent: -1.19 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 192.36, change: 6.27, changePercent: 3.37 },
  { symbol: "JPM", name: "JPMorgan Chase & Co.", price: 182.34, change: 1.21, changePercent: 0.67 },
  { symbol: "V", name: "Visa Inc.", price: 276.56, change: -0.42, changePercent: -0.15 },
];

interface PortfolioItem {
  symbol: string;
  shares: number;
  avgCost: number;
}

const PaperTrading = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([
    { symbol: "AAPL", shares: 10, avgCost: 170.25 },
    { symbol: "MSFT", shares: 5, avgCost: 325.80 },
  ]);
  const [balance, setBalance] = useState(10000);
  const [orderForm, setOrderForm] = useState({
    symbol: "AAPL",
    shares: "",
    type: "buy" as "buy" | "sell",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const { symbol, shares: sharesStr, type } = orderForm;
    const shares = parseInt(sharesStr);
    
    if (!symbol || !shares || shares <= 0) return;
    
    const stock = stocks.find(s => s.symbol === symbol);
    if (!stock) return;
    
    if (type === "buy") {
      const cost = stock.price * shares;
      if (balance < cost) {
        alert("Insufficient balance");
        return;
      }
      
      // Update portfolio
      const existingPosition = portfolio.find(item => item.symbol === symbol);
      if (existingPosition) {
        // Update existing position
        const totalShares = existingPosition.shares + shares;
        const totalCost = existingPosition.shares * existingPosition.avgCost + shares * stock.price;
        const newAvgCost = totalCost / totalShares;
        
        setPortfolio(portfolio.map(item => 
          item.symbol === symbol 
            ? { ...item, shares: totalShares, avgCost: newAvgCost } 
            : item
        ));
      } else {
        // Add new position
        setPortfolio([...portfolio, { symbol, shares, avgCost: stock.price }]);
      }
      
      // Update balance
      setBalance(prev => prev - cost);
      
    } else if (type === "sell") {
      const existingPosition = portfolio.find(item => item.symbol === symbol);
      if (!existingPosition || existingPosition.shares < shares) {
        alert("Not enough shares to sell");
        return;
      }
      
      // Update portfolio
      if (existingPosition.shares === shares) {
        // Remove position entirely
        setPortfolio(portfolio.filter(item => item.symbol !== symbol));
      } else {
        // Reduce position
        setPortfolio(portfolio.map(item => 
          item.symbol === symbol 
            ? { ...item, shares: item.shares - shares } 
            : item
        ));
      }
      
      // Update balance
      const proceeds = stock.price * shares;
      setBalance(prev => prev + proceeds);
    }
    
    // Reset form
    setOrderForm(prev => ({ ...prev, shares: "" }));
  };

  // Calculate portfolio value
  const portfolioValue = portfolio.reduce((total, position) => {
    const stock = stocks.find(s => s.symbol === position.symbol);
    return total + (stock ? stock.price * position.shares : 0);
  }, 0);

  // Calculate total gain/loss
  const costBasis = portfolio.reduce((total, position) => {
    return total + (position.avgCost * position.shares);
  }, 0);
  
  const totalGainLoss = portfolioValue - costBasis;
  const totalGainLossPercent = (portfolioValue / costBasis - 1) * 100;
  
  const totalAccountValue = balance + portfolioValue;

  return (
    <div className="space-y-8 w-full">
      {/* Header Section */}
      <div className="glass-card rounded-xl p-6 animate-scale-in relative overflow-hidden">
        <div className="absolute -right-16 -bottom-16 opacity-10">
          <Illustration name="investing" size="lg" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Account Value</h3>
            <p className="text-3xl font-bold flex items-center">
              <DollarSign className="h-6 w-6 text-finance-600 mr-1" />
              {totalAccountValue.toFixed(2)}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Cash Balance</h3>
            <p className="text-3xl font-bold flex items-center">
              <DollarSign className="h-6 w-6 text-finance-600 mr-1" />
              {balance.toFixed(2)}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Portfolio Value</h3>
            <p className="text-3xl font-bold flex items-center">
              <DollarSign className="h-6 w-6 text-finance-600 mr-1" />
              {portfolioValue.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Portfolio Holdings */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-finance-700" />
            Your Portfolio
          </h2>
          
          {portfolio.length > 0 ? (
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-medium">Symbol</th>
                      <th className="text-left p-4 font-medium">Shares</th>
                      <th className="text-left p-4 font-medium">Avg. Cost</th>
                      <th className="text-left p-4 font-medium">Current</th>
                      <th className="text-left p-4 font-medium">Gain/Loss</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.map(position => {
                      const stock = stocks.find(s => s.symbol === position.symbol);
                      if (!stock) return null;
                      
                      const marketValue = stock.price * position.shares;
                      const costBasis = position.avgCost * position.shares;
                      const gainLoss = marketValue - costBasis;
                      const gainLossPercent = (stock.price / position.avgCost - 1) * 100;
                      
                      return (
                        <tr key={position.symbol} className="border-b border-border">
                          <td className="p-4">
                            <div>
                              <div className="font-medium">{position.symbol}</div>
                              <div className="text-sm text-muted-foreground">{stock.name}</div>
                            </div>
                          </td>
                          <td className="p-4">{position.shares}</td>
                          <td className="p-4">${position.avgCost.toFixed(2)}</td>
                          <td className="p-4">${stock.price.toFixed(2)}</td>
                          <td className="p-4">
                            <div className={cn(
                              "flex items-center",
                              gainLoss >= 0 ? "text-finance-600" : "text-red-600"
                            )}>
                              {gainLoss >= 0 ? (
                                <ArrowUpRight className="h-4 w-4 mr-1" />
                              ) : (
                                <ArrowDownRight className="h-4 w-4 mr-1" />
                              )}
                              ${Math.abs(gainLoss).toFixed(2)}
                              <span className="ml-1">
                                ({Math.abs(gainLossPercent).toFixed(2)}%)
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-background/50">
                      <td colSpan={3} className="p-4 font-semibold text-right">Total:</td>
                      <td className="p-4 font-semibold">${portfolioValue.toFixed(2)}</td>
                      <td className="p-4">
                        <div className={cn(
                          "flex items-center font-semibold",
                          totalGainLoss >= 0 ? "text-finance-600" : "text-red-600"
                        )}>
                          {totalGainLoss >= 0 ? (
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 mr-1" />
                          )}
                          ${Math.abs(totalGainLoss).toFixed(2)}
                          <span className="ml-1">
                            ({!isNaN(totalGainLossPercent) ? Math.abs(totalGainLossPercent).toFixed(2) : 0}%)
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          ) : (
            <div className="glass-card rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-finance-100 flex items-center justify-center text-finance-700">
                  <AlertCircle className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">No Positions Yet</h3>
              <p className="text-muted-foreground mb-4">
                Use the order form to start building your paper trading portfolio.
              </p>
            </div>
          )}
          
          {/* Stock Market */}
          <h2 className="text-xl font-semibold flex items-center gap-2 mt-8">
            <TrendingUp className="h-5 w-5 text-finance-700" />
            Market Overview
          </h2>
          
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium">Symbol</th>
                    <th className="text-left p-4 font-medium">Price</th>
                    <th className="text-left p-4 font-medium">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {stocks.map(stock => (
                    <tr key={stock.symbol} className="border-b border-border">
                      <td className="p-4">
                        <div>
                          <div className="font-medium">{stock.symbol}</div>
                          <div className="text-sm text-muted-foreground">{stock.name}</div>
                        </div>
                      </td>
                      <td className="p-4">${stock.price.toFixed(2)}</td>
                      <td className="p-4">
                        <div className={cn(
                          "flex items-center",
                          stock.change >= 0 ? "text-finance-600" : "text-red-600"
                        )}>
                          {stock.change >= 0 ? (
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 mr-1" />
                          )}
                          {Math.abs(stock.change).toFixed(2)}
                          <span className="ml-1">
                            ({Math.abs(stock.changePercent).toFixed(2)}%)
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Order Form */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <LineChart className="h-5 w-5 text-finance-700" />
            Place Order
          </h2>
          
          <form onSubmit={handlePlaceOrder} className="glass-card rounded-xl p-6 space-y-4">
            <div>
              <label htmlFor="symbol" className="block text-sm font-medium text-foreground mb-1">
                Symbol
              </label>
              <select
                id="symbol"
                name="symbol"
                value={orderForm.symbol}
                onChange={handleInputChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {stocks.map(stock => (
                  <option key={stock.symbol} value={stock.symbol}>
                    {stock.symbol} - {stock.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="shares" className="block text-sm font-medium text-foreground mb-1">
                Shares
              </label>
              <input
                type="number"
                id="shares"
                name="shares"
                value={orderForm.shares}
                onChange={handleInputChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                placeholder="Number of shares"
                min="1"
                required
              />
            </div>
            
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-foreground mb-1">
                Order Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setOrderForm(prev => ({ ...prev, type: "buy" }))}
                  className={cn(
                    "py-2 px-4 rounded-md font-medium transition-colors",
                    orderForm.type === "buy"
                      ? "bg-finance-600 text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  Buy
                </button>
                <button
                  type="button"
                  onClick={() => setOrderForm(prev => ({ ...prev, type: "sell" }))}
                  className={cn(
                    "py-2 px-4 rounded-md font-medium transition-colors",
                    orderForm.type === "sell"
                      ? "bg-red-600 text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  Sell
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Order Preview
              </label>
              <div className="bg-background/50 rounded-md p-3 border border-border">
                {orderForm.shares ? (
                  <div className="space-y-1">
                    {(() => {
                      const stock = stocks.find(s => s.symbol === orderForm.symbol);
                      if (!stock) return null;
                      
                      const shares = parseInt(orderForm.shares) || 0;
                      const total = stock.price * shares;
                      
                      return (
                        <>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Stock:</span>
                            <span className="font-medium">{stock.symbol}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Price:</span>
                            <span className="font-medium">${stock.price.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Shares:</span>
                            <span className="font-medium">{shares}</span>
                          </div>
                          <div className="flex justify-between border-t border-border mt-2 pt-2">
                            <span className="text-muted-foreground">Total:</span>
                            <span className="font-medium">${total.toFixed(2)}</span>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <p className="text-center text-sm text-muted-foreground">
                    Enter shares to see order details
                  </p>
                )}
              </div>
            </div>
            
            <button
              type="submit"
              className={cn(
                "w-full py-3 px-4 rounded-md font-medium text-white transition-colors",
                orderForm.type === "buy"
                  ? "bg-finance-600 hover:bg-finance-700"
                  : "bg-red-600 hover:bg-red-700"
              )}
            >
              {orderForm.type === "buy" ? "Buy Shares" : "Sell Shares"}
            </button>
          </form>
          
          <div className="bg-muted/30 rounded-xl p-4 border border-border">
            <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              Paper Trading
            </h3>
            <p className="text-sm text-muted-foreground">
              This is a paper trading simulator. No real money is used and no actual investments are made.
              Practice and learn without financial risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperTrading;
