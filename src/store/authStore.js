import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      isAuthenticated: false,
      isLoading: false,

      // Actions
      login: (userData) => {
        set({
          user: userData,
          isAuthenticated: true,
          isLoading: false
        });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
      },

      setLoading: (loading) => {
        set({ isLoading: loading });
      },

      // Check if user is authenticated
      checkAuth: () => {
        const { user, isAuthenticated } = get();
        return isAuthenticated && user !== null;
      },

      // Get user data
      getUser: () => {
        return get().user;
      }
    }),
    {
      name: 'auth-storage', // localStorage key
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);

export default useAuthStore;
