import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../images/search.1 1.svg";
import notificationsIcon from "../../images/notifications.svg";
import dropdownIcon from "../../images/Dropdown.svg";
import profileIcon from "../../images/profile.svg";

const Header = ({ onMenuToggle }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/auth/signin");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex justify-between items-center p-4 lg:p-6 bg-white sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <h1 className="text-xl lg:text-2xl font-bold text-[#1a1a1a]">Dashboard</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
          <img src={searchIcon} alt="Search" className="w-6 h-6" />
        </div>

        <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
          <img
            src={notificationsIcon}
            alt="Notifications"
            className="w-6 h-6"
          />
        </div>

        <div className="relative" ref={dropdownRef}>
          <div 
            className="flex items-center gap-3 cursor-pointer bg-[#F8F8F8] rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <img src={profileIcon} alt="Profile" className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium text-[#1a1a1a]">
              {user?.name || "Mahfuzul Nabil"}
            </span>
            <img src={dropdownIcon} alt="Dropdown" className="w-4 h-4" />
          </div>
          
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                {user?.email || "user@example.com"}
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
