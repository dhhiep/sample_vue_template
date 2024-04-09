import { defineStore } from 'pinia';
import type { IUser, IUserToken } from '@/types/user';
import { isPresent } from '@/utils/lang';
import { clearLocalUser, loadLocalUser, storeLocalUser } from '@/utils/local_storage';
import * as AuthService from '@/services/auth';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLocalUserRestored: false as boolean,
    currentUser: undefined as IUserToken | undefined,
  }),
  getters: {
    isSignedIn(state) {
      return isPresent(state.currentUser) && isPresent(state.currentUser?.token);
    },
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
  actions: {
    setCurrentUser(user: IUserToken) {
      this.currentUser = user;
      storeLocalUser(user);
    },
    clearCurrentUser() {
      this.currentUser = undefined;
      clearLocalUser();
    },
    login(userData: IUser) {
      return new Promise((resolve, reject) => {
        return AuthService.login(userData)
          .then((user: IUserToken) => {
            if (!user || !user.token) throw user;
            this.setCurrentUser(user);
            resolve(user);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    restoreLocalUser() {
      return new Promise((resolve, reject) => {
        if (this.isLocalUserRestored) return resolve({});

        const user = loadLocalUser();
        if (user && user.token) {
          this.setCurrentUser(user);
          this.isLocalUserRestored = true;
          resolve(user);
        } else {
          this.clearCurrentUser();
          reject({});
        }
      });
    },
    verifyUserToken() {
      // Double check user token is still valid
      return new Promise((resolve, reject) => {
        return AuthService.auth()
          .then((user: IUserToken) => {
            if (!user || !user.token) throw user;
            this.setCurrentUser(user);
            resolve(user);
          })
          .catch((error) => {
            this.clearCurrentUser();
            reject(error);
          });
      });
    },
    logout() {
      this.clearCurrentUser();
    },
    resetPassword(userData: IUser) {
      return AuthService.resetPassword(userData);
    },
  },
});
