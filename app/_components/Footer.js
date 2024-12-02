import Navigation from './Navigation';

function Footer() {
  return (
    <div className='w-full border-t border-primary-900 shadow-2xl'>
      <div className='grid-rows-[1fr, auto] mx-auto grid h-full w-full max-w-7xl grid-cols-[1fr,0.5fr,2fr] gap-x-2 bg-white p-4 md:grid-cols-[0.5fr,0.5fr,0.75fr] md:gap-x-4 lg:grid-cols-[1fr,0.3fr,0.5fr,1fr] xl:px-0'>
        <Navigation type='footer' />
      </div>
    </div>
  );
}

export default Footer;
