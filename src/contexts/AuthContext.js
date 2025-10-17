import React, { createContext, useContext, useEffect } from 'react';
import useAuthStore from '../store/authStore';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const { 
    user, 
    isAuthenticated, 
    isLoading, 
    login: storeLogin, 
    logout: storeLogout, 
    setLoading,
    checkAuth 
  } = useAuthStore();

  // Check authentication on mount
  useEffect(() => {
    setLoading(true);
    // Simulate checking auth status
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [setLoading]);

  const login = async (email, password) => {
    setLoading(true);
    
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Dummy user data
    const userData = {
      id: 1,
      name: 'John Doe',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      balance: 12500.50,
      currency: 'USD'
    };
    
    storeLogin(userData);
    setLoading(false);
    
    return { success: true };
  };

  const register = async (name, email, password) => {
    setLoading(true);
    
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Dummy user data
    const userData = {
      id: 1,
      name: name,
      email: email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      balance: 0,
      currency: 'USD'
    };
    
    storeLogin(userData);
    setLoading(false);
    
    return { success: true };
  };

  const logout = () => {
    storeLogout();
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
