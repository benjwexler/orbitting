
import React from 'react';
import ActiveElementContextProvider from './ActiveElementContext';

const GlobalContextProviders = ({ children }) => {
  return (
    <ActiveElementContextProvider>
      {children}
    </ActiveElementContextProvider>
  )
};

export default GlobalContextProviders;
