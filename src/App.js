import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { SignIn, SignUp } from "./pages/auth";
import { Dashboard, RecentTransactionsPage, ScheduledTransfersPage } from "./pages/dashboard";
import { Sidebar, Header } from "./components/layout";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return isAuthenticated && user ? children : <Navigate to="/auth/signin" replace />;
};

// Public Route Component
const PublicRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return isAuthenticated && user ? (
    <Navigate to="/dashboard" replace />
  ) : (
    children
  );
};
const CommonLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="lg:ml-[250px] bg-white relative min-h-screen overflow-x-hidden">
        <Header onMenuToggle={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Navigate to="/auth/signin" replace />
                </PublicRoute>
              }
            />
            <Route
              path="/auth/signin"
              element={
                <PublicRoute>
                  <SignIn />
                </PublicRoute>
              }
            />
            <Route
              path="/auth/signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <CommonLayout>
                    <Dashboard />
                  </CommonLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/transactions"
              element={
                <ProtectedRoute>
                  <CommonLayout>
                    <RecentTransactionsPage />
                  </CommonLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/scheduled-transfers"
              element={
                <ProtectedRoute>
                  <CommonLayout>
                    <ScheduledTransfersPage />
                  </CommonLayout>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/auth/signin" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
