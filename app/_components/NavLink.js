import Link from 'next/link';

import { scrollToWithOffset } from '@helpers/indexClientHelpers';

function NavLink({
  name,
  address,
  isActive,
  onClick,
  customCSSLi,
  customCSSLink,
  effects = true,
}) {
  const handleClick = (e) => {
    if (address.startsWith('#')) {
      if (window.location.pathname !== '/') {
        return;
      }

      e.preventDefault();
      const targetId = address.substring(1);
      scrollToWithOffset(targetId, 170, onClick);
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  const targetUrl = address.startsWith('#') ? `/${address}` : address;

  const beforeAfterClasses = effects
    ? 'before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:transform before:bg-primary-600 before:transition-all before:duration-300 before:content-[""] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:transform after:bg-primary-600 after:transition-all after:duration-300 after:content-[""] hover:before:translate-y-full hover:before:opacity-100 hover:after:-translate-y-full hover:after:opacity-100'
    : '';

  const textClasses = effects
    ? isActive
      ? 'text-white before:translate-y-full before:opacity-100 after:-translate-y-full after:opacity-100'
      : 'text-black before:-translate-y-6 before:opacity-0 after:translate-y-6 after:opacity-0'
    : isActive
      ? 'text-primary-600'
      : 'text-black';

  const hoverTextClasses = effects
    ? 'hover:text-white'
    : 'hover:text-primary-600';

  const linkBeforeClasses = effects
    ? 'before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:scale-0 before:bg-primary-600 before:transition-transform before:duration-300 before:content-[""]'
    : '';

  return (
    <li
      className={`relative flex transition-all duration-300 ${beforeAfterClasses} ${textClasses} ${hoverTextClasses} ${customCSSLi}`}
    >
      <Link
        href={targetUrl}
        className={`relative z-10 inline-block w-full p-5 text-center ${linkBeforeClasses} hover:before:scale-x-100 hover:before:scale-y-[65%] ${isActive && 'before:scale-x-100 before:scale-y-[65%]'} ${customCSSLink}`}
        onClick={handleClick}
      >
        {name}
      </Link>
    </li>
  );
}

export default NavLink;
