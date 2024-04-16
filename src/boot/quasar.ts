import { App } from 'vue';
import { AppFullscreen, Dialog, Loading, LoadingBar, Notify, Quasar } from 'quasar';

const registerQuasar = (app: App<Element>) => {
  app.use(Quasar, {
    plugins: {
      Notify,
      Loading,
      LoadingBar,
      Dialog,
      AppFullscreen,
    },
  });

  LoadingBar.setDefaults({
    color: 'secondary',
  });
};

export default registerQuasar;
