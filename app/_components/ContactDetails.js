import { IoPhonePortrait, IoMail, IoLocationSharp } from 'react-icons/io5';

const containerClassMain =
  'flex duration-200 text-start hover:text-primary-500 gap-x-2';
const iconClassMain = 'w-auto text-5xl text-black grow-0 shrink-0';
const anchorClassMain = 'flex items-center text-2xl';

function ContactDetails({
  contact: { address, addressLink, email, phoneNumber },
}) {
  return (
    <div className='flex flex-col gap-3 break-words'>
      <div className={containerClassMain}>
        <IoPhonePortrait className={iconClassMain} />
        <a href={`tel:${phoneNumber}`} className={anchorClassMain}>
          {phoneNumber}
        </a>
      </div>

      <div className={containerClassMain}>
        <IoMail className={iconClassMain} />
        <a href={`mailto:${email}`} className={anchorClassMain}>
          {email}
        </a>
      </div>

      <div className={containerClassMain}>
        <IoLocationSharp className={iconClassMain} />
        <a
          href={addressLink}
          target='_blank'
          rel='noopener noreferrer'
          className={anchorClassMain}
        >
          {address}
        </a>
      </div>
    </div>
  );
}

export default ContactDetails;
