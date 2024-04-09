import { IUserToken } from '@/types/user';

const KEYS = {
  USER: 'localUser',
};

// STORE LOCAL DATA
export const storeLocalUser = (user: IUserToken): void => {
  setItem(KEYS.USER, user);
};

// LOAD FROM LOCAL DATA
export const loadLocalUser = (): IUserToken => {
  return getItem(KEYS.USER);
};

// CLEAR LOCAL DATA
export const clearLocalUser = (): void => {
  removeItem(KEYS.USER);
};

// PRIVATE
const getItem = (key: string): any => {
  try {
    const dataString = localStorage.getItem(key);

    return dataString ? JSON.parse(dataString) : {};
  } catch {
    return {};
  }
};

const setItem = (key: string, data: any): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};
