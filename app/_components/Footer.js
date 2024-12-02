import { LOCATION_DETAILS } from '@lib/data';

import CompaniesHouse from './CompaniesHouse';
import Navigation from './Navigation';

function Footer() {
  return (
    <div className='w-full border-t border-primary-900 bg-white text-black shadow-2xl'>
      <div className='mx-auto mt-4 grid h-full w-full max-w-[1800px] grid-cols-[1fr,3fr,1fr] gap-x-2 p-4 md:gap-x-4 xl:px-0'>
        <div className='px-4 text-left'>
          <h1 className='ml-5 pb-4 font-extrabold text-primary-600'>Browse</h1>
          <Navigation type='footer' />
        </div>
        <CompaniesHouse details={LOCATION_DETAILS} />
      </div>
    </div>
  );
}

export default Footer;
