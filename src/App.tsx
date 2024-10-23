import React, { useState } from 'react';
import { LayoutGrid, Plus } from 'lucide-react';
import { PortfolioCard } from './components/PortfolioCard';
import { PortfolioStats } from './components/PortfolioStats';
import { AssetList } from './components/AssetList';
import type { Portfolio } from './types';

const mockPortfolios: Portfolio[] = [
  {
    id: '1',
    name: 'Growth Portfolio',
    totalValue: 125000,
    change24h: 2.5,
    assets: [
      { id: '1', name: 'Bitcoin', symbol: 'BTC', type: 'crypto', amount: 1.5, value: 75000, change24h: 3.2 },
      { id: '2', name: 'Ethereum', symbol: 'ETH', type: 'crypto', amount: 15, value: 30000, change24h: 1.8 },
      { id: '3', name: 'Apple Inc.', symbol: 'AAPL', type: 'stock', amount: 50, value: 20000, change24h: -0.5 }
    ]
  },
  {
    id: '2',
    name: 'Tech Stocks',
    totalValue: 85000,
    change24h: -1.2,
    assets: [
      { id: '4', name: 'Microsoft', symbol: 'MSFT', type: 'stock', amount: 40, value: 35000, change24h: -1.5 },
      { id: '5', name: 'Google', symbol: 'GOOGL', type: 'stock', amount: 25, value: 50000, change24h: -0.8 }
    ]
  }
];

function App() {
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio>(mockPortfolios[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <LayoutGrid className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Portfolio Manager</span>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Plus className="h-5 w-5 mr-2" />
              Add Portfolio
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Portfolios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockPortfolios.map((portfolio) => (
                  <PortfolioCard
                    key={portfolio.id}
                    portfolio={portfolio}
                    onSelect={() => setSelectedPortfolio(portfolio)}
                  />
                ))}
              </div>
            </div>
            
            <PortfolioStats portfolio={selectedPortfolio} />
          </div>
          
          <div>
            <AssetList assets={selectedPortfolio.assets} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;