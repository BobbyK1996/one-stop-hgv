import { LOCATION_DETAILS, SOCIALS_DATA } from '@lib/data';

import CompaniesHouse from './CompaniesHouse';
import Navigation from './Navigation';
import Socials from './Socials';

function Footer() {
  return (
    <div className='w-full border-t border-primary-900 bg-white text-black shadow-2xl'>
      <div className='mx-auto mt-4 grid h-full w-full max-w-[1800px] grid-cols-2 gap-x-2 gap-y-4 p-4 sm:grid-cols-[1fr,3fr,1fr] md:gap-x-4 xl:px-0'>
        <div className='order-1 px-4 text-left'>
          <h1 className='ml-5 pb-4 font-extrabold text-primary-600'>Browse</h1>
          <Navigation type='footer' />
        </div>

        <div className='order-3 col-span-2 sm:order-2 sm:col-span-1'>
          <CompaniesHouse details={LOCATION_DETAILS} />
        </div>

        <div className='order-2 text-center sm:order-3'>
          <h1 className='pb-4 font-extrabold text-primary-500'>Socials</h1>
          <Socials socials={SOCIALS_DATA} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
