'use client';

import { useState } from 'react';

import AccordionItem from '@components/AccordionItem';

function Accordion({ accordionData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='ml-auto flex w-full max-w-2xl flex-col gap-4 xs:px-4'>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          currentState={openIndex === index}
          stateFunc={() => toggleAccordion(index)}
          type='list'
        />
      ))}
    </div>
  );
}

export default Accordion;
