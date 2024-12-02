'use client';

import { useState } from 'react';

import { IoIosArrowDropdownCircle } from 'react-icons/io';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prevState) => !prevState);

  return (
    <div className='text-3xl text-white border border-gray-300 rounded-md'>
      {/* Header */}
      <button
        className={`flex h-full w-full items-center justify-center gap-x-10 bg-primary-600 p-4 text-left font-medium hover:bg-gray-200 ${!isOpen ? 'rounded-md' : 'rounded-t-md'}`}
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <IoIosArrowDropdownCircle />
        </span>
      </button>

      {/* Content */}
      {isOpen && (
        <div className='p-4 text-lg bg-off-white text-slate-600'>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
