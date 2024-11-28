import Link from 'next/link';

const buttonTypes = {
  link: 'justify-center w-full p-4 text-3xl cursor-pointer border-2 border-transparent min-w-40 max-w-60 rounded-xl bg-primary-600 hover:text-primary-200 hover:border-primary-200 hover:border-accent-200 hover:text-accent-500 duration-500 inline-block text-center',
};

function Button({ children, href, type, onSubmit, onClick, customCSS }) {
  return href ? (
    <Link href={href} className={`${buttonTypes.link} ${customCSS}`}>
      {children}
    </Link>
  ) : (
    <button type={type} onSubmit={onSubmit} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
