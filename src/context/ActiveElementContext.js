
import React, { useState, createContext, useContext } from 'react';

const ActiveElementContext = createContext({});
export const useActiveElementContext = () => useContext(ActiveElementContext);

const ActiveElementContextProvider = ({children}) => {
  const [activeElement, setActiveElement] = useState();
  const store = {
    activeElement,
    setActiveElement
  }

  return (
    <ActiveElementContext.Provider value={store}>
      {children}
    </ActiveElementContext.Provider>
  );
}


export default ActiveElementContextProvider;