import { Poppins } from 'next/font/google';

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
  display: 'swap',
});

export const poppins = poppins_init.variable;
