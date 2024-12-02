import LandingBackgroundImage from '@components/LandingBackgroundImage';
import LandingHeading from '@components/LandingHeading';
import LandingSubHeading from '@components/LandingSubHeading';
import Button from '@components/Button';
import ProductCards from '@components/ProductCards';
import Accordion from '@components/Accordion';
import ContactDetails from '@components/ContactDetails';
import ContactForm from '@components/ContactForm';

import { COURSES_CARDS, WHY_CHOOSE_ACCORDION, CONTACT_DATA } from '@lib/data';

export default function Page() {
  return (
    <>
      <LandingBackgroundImage />

      <section
        className='md:-text-xl z-10 h-screen max-h-[1000px] min-h-[667px] w-fit max-w-7xl gap-4 border-2 border-transparent lg:my-auto 2xl:max-h-[1400px]'
        id='home'
      >
        <div className='mt-[138px] flex flex-col gap-10 border-green-600 px-4 py-10 xs:mt-[170px] md:px-10 md:py-20 lg:px-20 lg:py-28 xl:px-28 xl:py-40'>
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

        <div className='grid grid-cols-1 gap-x-8 gap-y-16 px-4 md:grid-cols-2 xl:grid-cols-4'>
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

      <section
        className='mx-auto my-32 grid w-full max-w-[1800px] grid-cols-1 gap-x-8 gap-y-10 px-4 md:grid-cols-2 md:gap-y-20'
        id='whyus'
      >
        <span className='mt-[138px] flex items-center text-center xs:mt-[170px] md:col-span-2 md:px-8 lg:px-12 xl:px-4 2xl:items-start 2xl:px-6'>
          <h1 className='relative text-6xl text-white after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-24 after:-translate-x-2/4 after:bg-white sm:text-7xl lg:text-8xl'>
            Why Choose One Stop HGV?
          </h1>
        </span>
        <div className='space-y-10 xs:pl-4'>
          <p className='text-lg font-bold text-black sm:text-xl lg:text-2xl'>
            Obtaining your HGV licence opens the door to a dynamic and
            high-demand career with impressive earning potential. With many
            drivers in the UK earning over £50,000 annually, it’s no surprise
            that the logistics industry offers a stable and rewarding future.
            Whether you're just beginning to research or you're ready to start
            training, we’re here to help every step of the way.
          </p>
          <p className='text-lg font-bold text-white sm:text-xl lg:text-2xl'>
            At One Stop HGV, we make the process as smooth and stress-free as
            possible, focusing on the administrative side while you concentrate
            on your training
          </p>
        </div>
        <Accordion accordionData={WHY_CHOOSE_ACCORDION} />
      </section>

      <section
        className='mx-auto flex max-w-[1800px] flex-col gap-6 px-4 md:flex-row md:items-center'
        id='contact'
      >
        <div className='mb-4 mt-[138px] flex flex-col gap-16 pl-4 xs:mt-[170px] md:mb-16'>
          <div>
            <h1 className='text-5xl lg:text-6xl 2xl:text-7xl'>
              Want to find out more?
            </h1>
            <p className='mt-6 text-xl font-bold text-black lg:text-2xl'>
              Call or email us and we'll be happy to answer all of your
              questions.
            </p>
            <p className='mt-6 text-xl font-bold text-black lg:text-2xl'>
              Alternatively, submit our form and one of our agents will be in
              touch shortly
            </p>
          </div>
          <ContactDetails contact={CONTACT_DATA} />
        </div>
        <div className='mb-16 w-full max-w-xl px-4 pl-6 sm:ml-2 md:mb-0 md:ml-auto'>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
