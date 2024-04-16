import type { IUser } from '@/types/user';
import { loadLocalUser } from '@/utils/local_storage';
import { backendAPI } from '@/services/base_api';

export const login = (user: IUser): Promise<any> => {
  return new Promise((resolve, reject) => {
    const options = { isJonApi: false };
    return backendAPI('POST', 'auth/token', user, {}, null, options)
      .then((resp) => {
        const data = resp.status == 201 ? resp.data : {};
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const auth = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const userData = loadLocalUser();
    const options = { isJonApi: false };
    if (!userData || !userData.token) reject({});

    return backendAPI('POST', 'auth/token/refresh', {}, {}, null, options)
      .then((resp) => {
        const data = resp.status == 200 ? resp.data : {};
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const forgotPassword = (user: IUser): Promise<any> => {
  return new Promise((resolve, reject) => {
    const params = {
      ...user,
      confirmationPassword: user.password,
    };
    const options = { isJonApi: false };
    return backendAPI('POST', 'reset_password', params, {}, null, options)
      .then((resp) => {
        const data = resp.status == 201 ? resp.data : {};
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const resetPassword = (user: IUser): Promise<any> => {
  return new Promise((resolve, reject) => {
    const params = {
      ...user,
      confirmationPassword: user.password,
    };
    const options = { isJonApi: false };
    return backendAPI('POST', 'reset_password', params, {}, null, options)
      .then((resp) => {
        const data = resp.status == 200 ? resp.data : {};
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
