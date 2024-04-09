import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    isFirstRun: true as boolean,
  }),
  actions: {
    setFirstRun(isFirstRunParam: boolean): void {
      this.isFirstRun = isFirstRunParam;
    },
  },
});
