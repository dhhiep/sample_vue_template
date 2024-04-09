import { createI18n } from 'vue-i18n';
import en from '@/locales/en.ts';
import vn from '@/locales/vn.ts';

const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_I18N_LOCALE || 'vn',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'vn',
  messages: {
    en,
    vn,
  },
});

export default i18n;
