import { isBlank } from '@/utils/lang';

export const truncate = (str: string, len: number): string => {
  if (isBlank(str) || str.length <= len) return str;

  return str.slice(0, len) + '...';
};
