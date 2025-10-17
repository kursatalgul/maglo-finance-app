import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { randomizeScheduledTransfersData } from '../../components/dashboard/scheduled-transfers/scheduledTransfersData';

const ScheduledTransfersPage = () => {
  const [scheduledTransfers, setScheduledTransfers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get randomized scheduled transfers data
    const transfers = randomizeScheduledTransfersData();
    setScheduledTransfers(transfers);
  }, []);

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
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Scheduled Transfers</h1>
          <p className="text-gray-600 mt-2">View all your scheduled transfer history</p>
        </div>

        {/* Scheduled Transfers Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-[#1a1a1a]">All Scheduled Transfers</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">RECIPIENT</th>
                  <th className="text-left p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">AMOUNT</th>
                  <th className="text-left p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">FREQUENCY</th>
                  <th className="text-left p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">NEXT TRANSFER</th>
                  <th className="text-left p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {scheduledTransfers.map((transfer, index) => (
                  <tr key={transfer.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-semibold text-gray-600">
                            {transfer.recipient ? transfer.recipient.charAt(0) : '?'}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium text-[#1B212D] truncate">
                            {transfer.recipient}
                          </div>
                          <div className="text-xs text-[#929EAE] truncate">
                            {transfer.account}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-semibold text-[#1B212D]">
                        ${transfer.amount.toFixed(2)}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-[#929EAE] font-medium">{transfer.frequency}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-[#929EAE] font-medium">{transfer.nextTransfer}</span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transfer.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transfer.status}
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

export default ScheduledTransfersPage;