import CallPrompt from '@components/CallPrompt';
import Logo from '@components/Logo';
import Navigation from '@components/Navigation';

function Header() {
  return (
    <header className='xs:gap-2 fixed z-20 flex w-full flex-col'>
      <div className='absolute -z-10 h-10 w-full backdrop-blur-sm'></div>
      <CallPrompt />
      <div className='xs:px-5 xs:py-5 mx-auto flex w-full items-center justify-between bg-white p-2 md:px-10'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
