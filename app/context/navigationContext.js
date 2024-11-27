'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react';
import { usePathname } from 'next/navigation';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const pathName = usePathname();
  const initialPath = useRef(pathName);
  const [currentNav, setCurrentNav] = useState(pathName);

  useEffect(() => {
    const handleNavigationChange = () => {
      const hash = window.location.hash;
      setCurrentNav(hash || initialPath.current);
    };

    if (typeof window !== 'undefined') {
      handleNavigationChange();

      window.addEventListener('hashchange', handleNavigationChange);

      return () => {
        window.removeEventListener('hashchange', handleNavigationChange);
      };
    }
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
