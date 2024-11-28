const spanClass =
  'relative text-primary-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary-600 after:transition-all after:duration-300 after:content-[""] group-hover:after:scale-x-100';

function LandingSubHeading() {
  return (
    <ul className='flex flex-col gap-2 text-2xl font-medium drop-shadow-x-offset xl:text-3xl 2xl:text-4xl 2xl:gap-4'>
      <li className='drop-shadow-x-offset text-glow group'>
        Expert <span className={spanClass}>Training</span>
      </li>
      <li className='drop-shadow-x-offset text-glow group'>
        Flexible <span className={spanClass}>Schedules</span>
      </li>
      <li className='drop-shadow-x-offset text-glow group'>
        Guaranteed <span className={spanClass}>Job Support</span>
      </li>
    </ul>
  );
}

export default LandingSubHeading;
