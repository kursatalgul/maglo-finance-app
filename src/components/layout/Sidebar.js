import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import logoImage from "../../images/maglo.svg";
import dashboardIcon from "../../images/home.svg";
import transactionsIcon from "../../images/Invoices.svg";
import invoicesIcon from "../../images/Invoices.svg";
import walletsIcon from "../../images/MyWallets.svg";
import settingsIcon from "../../images/Invoices.svg";
import helpIcon from "../../images/Invoices.svg";
import logoutIcon from "../../images/Logout.svg";

const Sidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/signin");
  };
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        w-[250px] h-screen bg-[#f1f3f4] flex flex-col fixed left-0 top-0 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:z-10
      `}>
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 p-6 pb-8">
          <img src={logoImage} alt="Maglo Logo" className="w-[30px] h-[30px]" />
          <span className="font-['Gordita'] font-bold text-lg text-[#1a1a1a]">
            Maglo.
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-6 py-6">
          <div className="flex items-center px-4 py-3 mb-2 rounded-lg bg-[#C8EE44] text-[#1a1a1a] font-semibold">
            <img src={dashboardIcon} alt="Dashboard" className="w-5 h-5 mr-3" />
            <span className="text-sm">Dashboard</span>
          </div>

          <div className="flex items-center px-4 py-3 mb-2 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
            <img
              src={transactionsIcon}
              alt="Transactions"
              className="w-5 h-5 mr-3"
            />
            <span className="text-sm font-medium">Transactions</span>
          </div>

          <div className="flex items-center px-4 py-3 mb-2 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
            <img src={invoicesIcon} alt="Invoices" className="w-5 h-5 mr-3" />
            <span className="text-sm font-medium">Invoices</span>
          </div>

          <div className="flex items-center px-4 py-3 mb-2 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
            <img src={walletsIcon} alt="My Wallets" className="w-5 h-5 mr-3" />
            <span className="text-sm font-medium">My Wallets</span>
          </div>

          <div className="flex items-center px-4 py-3 mb-2 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
            <img src={settingsIcon} alt="Settings" className="w-5 h-5 mr-3" />
            <span className="text-sm font-medium">Settings</span>
          </div>
        </nav>

        {/* Bottom Menu */}
        <div className="px-6 pt-4 pb-6">
          <div className="flex items-center px-4 py-3 mb-2 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
            <img src={helpIcon} alt="Help" className="w-5 h-5 mr-3" />
            <span className="text-sm font-medium">Help</span>
          </div>

          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 mb-2 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors text-left"
          >
            <img src={logoutIcon} alt="Logout" className="w-5 h-5 mr-3" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
