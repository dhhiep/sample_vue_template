import { createApp } from 'vue';
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Quasar } from 'quasar';
// Import Quasar css
import 'quasar/src/css/index.sass';
import i18n from '@/locales/i18n';
import router from '@/router/router';
import pinia from '@/store';
// Mixins
import object from '@/mixins/object';
// Style Sheets
import '@/assets/font-icons/css/fontello.css';
import '@/assets/stylesheets/animate.css';
import '@/assets/stylesheets/app.scss';
import '@/assets/stylesheets/style.css';
import App from '@/App.vue';

NProgress.configure({ showSpinner: false });

const app = createApp(App).use(router).use(pinia).use(i18n).use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

app.mount('#app');
app.mixin(object);
