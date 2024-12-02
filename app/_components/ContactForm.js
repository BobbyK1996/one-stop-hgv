'use client';

import ReCAPTCHA from 'react-google-recaptcha';

const formItemStyles =
  'block w-full p-3 text-white duration-700 ease-in-out border-gray-300 rounded-sm shadow-sm hover:bg-primary-500 placeholder-slate-400 hover:placeholder-white focus:outline-none active:color-slate-500';

function Contactform() {
  const handleChange = () => {
    console.log('change form');
  };

  const handleFocus = () => {
    console.log('focus form');
  };

  const handleSubmit = () => {
    console.log('submit form');
  };

  return (
    <form className='w-full space-y-4 text-gray-700' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name' className='hidden'></label>
        <input
          type='text'
          id='name'
          name='name'
          required
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder='Full Name'
          aria-label='Full Name'
          autoComplete='name'
          className={`${formItemStyles}`}
        />
      </div>

      <div>
        <label htmlFor='email' className='hidden'></label>
        <input
          type='email'
          id='email'
          name='email'
          required
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder='Email'
          aria-label='Email'
          autoComplete='email'
          className={`${formItemStyles}`}
        />
      </div>

      <div>
        <label htmlFor='message' className='hidden'></label>
        <textarea
          id='message'
          name='message'
          required
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder='Message'
          aria-label='Message'
          className={`${formItemStyles}`}
        />
      </div>

      <div>
        <ReCAPTCHA key='recaptcha-compact' sitekey={'dsfsdgffgfdgdfg'} />
      </div>

      <div className='flex items-center justify-start gap-6'>
        <button
          type='submit'
          className='rounded bg-primary-400 px-4 py-2 text-white sm:px-6 sm:py-4'
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Contactform;
