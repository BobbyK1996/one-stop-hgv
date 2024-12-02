import Image from 'next/image';

import AccordionItem from '@components/AccordionItem';

function ProductCards({ children, imageParams, title, dropdownContent }) {
  return (
    <div className='mx-auto flex max-h-fit min-w-64 max-w-sm flex-col gap-6 rounded-md bg-gradient-to-t from-slate-100 from-40% to-white to-100% shadow-2xl'>
      <Image
        src={imageParams.product}
        alt={imageParams.alt}
        className='rounded-t-md bg-gradient-to-t from-white to-transparent'
      />
      <div className='p-6 text-black'>
        {title !== null && <h2 className='text-2xl font-bold'>{title}</h2>}
        <p className='mb-8 mt-4 h-64 text-lg sm:h-44 xl:h-64 2xl:h-44'>
          {children}
        </p>
        <AccordionItem
          title='Show more'
          content={dropdownContent}
          type='card'
        />
      </div>
    </div>
  );
}

export default ProductCards;
