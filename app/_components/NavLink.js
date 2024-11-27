import Link from 'next/link';

function NavLink({ name, address, isActive, customCSS }) {
  return (
    <li
      className={`before:bg-primary-600 after:bg-primary-600 relative flex transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:transform before:transition-all before:duration-300 before:content-[""] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:transform after:transition-all after:duration-300 after:content-[""] hover:text-white hover:before:translate-y-full hover:before:opacity-100 hover:after:-translate-y-full hover:after:opacity-100 ${!isActive ? 'text-black before:-translate-y-6 before:opacity-0 after:translate-y-6 after:opacity-0' : 'text-white before:translate-y-full before:opacity-100 after:-translate-y-full after:opacity-100'} ${customCSS}`}
    >
      {address[0] === '#' ? (
        <>
          <a
            href={address}
            className={`before:bg-primary-600 relative z-10 inline-block w-full p-5 text-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:scale-0 before:transition-transform before:duration-300 before:content-[""] hover:before:scale-x-100 hover:before:scale-y-[65%] ${isActive && 'before:scale-x-100 before:scale-y-[65%]'}`}
          >
            {name}
          </a>
        </>
      ) : (
        <Link
          href={address}
          className={`before:bg-primary-600 relative z-10 inline-block w-full p-5 text-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:scale-0 before:transition-transform before:duration-300 before:content-[""] hover:before:scale-x-100 hover:before:scale-y-[65%] ${isActive && 'before:scale-x-100 before:scale-y-[65%]'}`}
        >
          {name}
        </Link>
      )}
    </li>
  );
}

export default NavLink;
