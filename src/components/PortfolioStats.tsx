import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Wallet, TrendingUp, CircleDollarSign } from 'lucide-react';
import type { Portfolio } from '../types';

const mockData = [
  { date: 'Jan', value: 4000 },
  { date: 'Feb', value: 4500 },
  { date: 'Mar', value: 4200 },
  { date: 'Apr', value: 4800 },
  { date: 'May', value: 5100 },
  { date: 'Jun', value: 4900 }
];

interface PortfolioStatsProps {
  portfolio: Portfolio;
}

export function PortfolioStats({ portfolio }: PortfolioStatsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Wallet className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-xl font-semibold text-gray-900">
                ${portfolio.totalValue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">24h Change</p>
              <p className={`text-xl font-semibold ${
                portfolio.change24h >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {portfolio.change24h >= 0 ? '+' : ''}{portfolio.change24h}%
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <CircleDollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Assets</p>
              <p className="text-xl font-semibold text-gray-900">
                {portfolio.assets.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Performance</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#4F46E5" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}