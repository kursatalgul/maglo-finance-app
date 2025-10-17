import React, { useState, useEffect } from 'react';
import { randomizeWalletData } from './walletData';
import moreIcon from '../../../images/more.svg';
import wifiIcon from '../../../images/wifi.3 1.svg';
import mastercardIcon from '../../../images/mastercard.svg';
import cardChipIcon from '../../../images/cardchp.svg';
import visaIcon from '../../../images/visa.svg';

const Wallet = () => {
  const [walletCards, setWalletCards] = useState([]);

  useEffect(() => {
    // Generate new randomized data each time component mounts
    const randomData = randomizeWalletData();
    setWalletCards(randomData);
  }, []);

  if (walletCards.length === 0) {
    return (
      <div className="w-full rounded-xl flex flex-col gap-4 p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
      </div>
    );
  }

  const [primaryCard, secondaryCard] = walletCards;

  return (
    <div className="w-full rounded-xl flex flex-col gap-4 p-6">
      {/* Wallet Header */}
      <div className="w-full h-[22px] flex justify-between items-center">
        <h2 className="text-[18px] font-semibold text-[#1a1a1a] leading-[100%] tracking-[0%] font-kumbh">Wallet</h2>
        <img src={moreIcon} alt="More" className="w-5 h-5" />
      </div>
      
      {/* Primary Credit Card */}
      <div className={`w-full h-[180px] bg-gradient-to-br ${primaryCard.gradient} rounded-[15px] p-5 shadow-xl`}>
        <div className="h-full flex flex-col justify-between">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="text-white font-bold text-base leading-none tracking-normal">{primaryCard.bankName}</div>
              <div className="w-px h-4 bg-gray-400"></div>
              <div className="text-[#626260] font-medium text-xs leading-none tracking-normal">{primaryCard.bankType}</div>
            </div>
          </div>
          
          {/* Middle Section - Card Chip and Number */}
          <div className="relative">
            <div className="flex justify-between items-center gap-4">
              <img src={cardChipIcon} alt="Card Chip" className="w-10 h-10" />
              <div className="w-[27.5px] h-[20.26px] opacity-100">
                <img src={wifiIcon} alt="Contactless" className="w-full h-full brightness-100 saturate-100" style={{ filter: 'invert(22%) sepia(8%) saturate(1200%) hue-rotate(180deg) brightness(95%) contrast(89%)' }} />
              </div>
            </div>
            <div className="text-white mt-4 font-extrabold text-[17px] leading-none tracking-[0.1em] font-gordita">
              {primaryCard.cardNumber}
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex justify-between items-end">
            <div className="text-gray-400 text-sm">
              <div>VALID THRU</div>
              <div className="text-white">{primaryCard.validThru}</div>
            </div>
            <img src={mastercardIcon} alt="Mastercard" className="w-[47px] h-[36px]" />
          </div>
        </div>
      </div>
      
      {/* Secondary Card */}
      <div className={`w-[90%] h-[150px] rounded-[15px] mx-auto overflow-hidden relative top-[-74px] backdrop-blur-sm bg-gradient-to-b ${secondaryCard.gradient} mb-[-85px]`}>
        <div className="h-full p-5 flex flex-col justify-between">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="text-[#ffffff] font-bold text-base leading-none tracking-normal font-gordita">{secondaryCard.bankName}</div>
              <div className="w-px h-4 bg-gray-400"></div>
              <div className="text-[#ffffff] font-medium text-xs leading-none tracking-normal font-gordita">{secondaryCard.bankType}</div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex justify-between items-start mt-2 mb-2">
            <div className="flex justify-between w-full items-center gap-4">
              <img src={cardChipIcon} alt="Card Chip" className="w-10 h-10" />
              <div className="w-[27.5px] h-[20.26px] opacity-100">
                <img src={wifiIcon} alt="Contactless" className="w-full h-full brightness-100 saturate-100" style={{ filter: 'invert(22%) sepia(8%) saturate(1200%) hue-rotate(180deg) brightness(95%) contrast(89%)' }} />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-end">
            <div>
               <div className="text-[#1B212D] font-bold text-[17px] leading-none tracking-normal font-gordita">
                 {secondaryCard.cardNumber.replace(/(\d{4})\s*(\d{4})\s*(\d{4})\s*(\d{4})/, '$1$2****')}
               </div>
              <div className="text-#929EAE font-gordita text-sm mt-1">{secondaryCard.validThru}</div>
            </div>
            <div className="px-2 py-1 rounded text-xs font-bold">
              <img src={visaIcon} alt="visa logo" className="w-[32px] h-[21px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
