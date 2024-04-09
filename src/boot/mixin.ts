import { App } from 'vue';
import object from '@/mixins/object';

const registerMixins = (app: App<Element>) => {
  app.mixin(object);
};

export default registerMixins;
