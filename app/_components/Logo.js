import Image from 'next/image';
import Link from 'next/link';
import { logoPNG } from '@/public';

function Logo() {
  return (
    <Link href='/' className='z-10 inline-block'>
      <Image
        // src='/logo.png'
        src={logoPNG}
        height={90}
        alt='One Stop HGV Logo'
        className='h-auto'
      />
    </Link>
  );
}

export default Logo;
