import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { randomizeScheduledTransfersData } from './scheduledTransfersData';
import rightArrowIcon from '../../../images/rightarrow.svg';
import salehAhmed from '../../../images/salahah.png';
import delowarHossain from '../../../images/delower.png';
import moinulHasan from '../../../images/mainul.png';
import drJubedAhmed from '../../../images/drjubed.png';
import arJakirAlp from '../../../images/ar.jakir.png';

const ScheduledTransfers = () => {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    // Generate new randomized data each time component mounts
    const randomData = randomizeScheduledTransfersData();
    setTransfers(randomData);
  }, []);
  const getAvatar = (avatarName) => {
    switch (avatarName) {
      case "salahah.png":
        return salehAhmed;
      case "delower.png":
        return delowarHossain;
      case "mainul.png":
        return moinulHasan;
      case "drjubed.png":
        return drJubedAhmed;
      case "ar.jakir.png":
        return arJakirAlp;
      default:
        return salehAhmed;
    }
  };

  return (
    <div className="w-full h-[359px] bg-white rounded-xl flex flex-col gap-4 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-[18px] font-semibold text-[#1a1a1a] leading-[100%] tracking-[0%] font-kumbh">Scheduled Transfers</h3>
        <Link 
          to="/scheduled-transfers"
          className="flex items-center gap-1 text-[#29A073] text-sm font-medium hover:underline"
        >
          View All
          <img src={rightArrowIcon} alt="Arrow" className="w-4 h-4" />
        </Link>
      </div>
      
      {/* Transfers List */}
      <div className="flex-1">
        {transfers.map((transfer, index) => (
          <div key={transfer.id} className={`flex items-center justify-between py-3 ${
            index < transfers.length - 1 ? 'border-b border-gray-100' : ''
          }`}>
            <div className="flex items-center gap-3">
              <img 
                src={getAvatar(transfer.avatar)} 
                alt={transfer.name} 
                className="w-10 h-10 rounded-full" 
              />
              <div>
                <div className="text-[#1B212D] font-medium text-sm font-kumbh">{transfer.name}</div>
                <div className="text-[#929EAE] text-xs font-kumbh">{transfer.date} at {transfer.time}</div>
              </div>
            </div>
            <div className="text-[#1B212D] font-semibold text-sm font-kumbh">
              - ${transfer.amount.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledTransfers;
