import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

function useFindCurrentNav() {
  const pathname = usePathname();
  const [currentNav, setCurrentNav] = useState(pathname);

  useEffect(() => {
    const handleNavigationChange = () => {
      const hash = window.location.hash;

      console.log('hashchange fired:', hash);

      if (hash) {
        setCurrentNav(hash);
      } else {
        setCurrentNav(pathname);
      }
    };

    handleNavigationChange();

    window.addEventListener('hashchange', handleNavigationChange);

    return () =>
      window.removeEventListener('hashchange', handleNavigationChange);
  }, [pathname]);

  if (currentNav.startsWith('#')) return currentNav;

  const navigationPart = '/' + currentNav.split('/')[1];
  return navigationPart || '/';
}

export default useFindCurrentNav;
