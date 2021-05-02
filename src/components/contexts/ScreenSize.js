import React, {
  useState,
  createContext,
  useContext,
} from 'react';
import useBreakpoint from '../hooks/useBreakpoint';

const defaultValue = {};

const ScreenSizeContext = createContext(defaultValue);

const ScreenSizeProvider = ({ children }) => {
  const sizes = {
    sm: useBreakpoint(400),
    md: useBreakpoint(720),
    lg: useBreakpoint(1050),
    xl: useBreakpoint(1300),
  };

  return (
    <ScreenSizeContext.Provider value={sizes}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

function useScreenSize() {
  const context = useContext(ScreenSizeContext);
  if (context === defaultValue) {
    throw new Error('useScreenSize must be used within ScreenSizeProvider');
  }
  return context;
}
export { useScreenSize, ScreenSizeProvider };
