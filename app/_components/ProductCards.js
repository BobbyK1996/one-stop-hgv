import Image from 'next/image';

function ProductCards({ children, parameters, title }) {
  return (
    <div className='mx-auto flex min-w-64 max-w-sm flex-col gap-6 rounded-md bg-gradient-to-t from-slate-200 from-40% to-white to-100% shadow-2xl'>
      <Image
        src={parameters.product}
        alt={parameters.alt}
        className='rounded-t-md bg-gradient-to-t from-white to-transparent'
      />
      <div className='p-6 text-black'>
        {title !== null && <h2 className='text-2xl font-bold'>{title}</h2>}
        <p className='mt-4 text-lg'>{children}</p>
      </div>
    </div>
  );
}

export default ProductCards;
