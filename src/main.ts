import { createApp } from 'vue';
// Import libraries
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
// Import Flowbite
import 'flowbite/dist/flowbite.css';
// Initializers
import registerFlowbite from '@/boot/flowbite';
import registerGlobalComponents from '@/boot/global_components';
import registerMixins from '@/boot/mixin';
import registerQuasar from '@/boot/quasar';
// App configurations
import i18n from '@/locales/i18n';
import router from '@/router/router';
import pinia from '@/store';
// Style Sheets
import '@/assets/stylesheets/animate.css';
import '@/assets/stylesheets/app.scss';
import '@/assets/stylesheets/style.css';
// Components
import App from '@/App.vue';

const app = createApp(App);

// Register initializers
registerGlobalComponents(app);
registerMixins(app);
registerQuasar(app);
registerFlowbite(app);

app.use(router).use(pinia).use(i18n);
app.mount('#app');
