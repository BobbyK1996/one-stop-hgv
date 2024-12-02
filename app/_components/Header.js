import CallPrompt from '@components/CallPrompt';
import Logo from '@components/Logo';
import Navigation from '@components/Navigation';

function Header() {
  return (
    <header className='fixed z-20 flex w-full flex-col shadow-2xl xs:gap-2'>
      <div className='absolute -z-10 h-10 w-full backdrop-blur-sm'></div>
      <CallPrompt />
      <div className='mx-auto flex w-full items-center justify-between bg-white p-2 xs:px-5 xs:py-5 md:px-10'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
