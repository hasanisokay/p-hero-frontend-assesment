import create from 'zustand';

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  currentUser: null,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setCurrentUser: (user) => set({ currentUser: user }),

}));

export default useAuthStore;
