'use client';

import Image from 'next/image';
import Link from 'next/link';
import { logoPNG } from '@/public';

import { useNavigation } from '@/app/context/navigationContext';

function Logo() {
  const { setCurrentNav } = useNavigation();

  return (
    <Link
      href='/'
      className='z-10 inline-block'
      onClick={() => setCurrentNav('/')}
    >
      <Image
        // src='/logo.png'
        src={logoPNG}
        height={90}
        alt='One Stop HGV Logo'
        className='h-auto'
        priority
      />
    </Link>
  );
}

export default Logo;
