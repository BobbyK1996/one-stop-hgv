'use client';

import { useEffect, useState } from 'react';

import { IoMdCloseCircle, IoMdMenu } from 'react-icons/io';

import { scrollToWithOffset } from '@helpers/indexClientHelpers';

import { useNavigation } from '@/app/context/navigationContext';

import NavLink from '@components/NavLink';
import Button from './Button';

const links = [
  {
    name: 'Courses',
    address: '#courses',
  },
  {
    name: 'Why Us',
    address: '#whyus',
  },
  {
    name: 'Contact',
    address: '#contact',
  },
];

function Navigation({ type }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { derivedNav, setCurrentNav } = useNavigation();

  const toggleNav = () => setMenuOpen((prev) => !prev);

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
            <ul className='items-center hidden gap-8 text-2xl text-black sm:flex lg:gap-12'>
              {links.slice(0, -1).map((link, index) => {
                return (
                  <NavLink
                    key={index}
                    name={link.name}
                    address={link.address}
                    isActive={derivedNav === link.address}
                    onClick={() => setCurrentNav(link.address)}
                  />
                );
              })}

              <li>
                <Button
                  href='#contact'
                  customCSS='text-white hover:text-primary-600 hover:bg-white hover:border-primary-600 py-2'
                  isActive={derivedNav === '#contact'}
                  onClick={() => setCurrentNav('#contact')}
                >
                  Contact
                </Button>
              </li>
            </ul>

            <div
              onClick={() => setMenuOpen((prev) => !prev)}
              className='relative z-30 text-3xl text-black cursor-pointer select-none sm:hidden'
            >
              {menuOpen ? <IoMdCloseCircle /> : <IoMdMenu />}
            </div>

            <div
              className={`fixed top-[138px] z-20 h-[calc(100%-138px)] w-full backdrop-blur-md duration-500 ease-in-out xs:top-[170px] xs:h-[calc(100%-170px)] ${
                menuOpen
                  ? 'left-0 backdrop-blur-2xl sm:hidden'
                  : 'left-[-100%] p-10'
              }`}
            >
              <ul className='flex flex-col items-center justify-end w-full gap-10 pt-12 pb-4 text-2xl font-bold'>
                <NavLink
                  name='Home'
                  address='/'
                  isActive={derivedNav === '/'}
                  customCSS='py-2 min-w-72'
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      window.location.pathname === '/' &&
                      document.getElementById('home')
                    ) {
                      scrollToWithOffset('home', 170, () => setCurrentNav('/'));
                    } else {
                      setCurrentNav('/');
                    }

                    toggleNav();
                  }}
                />

                {links.map((link, index) => (
                  <NavLink
                    key={index}
                    name={link.name}
                    address={link.address}
                    isActive={derivedNav === link.address}
                    customCSS='py-2 text-2xl min-w-72 text-white'
                    onClick={() => {
                      setCurrentNav(link.address);
                      toggleNav();
                    }}
                  />
                ))}
              </ul>
            </div>
          </>
        )}

        {isFooter && (
          <ul>
            <NavLink
              name='Home'
              address='/'
              isActive={derivedNav === '/'}
              customCSSLink='py-2 !text-left'
              onClick={(e) => {
                e.preventDefault();
                if (
                  window.location.pathname === '/' &&
                  document.getElementById('home')
                ) {
                  scrollToWithOffset('home', 170, () => setCurrentNav('/'));
                } else {
                  setCurrentNav('/');
                }
              }}
              effects={false}
            />
            {/* // onClick={() => setCurrentNav('/')} */}
            {links.map((link, index) => {
              return (
                <NavLink
                  key={index}
                  name={link.name}
                  address={link.address}
                  isActive={derivedNav === link.address}
                  customCSSLink='py-2 !text-left'
                  onClick={() => setCurrentNav(link.address)}
                  effects={false}
                />
              );
            })}
            <NavLink
              name='Terms & Conditions'
              address='termsconditions'
              isActive={derivedNav === '/termsconditions'}
              customCSSLink='py-2 !text-left'
              onClick={() => setCurrentNav('/termsconditions')}
              effects={false}
            />
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navigation;
