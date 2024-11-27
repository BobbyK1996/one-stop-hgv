'use client';

import { useEffect, useState } from 'react';

import NavLink from '@components/NavLink';

import { IoMdCloseCircle, IoMdMenu } from 'react-icons/io';

const links = [
  {
    name: 'Courses',
    address: '#courses',
  },
  {
    name: 'Why Us',
    address: '#whyus',
  },
];

function Navigation({ type }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  const isFooter = type === 'footer';

  return (
    <>
      <nav>
        {!isFooter && (
          <>
            <ul className='hidden items-center gap-8 text-xl text-black sm:flex lg:gap-12'>
              {links.map((link, index) => {
                return (
                  <NavLink
                    key={index}
                    name={link.name}
                    address={link.address}
                    isActive={false}
                  />
                );
              })}
            </ul>

            <div
              onClick={() => setMenuOpen((prev) => !prev)}
              className='relative z-30 cursor-pointer select-none text-3xl text-black sm:hidden'
            >
              {menuOpen ? <IoMdCloseCircle /> : <IoMdMenu />}
            </div>

            <div
              className={`xs:h-[calc(100%-170px)] xs:top-[170px] fixed top-[138px] z-20 h-[calc(100%-138px)] w-full backdrop-blur-md duration-500 ease-in-out ${
                menuOpen
                  ? 'backdrop-blur-gradient left-0 sm:hidden'
                  : 'left-[-100%] p-10'
              }`}
            >
              <ul className='flex w-full flex-col items-center justify-end gap-10 pb-4 pt-12'>
                <NavLink
                  name='Home'
                  address='/'
                  isActive={false}
                  customCSS='py-2 text-2xl min-w-72 text-white'
                />

                {links.map((link, index) => (
                  <NavLink
                    key={index}
                    name={link.name}
                    address={link.address}
                    isActive={false}
                    customCSS='py-2 text-2xl min-w-72 text-white'
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default Navigation;
