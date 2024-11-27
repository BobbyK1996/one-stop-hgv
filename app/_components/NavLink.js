import Link from 'next/link';

function NavLink({ name, address, isActive, onClick, customCSS }) {
  const targetUrl = address.startsWith('#') ? `/${address}` : address;

  return (
    <li
      className={`relative flex transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:transform before:bg-primary-600 before:transition-all before:duration-300 before:content-[""] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:transform after:bg-primary-600 after:transition-all after:duration-300 after:content-[""] hover:text-white hover:before:translate-y-full hover:before:opacity-100 hover:after:-translate-y-full hover:after:opacity-100 ${!isActive ? 'text-black before:-translate-y-6 before:opacity-0 after:translate-y-6 after:opacity-0' : 'text-white before:translate-y-full before:opacity-100 after:-translate-y-full after:opacity-100'} ${customCSS}`}
    >
      <Link
        href={targetUrl}
        className={`relative z-10 inline-block w-full p-5 text-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:scale-0 before:bg-primary-600 before:transition-transform before:duration-300 before:content-[""] hover:before:scale-x-100 hover:before:scale-y-[65%] ${isActive && 'before:scale-x-100 before:scale-y-[65%]'}`}
        // onClick={() => onClick(address)}
        onClick={onClick}
      >
        {name}
      </Link>
    </li>
  );
}

export default NavLink;
