'use client';

import Image from 'next/image';
import Link from 'next/link';

import { logoPNG } from '@/public';

import { scrollToWithOffset } from '@helpers/indexClientHelpers';

import { useNavigation } from '@/app/context/navigationContext';

// onClick={() => setCurrentNav('/')}
function Logo() {
  const { setCurrentNav } = useNavigation();

  const handleClick = (e) => {
    if (window.location.pathname === '/' && document.getElementById('home')) {
      e.preventDefault();
      scrollToWithOffset('home', 170, () => setCurrentNav('/'));
    } else {
      setCurrentNav('/');
    }
  };

  return (
    <Link href='/' className='z-10 inline-block' onClick={handleClick}>
      <Image
        // src='/logo.png'
        src={logoPNG}
        height={90}
        width={147}
        alt='One Stop HGV - Professional HGV Training Services Logo'
        className='h-auto'
        priority
        aria-label='Go to One Stop HGV Homepage'
      />
    </Link>
  );
}

export default Logo;
