import '@/app/_styles/globals.css';

import { poppins } from '@lib/fonts';

import { NavigationProvider } from '@/app/context/navigationContext';

import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata = {
  title: { template: '%s - Road Ready HGV', default: 'Road Ready HGV' },
  description:
    'Road Ready HGV offers comprehensive HGV training services, helping you gain the skills and qualifications needed to start or advance your career in heavy goods vehicle driving. With experienced instructors, flexible training options, and a commitment to your success, we make becoming a certified HGV driver easy and accessible.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    url: 'https://www.roadreadyhgv.com/',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
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
