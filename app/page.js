import LandingBackgroundImage from '@components/LandingBackgroundImage';
import LandingHeading from '@components/LandingHeading';
import LandingSubHeading from '@components/LandingSubHeading';
import Button from '@components/Button';
import ProductCards from './_components/ProductCards';

import { c1Image, cImage, ceImage, cpcImage } from '@/public';

const COURSES_CARDS = [
  {
    id: 1,
    imageParams: {
      product: c1Image,
      alt: 'HGC C1',
    },
    title: 'HGC C1',
    content:
      'Category C1 training covers vehicles heavier than standard vans, like ambulances, delivery trucks, and small HGVs, ideal for roles not needing larger Category C or C+E vehicles.',
  },
  {
    id: 2,
    imageParams: {
      product: cImage,
      alt: 'HGC C',
    },
    title: 'HGC C',
    content:
      'For beginners looking to start their driving career with rigid vehicles over 7.5 tonnes, excluding trailers, as a foundation before progressing to articulated lorries.',
  },
  {
    id: 3,
    imageParams: {
      product: ceImage,
      alt: 'HGC C+E',
    },
    title: 'HGC C+E',
    content:
      'For trainees targeting heavy articulated vehicles, like lorries, and advanced logistics roles. Covers vehicles over 7.5 tonnes with trailers above 750 kg.',
  },
  {
    id: 4,
    imageParams: {
      product: cpcImage,
      alt: 'CPC Courses',
    },
    title: 'CPC Courses',
    content:
      'Mandatory for professional HGV drivers in the UK and EU, this course is essential for meeting legal requirements and includes a combination of theoretical and practical training.',
  },
];

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
        // className='grid h-[2000px] w-full grid-cols-1 grid-rows-[auto,1fr] gap-x-8 gap-y-16 px-4 md:grid-cols-2'
        className='mx-auto flex w-full max-w-[1800px] flex-col gap-x-8 gap-y-16 px-4'
      >
        <div className='mt-[138px] flex h-[calc(100%-138px)] flex-col items-start gap-2 xs:mt-[170px] xs:h-[calc(100%-170px)]'>
          <h1 className='relative inline-block text-white text-7xl after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-24 after:-translate-x-2/4 after:bg-white md:col-span-2 md:text-8xl lg:col-span-3'>
            Courses
          </h1>
          <p className='text-black'>
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
            >
              {card.content}
            </ProductCards>
          ))}
        </div>
      </section>
    </>
  );
}
