'use client';

import Link from 'next/link';
import { scrollToWithOffset } from '@helpers/indexClientHelpers';

const buttonTypes = {
  link: `justify-center w-full p-4 text-3xl cursor-pointer border-4 border-transparent min-w-40 max-w-60 rounded-xl bg-primary-600 hover:text-primary-200 hover:border-primary-200 hover:border-accent-200 hover:text-accent-500 duration-500 inline-block text-center`,
};

function Button({
  children,
  href,
  type,
  onSubmit,
  onClick,
  customCSS,
  scrollTo,
  isActive,
}) {
  const handleClick = (e) => {
    if (scrollTo) {
      const { targetId, offset = 0 } = scrollTo;

      if (href?.startsWith('#')) {
        e.preventDefault();
        scrollToWithOffset(targetId, offset);
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  return href ? (
    <Link
      href={href}
      className={`${buttonTypes.link} ${customCSS} ${isActive && 'border-primary-600 bg-white !text-primary-600'}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  ) : (
    <button type={type} onSubmit={onSubmit} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
