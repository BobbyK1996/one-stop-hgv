function Socials({ socials }) {
  return (
    <div className='mx-auto grid max-w-48 grid-cols-1 grid-rows-2 text-4xl sm:grid-cols-2 md:grid-rows-1 md:gap-y-2 lg:grid-cols-2'>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target={social.newTab ? '_blank' : null}
          rel={social.newTab ? 'noopener noreferrer' : null}
          className='duration-200 hover:text-primary-600 [&>*]:mx-auto'
        >
          {social.logo}
        </a>
      ))}
    </div>
  );
}

export default Socials;
