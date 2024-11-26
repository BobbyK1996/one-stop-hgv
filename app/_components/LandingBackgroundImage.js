import Image from 'next/image';

import { heroBackground } from '@/public';

function LandingBackgroundImage() {
  return (
    <div className='to-primary-600 absolute left-0 top-0 flex h-full max-h-screen min-h-[667px] w-full items-end justify-between bg-gradient-to-b from-transparent from-90% to-100%'>
      <Image
        src={heroBackground}
        fill
        alt='hero background'
        placeholder='blur'
        quality={100}
        className='pointer-events-none left-0 top-0 -z-20 w-full object-cover object-[70%_center] md:object-right'
      />
    </div>
  );
}

export default LandingBackgroundImage;
