import { validateString } from '@helpers/indexShared';

function isValidMessage(message) {
  const isValidString = validateString(message, 'Message');

  const returnBool =
    !(message.length < 10 || message.length > 1000) && isValidString;

  return {
    status: returnBool,
    message: returnBool
      ? 'Message is valid'
      : 'Message is invalid. Please ensure that the message is between 10 and 1000 characters long',
  };
}

export default isValidMessage;
