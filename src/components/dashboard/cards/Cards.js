import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getSharedDashboardData } from '../../../data/sharedData';
import totalBalanceIcon from '../../../images/totalbalanced.svg';
import totalSpendingIcon from '../../../images/totalspending.svg';
import totalSavedIcon from '../../../images/totalsaved.svg';

const Cards = () => {
  const [totals, setTotals] = useState(null);
  const [selectedCard, setSelectedCard] = useState(1); // Default to first card

  useEffect(() => {
    // Get shared data that all components will use
    const sharedData = getSharedDashboardData();
    setTotals(sharedData.totals);
  }, []);

  if (!totals) {
    return null; // LazyComponent will handle the skeleton
  }

  const cardsData = [
    {
      id: 1,
      title: "Total Balance",
      amount: `$${totals.totalBalance}`,
      icon: totalBalanceIcon,
      color: "bg-[#2a2a2a]",
      iconColor: "text-white",
      trend: "+2.5%",
      trendColor: "text-green-400"
    },
    {
      id: 2,
      title: "Total Spending",
      amount: `$${totals.totalSpending}`,
      icon: totalSpendingIcon,
      color: "bg-white border border-gray-200",
      iconColor: "text-gray-600",
      trend: "-1.2%",
      trendColor: "text-red-600"
    },
    {
      id: 3,
      title: "Total Saved",
      amount: `$${totals.totalSaved}`,
      icon: totalSavedIcon,
      color: "bg-white border border-gray-200",
      iconColor: "text-gray-600",
      trend: "+5.8%",
      trendColor: "text-green-600"
    }
  ];

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const getCardStyles = (card) => {
    const isSelected = selectedCard === card.id;
    if (isSelected) {
      return "bg-[#363A3F]"; // Selected card gets #363A3F background without border
    }
    return "bg-[#F8F8F8]"; // Unselected cards get #F8F8F8 background
  };

  const getTextStyles = (card) => {
    const isSelected = selectedCard === card.id;
    if (isSelected) {
      return {
        title: "text-gray-500",
        amount: "text-white"
      };
    }
    return {
      title: "text-gray-500",
      amount: "text-[#363A3F]"
    };
  };

  return (
    <div className="w-full h-auto lg:h-[105px]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-[25px] w-full h-full">
        {cardsData.map((card, index) => {
          const isSelected = selectedCard === card.id;
          const cardStyles = getCardStyles(card);
          const textStyles = getTextStyles(card);
          
          return (
            <motion.div 
              key={card.id} 
              className={`w-full h-[105px] ${cardStyles} rounded-[10px] flex items-center gap-4 pt-6 pr-5 pb-6 pl-5 cursor-pointer transition-all duration-300 focus:outline-none`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => handleCardClick(card.id)}
            >
                <div 
                  className={`w-12 h-12 ${isSelected ? 'bg-[#C8EE44]' : 'bg-[#EBE8E8]'} rounded-full flex items-center justify-center transition-colors duration-200`}
                >
                <img 
                  src={card.icon} 
                  alt={card.title}
                  className="w-5 h-5"
                  style={isSelected ? {
                    filter: "brightness(0) saturate(100%) invert(22%) sepia(8%) saturate(1200%) hue-rotate(180deg) brightness(95%) contrast(89%)"
                  } : {
                    filter: "brightness(0) saturate(100%) invert(22%) sepia(8%) saturate(1200%) hue-rotate(180deg) brightness(95%) contrast(89%)"
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className={`text-sm ${textStyles.title} font-medium mb-2`}>
                  {card.title}
                </h3>
                <p className={`text-xl lg:text-2xl font-semibold ${textStyles.amount}`}>
                  {card.amount}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
