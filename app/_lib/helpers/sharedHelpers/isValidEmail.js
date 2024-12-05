import { validateString } from '@helpers/indexShared';

function isValidEmail(email) {
  const isValidString = validateString(
    email,
    'Email',
    'Please provide a valid email address as a string',
  );

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const returnBool =
    email.length <= 256 && emailPattern.test(email) && isValidString;

  return {
    status: returnBool,
    message: returnBool
      ? 'Email is valid'
      : 'Email is invalid. Please ensure that a valid email format is used (e.g. example@gmail.com)',
  };
}

export default isValidEmail;
