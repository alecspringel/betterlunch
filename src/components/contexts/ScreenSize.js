import React, {
  createContext,
  useContext,
} from 'react';
import useBreakpoint from '../hooks/useBreakpoint';

const defaultValue = {};

const ScreenSizeContext = createContext(defaultValue);

const ScreenSizeProvider = ({ children }) => {
  const sizes = {
    sm: useBreakpoint('(min-width: 0px)'),
    smMax: useBreakpoint('(max-width: 400px)'),
    md: useBreakpoint('(min-width: 400px)'),
    mdMax: useBreakpoint('(max-width: 720px)'),
    lg: useBreakpoint('(min-width: 720px)'),
    lgMax: useBreakpoint('(max-width: 1050px)'),
    xl: useBreakpoint('(min-width: 1050px)'),
  };

  const only = (size) => {
    const screenSizes = { ...sizes };
    if (screenSizes[size]) {
      delete screenSizes[size];
      return Object.values(screenSizes).every((val) => !val);
    }
    return false;
  };
  // const only = (sizeList) => {
  //   const screenSizes = { ...sizes };
  //   // If every size in sizeList is true,
  //   // remove them from object and then check that all others are false
  //   if (sizeList.every((size) => {
  //     if (screenSizes[size] === true) {
  //       delete screenSizes[size];
  //       return true;
  //     } return false;
  //   })) {
  //     return Object.values(screenSizes).every((val) => !val);
  //   }
  //   return false;
  // };

  return (
    <ScreenSizeContext.Provider value={{ ...sizes, only }}>
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
