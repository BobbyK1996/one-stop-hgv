function validateString(value, name, notes = '') {
  if (value !== undefined && (value === null || typeof value !== 'string')) {
    throw new Error(`${name} must be a string. ${notes}. Current: ${value}`);
  }

  return typeof value === 'string' && value.trim().length > 0;
}

export default validateString;
