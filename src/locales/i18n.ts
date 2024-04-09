import { createI18n } from 'vue-i18n';
import en from '@/locales/en.ts';
import vi from '@/locales/vi.ts';

const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_I18N_LOCALE ?? 'en',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE ?? 'en',
  messages: {
    en,
    vi,
  },
});

export default i18n;
