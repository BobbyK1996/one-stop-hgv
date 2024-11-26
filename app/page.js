import LandingBackgroundImage from '@components/LandingBackgroundImage';
import LandingHeading from '@components/LandingHeading';
import LandingSubHeading from '@components/LandingSubHeading';
import Button from '@components/Button';

export default function Page() {
  return (
    <>
      <LandingBackgroundImage />

      <section className='md:-text-xl z-10 grid h-screen grid-cols-1 gap-4 lg:my-auto lg:max-h-[1000px] lg:grid-cols-2'>
        <LandingHeading />
        <LandingSubHeading />
        <Button />
      </section>
    </>
  );
}
