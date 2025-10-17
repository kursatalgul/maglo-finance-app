import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import { LazyComponent } from "../../components/loading";
import { Cards, Charts, RecentTransactions, Wallet, ScheduledTransfers } from "../../components/dashboard";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-700">
          Please log in to view the dashboard.
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      className="w-full min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 w-full min-h-screen relative px-4 lg:px-6 pt-4 lg:pt-6">
        {/* Main Content Area */}
        <div className="lg:col-span-8 opacity-100 flex flex-col gap-6 lg:gap-[30px] pt-0">
          {/* Cards Component */}
          <LazyComponent 
            skeletonType="card" 
            skeletonCount={3}
            animationType="fadeUp"
            delay={0.5}
          >
            <Cards />
          </LazyComponent>
          
          {/* Charts Component */}
          <LazyComponent 
            skeletonType="chart" 
            skeletonCount={1}
            animationType="slideLeft"
            delay={1.0}
          >
            <Charts />
          </LazyComponent>
          
          {/* Recent Transactions Component */}
          <LazyComponent 
            skeletonType="transaction" 
            skeletonCount={1}
            animationType="fadeUp"
            delay={1.5}
          >
            <RecentTransactions />
          </LazyComponent>
        </div>
        
        {/* Sidebar Area */}
        <div className="lg:col-span-3 px-2 flex flex-col pt-0 gap-6 lg:gap-0">
          <LazyComponent 
            skeletonType="wallet" 
            skeletonCount={1}
            animationType="slideRight"
            delay={2.0}
          >
            <Wallet />
          </LazyComponent>
          
          <LazyComponent 
            skeletonType="transaction" 
            skeletonCount={1}
            animationType="scale"
            delay={2.5}
          >
            <ScheduledTransfers />
          </LazyComponent>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;