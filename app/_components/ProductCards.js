import Image from 'next/image';
import AccordionItem from './AccordionItem';

function ProductCards({ children, imageParams, title }) {
  return (
    <div className='mx-auto flex min-w-64 max-w-sm flex-col gap-6 rounded-md bg-gradient-to-t from-slate-100 from-40% to-white to-100% shadow-2xl'>
      <Image
        src={imageParams.product}
        alt={imageParams.alt}
        className='rounded-t-md bg-gradient-to-t from-white to-transparent'
      />
      <div className='p-6 text-black'>
        {title !== null && <h2 className='text-2xl font-bold'>{title}</h2>}
        <p className='h-64 mt-4 mb-8 text-lg sm:h-44 xl:h-64 2xl:h-44'>
          {children}
        </p>
        <AccordionItem
          title='test'
          content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, obcaecati. Qui iste repudiandae quasi sed! Corrupti, quasi quisquam ut praesentium consequatur, dolores in dignissimos reiciendis sequi aut eveniet ab id inventore eligendi? export default ProductCards;'
        />
      </div>
    </div>
  );
}

export default ProductCards;
