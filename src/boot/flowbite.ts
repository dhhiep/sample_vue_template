import { App } from 'vue';
import * as FlowbiteVue from 'flowbite-vue';

const registerFlowbite = (app: App<Element>) => {
  // Register all Flowbite components globally
  Object.entries(FlowbiteVue).forEach(([name, component]) => {
    if (name.startsWith('Fwb')) {
      app.component(name, component);
    }
  });

  // Initialize flowbite JavaScript features
  import('flowbite');
};

export default registerFlowbite;
