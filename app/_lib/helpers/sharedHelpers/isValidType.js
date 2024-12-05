import { validateString } from '@helpers/indexShared';

function isValidType(type, validTypes = []) {
  if (!Array.isArray(validTypes))
    throw new Error('validTypes must be an array');

  const isValidString = validateString(type, 'Dropdown type');

  return validTypes.includes(type) && isValidString;
}

export default isValidType;
