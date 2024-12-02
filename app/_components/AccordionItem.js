'use client';

import { useState } from 'react';

import { IoIosArrowDropdownCircle } from 'react-icons/io';

function AccordionItem({ title, content, currentState, stateFunc, type }) {
  const [isOpen, setIsOpen] =
    currentState !== undefined && stateFunc !== undefined
      ? [currentState, stateFunc]
      : useState(false);

  const accordionTypes = {
    card: `flex w-full h-full items-center justify-center gap-x-4 p-4 font-medium text-xl sm:text-2xl 2xl:text-3xl bg-primary-600 hover:bg-gray-200 transition-colors duration-200 hover:bg-primary-400 ${!isOpen ? 'rounded-md' : 'rounded-t-md'}`,
    list: `flex w-full items-center justify-center gap-x-4 px-8 py-10 font-medium text-xl sm:text-2xl 2xl:text-3xl text-primary-600 transition-colors duration-200 hover:bg-primary-400 ${!isOpen ? 'rounded-md' : 'rounded-t-md'} bg-white`,
  };

  const toggleAccordion = () => setIsOpen((prevState) => !prevState);

  return (
    <div className='rounded-md text-3xl text-white'>
      <button className={`${accordionTypes[type]}`} onClick={toggleAccordion}>
        <div className='text-left'>{title}</div>
        <span
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <IoIosArrowDropdownCircle />
        </span>
      </button>

      {isOpen && (
        <div className='rounded-b-md bg-off-white p-4 text-lg text-slate-600'>
          <span>{content}</span>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
