import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const shimmer = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #d0d0d0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 2.5s infinite'
  };

  const cardSkeleton = () => (
    <motion.div
      className="w-full h-[105px] bg-gray-200 rounded-[10px] flex items-center gap-4 pt-6 pr-5 pb-6 pl-5"
      style={shimmer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-300 rounded mb-2 w-24"></div>
        <div className="h-6 bg-gray-300 rounded w-20"></div>
      </div>
    </motion.div>
  );

  const chartSkeleton = () => (
    <motion.div
      className="w-full h-[291px] bg-white rounded-xl p-6 border border-gray-200"
      style={shimmer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="h-6 bg-gray-300 rounded w-32"></div>
        <div className="flex items-center gap-4">
          <div className="h-4 bg-gray-300 rounded w-16"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
      <div className="h-[200px] bg-gray-200 rounded"></div>
    </motion.div>
  );

  const transactionSkeleton = () => (
    <motion.div
      className="w-full bg-white rounded-xl p-6 border border-gray-200"
      style={shimmer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="h-6 bg-gray-300 rounded w-40"></div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center gap-4 py-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded mb-1 w-32"></div>
              <div className="h-3 bg-gray-300 rounded w-24"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-16"></div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const walletSkeleton = () => (
    <motion.div
      className="w-full rounded-xl flex flex-col gap-4 p-6"
      style={shimmer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <div className="h-6 bg-gray-300 rounded w-24"></div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
      <div className="h-32 bg-gray-200 rounded-lg"></div>
      <div className="h-32 bg-gray-200 rounded-lg"></div>
    </motion.div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return cardSkeleton();
      case 'chart':
        return chartSkeleton();
      case 'transaction':
        return transactionSkeleton();
      case 'wallet':
        return walletSkeleton();
      default:
        return cardSkeleton();
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .skeleton-pulse {
          animation: shimmer 2.5s infinite;
        }
      `}</style>
      {[...Array(count)].map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
