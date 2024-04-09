import { defineConfig } from 'vite';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    VueI18nPlugin({
      runtimeOnly: false,
      include: [path.resolve(__dirname, '@/locales/**')],
    }),
    svgLoader(),
    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: 'src/assets/stylesheets/quasar_variables.scss',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        // silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  base: '/',
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
});
