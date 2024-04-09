import isEmpty from 'lodash/isEmpty';
import isNumber from 'lodash/isNumber';

export const presence = <T>(value: T): T | null => {
  if (isBlank(value)) return null;

  return value;
};

export const isPresent = <T>(value: T): boolean => {
  return !isBlank(value);
};

export const isBlank = (value: any): boolean => {
  if (isNumber(value) || value === true) {
    return false;
  }
  if (Object.prototype.toString.call(value) === '[object Date]') {
    return false;
  }
  return isEmpty(value);
};
