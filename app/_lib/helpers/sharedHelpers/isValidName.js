import { validateString } from '@helpers/indexShared';

function isValidName(name) {
  const isValidString = validateString(name, 'Name');

  const namePattern = /^[a-zA-Z\s'-]+$/;

  const returnBool =
    !(name.length < 3 || name.length > 100) &&
    namePattern.test(name) &&
    isValidString;

  return {
    status: returnBool,
    message: returnBool
      ? 'Name is valid'
      : 'Name is invalid. Please ensure that name is between 3 and 100 characters long',
  };
}

export default isValidName;
