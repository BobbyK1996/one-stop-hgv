function Bulletpoints({ bulletpoints }) {
  return (
    <ul className='pl-5'>
      {bulletpoints.map((bulletpoint, index) => (
        <li key={index} className='relative my-2 before:absolute before:-left-6 before:top-6 before:h-1 before:w-4 before:-rotate-45 before:bg-slate-600 before:content-[""] after:absolute after:-left-6 after:top-4 after:h-1 after:w-4 after:rotate-45 after:bg-slate-600 after:content-[""]'>
          {bulletpoint}
        </li>
      ))}
    </ul>
  );
}

export default Bulletpoints;
