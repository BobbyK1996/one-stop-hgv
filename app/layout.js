import '@/app/_styles/globals.css';

import { poppins } from '@lib/fonts';

import { NavigationProvider } from '@/app/context/navigationContext';

import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata = {
  title: { template: '%s: One Stop HGV', default: 'One Stop HGV' },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <link
        rel='preload'
        href='https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJLucHtA.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <body
        className={`${poppins} relative -z-10 min-h-screen w-full overflow-x-hidden bg-primary-600 font-poppins text-white`}
      >
        <NavigationProvider>
          <Header />
          {children}
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
