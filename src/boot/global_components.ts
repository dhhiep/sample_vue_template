import { App } from 'vue';
import { Field, Form } from 'vee-validate';

const registerGlobalComponents = (app: App<Element>) => {
  app.component('VeeForm', Form);
  app.component('VeeField', Field);
};

export default registerGlobalComponents;
