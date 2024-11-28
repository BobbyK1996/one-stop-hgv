import LandingBackgroundImage from '@components/LandingBackgroundImage';
import LandingHeading from '@components/LandingHeading';
import LandingSubHeading from '@components/LandingSubHeading';
import Button from '@components/Button';

export default function Page() {
  return (
    <>
      <LandingBackgroundImage />

      <section
        className='md:-text-xl z-10 h-screen max-h-[1000px] min-h-[667px] w-fit max-w-7xl gap-4 border-2 border-transparent lg:my-auto 2xl:max-h-[1400px]'
        id='home'
      >
        <div className='mt-[138px] flex h-[calc(100%-138px)] flex-col gap-10 border-green-600 px-4 py-10 xs:mt-[170px] xs:h-[calc(100%-170px)] md:px-10 md:py-20 lg:px-20 lg:py-28 xl:px-28 xl:py-40'>
          <LandingHeading />
          <LandingSubHeading />
          <Button href='#contact'>Call now!</Button>
        </div>
      </section>

      <section id='courses' className='w-full h-96'></section>
    </>
  );
}
