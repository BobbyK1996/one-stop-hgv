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
  isActive,
}) {
  const targetUrl = href.startsWith('#') ? `/${href}` : href;

  const handleClick = (e) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        return;
      }

      e.preventDefault();
      const targetId = href.substring(1);
      scrollToWithOffset(targetId, 170, onClick);
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  return href ? (
    <Link
      href={targetUrl}
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
