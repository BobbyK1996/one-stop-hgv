import LandingBackgroundImage from '@components/LandingBackgroundImage';
import LandingHeading from '@components/LandingHeading';
import LandingSubHeading from '@components/LandingSubHeading';
import Button from '@components/Button';
import ProductCards from '@components/ProductCards';

import { COURSES_CARDS } from '@lib/data';

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

      <section
        id='courses'
        className='mx-auto flex w-full max-w-[1800px] flex-col gap-x-8 gap-y-16 px-4'
      >
        <div className='mt-[138px] flex h-[calc(100%-138px)] flex-col items-start gap-6 px-4 xs:mt-[170px] xs:h-[calc(100%-170px)] md:px-8 lg:px-12 xl:px-4 2xl:px-6'>
          <h1 className='relative text-6xl text-white after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-24 after:-translate-x-2/4 after:bg-white sm:text-7xl lg:text-8xl'>
            Courses
          </h1>
          <p className='text-lg font-bold text-black sm:text-xl lg:text-2xl'>
            We offer full, comprehensive training on the following courses, as
            well as documentation assistance
          </p>
        </div>

        <div className='grid grid-cols-1 px-4 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-4'>
          {COURSES_CARDS.map((card) => (
            <ProductCards
              key={card.id}
              imageParams={card.imageParams}
              title={card.title}
              dropdownContent={card?.dropdownContent}
            >
              {card.content}
            </ProductCards>
          ))}
        </div>
      </section>
    </>
  );
}
