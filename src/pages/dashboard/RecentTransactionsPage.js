import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSharedDashboardData } from '../../data/sharedData';
import iphoneIcon from '../../images/iphone.svg';
import netflixIcon from '../../images/netflix.svg';
import figmaIcon from '../../images/figma.svg';

const RecentTransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get shared data that all components will use
    const sharedData = getSharedDashboardData();
    setTransactions(sharedData.transactions);
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "iphone.svg":
        return iphoneIcon;
      case "netflix.svg":
        return netflixIcon;
      case "figma.svg":
        return figmaIcon;
      default:
        return iphoneIcon;
    }
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-sm text-[#29A073] hover:text-[#29A073] font-medium mb-4 inline-flex items-center gap-2"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Recent Transactions</h1>
          <p className="text-gray-600 mt-2">View all your recent transaction history</p>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-[#1a1a1a]">All Transactions</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">NAME/BUSINESS</th>
                  <th className="text-left p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">TYPE</th>
                  <th className="text-left p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">AMOUNT</th>
                  <th className="text-left p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">DATE</th>
                  <th className="text-left p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {transactions.map((transaction, index) => (
                  <tr key={transaction.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <img
                            src={getIcon(transaction.icon)}
                            alt={transaction.name}
                            className="w-6 h-6"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium text-[#1B212D] truncate">
                            {transaction.name}
                          </div>
                          <div className="text-xs text-[#929EAE] truncate">
                            {transaction.business}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-[#929EAE] font-medium">{transaction.type}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-semibold text-[#1B212D]">
                        ${transaction.amount.toFixed(2)}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-[#929EAE] font-medium">{transaction.date}</span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactionsPage;