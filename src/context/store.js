
import React from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  activeElement: undefined,
  setActiveElement: (newActiveElement) => set((state) => ({ activeElement: newActiveElement })),
}))

export default useStore;