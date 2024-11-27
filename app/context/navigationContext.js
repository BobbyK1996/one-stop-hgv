'use client';

import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const pathName = usePathname();
  const initialPath = useRef(pathName);
  const [currentNav, setCurrentNav] = useState(pathName);

  const handleNavigationChange = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      setCurrentNav(hash || initialPath.current);
    }
  };

  useEffect(() => {
    handleNavigationChange();

    window.addEventListener('hashchange', handleNavigationChange);

    return () => {
      window.removeEventListener('hashchange', handleNavigationChange);
    };
  }, [pathName]);

  const derivedNav = currentNav.startsWith('#')
    ? currentNav
    : '/' + currentNav.split('/')[1];

  return (
    <NavigationContext.Provider
      value={{ currentNav, setCurrentNav, derivedNav }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigation() {
  const context = useContext(NavigationContext);

  if (context === undefined)
    throw new Error('Context was used outside provider');

  return context;
}

export { NavigationProvider, useNavigation };
