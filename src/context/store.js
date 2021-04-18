
import React from 'react';
import create from 'zustand';

const useStore = create((set, get) => ({
  activeElement: undefined,
  setActiveElement: (newActiveElement) => set((state) => ({ activeElement: newActiveElement })),
  screenWidth: undefined,
  setScreenWidth: (int) => set((state) => ({ screenWidth: int})),
  getIsMobile: () => get()?.screenWidth <= 576,
}))

export default useStore;