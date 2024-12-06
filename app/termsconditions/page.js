import HeaderAndText from '@components/HeaderAndText';

import { dataArray } from '@lib/data';

function Page() {
  return (
    <section className='relative flex flex-col w-full'>
      <div className='mx-auto mt-[138px] flex h-full max-w-6xl flex-col place-items-start gap-4 gap-y-16 px-2 py-10 xs:mt-[170px]'>
        <h1 className='text-5xl font-bold sm:text-7xl md:text-8xl'>
          Terms <span className='text-primary-300'>& Conditions</span>
        </h1>

        <div className='flex flex-col w-full gap-4 text-lg text-primary-50'>
          {dataArray.map((textItem, index) => (
            <HeaderAndText header={textItem.header} index={index}>
              {textItem.content}
            </HeaderAndText>
          ))}
          <p className='text-sm text-slate-400'>
            [Company Name] is an equal opportunity employer. We celebrate
            diversity and are committed to creating an inclusive environment for
            all employees.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Page;
