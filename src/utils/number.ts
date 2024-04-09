import numeral from 'numeral';
import { isBlank } from '@/utils/lang.js';

export const randomId = (): string => {
  return '_' + Math.random().toString(36).substring(2, 11);
};

export const numberWithDelimiter = (number: string | number) => {
  if (isBlank(number) || isNaN(number as number)) return 'N/A';

  return `${numeral(number).format('0,0')}`;
};
