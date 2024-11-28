import Image from 'next/image';

import { heroBackground } from '@/public';

function LandingBackgroundImage() {
  return (
    <div className='absolute left-0 top-0 -z-10 h-screen max-h-[1000px] min-h-[667px] w-full items-end justify-between 2xl:max-h-[1400px]'>
      <div className='relative z-10 h-full w-full bg-gradient-to-b from-transparent from-75% via-[rgba(98,150,48,0.1)] via-90% to-primary-600 to-100%' />

      <Image
        src={heroBackground}
        fill
        alt='hero background'
        placeholder='blur'
        quality={100}
        className='pointer-events-none relative left-0 top-0 -z-20 w-full object-cover object-[70%_center] md:object-right'
      />
    </div>
  );
}

export default LandingBackgroundImage;
