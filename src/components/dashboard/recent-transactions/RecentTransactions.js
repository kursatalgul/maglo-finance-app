import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSharedDashboardData } from '../../../data/sharedData';
import iphoneIcon from '../../../images/iphone.svg';
import netflixIcon from '../../../images/netflix.svg';
import figmaIcon from '../../../images/figma.svg';

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);

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
    <div className="w-full bg-white rounded-xl border border-gray-200">
      <div className="p-6 ">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">
            Recent Transaction
          </h3>
          <Link 
            to="/transactions"
            className="text-sm text-[#29A073] hover:text-[#29A073] font-medium"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-4 gap-4 text-sm text-gray-500 font-medium mb-4">
          <div>NAME/BUSINESS</div>
          <div>TYPE</div>
          <div>AMOUNT</div>
          <div>DATE</div>
        </div>
        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="grid grid-cols-4 gap-4 py-2 border-b border-gray-100 items-center last:border-b-0 hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <img
                    src={getIcon(transaction.icon)}
                    alt={transaction.name}
                    className="w-8 h-[30px]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-medium text-[#1B212D] truncate font-kumbh">
                    {transaction.name}
                  </div>
                  <div className="text-[12px] font-normal text-[#929EAE] truncate font-kumbh">
                    {transaction.business}
                  </div>
                </div>
              </div>
              <div className="text-[14px] font-medium text-[#929EAE] truncate font-kumbh">
                {transaction.type}
              </div>
              <div className="text-[14px] font-semibold text-[#1B212D] truncate font-kumbh">
                ${transaction.amount.toFixed(2)}
              </div>
              <div className="text-[14px] font-medium text-[#929EAE] truncate font-kumbh">
                {transaction.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
