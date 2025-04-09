import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const isDemo = mode === 'demo';
  
  // Base configuration
  const baseConfig = {
    plugins: [
      vue(),
      dts({
        insertTypesEntry: true,
      }),
    ],
  };
  
  // For demo/example mode
  if (isDemo) {
    return {
      ...baseConfig,
      base: '/vue-toasty-notif/', // GitHub Pages repository name
      build: {
        outDir: 'demo-dist',
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, './src'),
        }
      }
    };
  }
  
  // For library build mode
  return {
    ...baseConfig,
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'VueToasty',
        fileName: (format) => `vue-toasty-notif.${format}.js`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  };
});