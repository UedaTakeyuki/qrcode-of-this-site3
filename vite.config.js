// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import analyze from "rollup-plugin-analyzer";
import { visualizer } from 'rollup-plugin-visualizer';

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

//
// yarn build --mode analyze
//
// https://zenn.dev/manalink_dev/articles/vite-bundle-analyzer

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      lib: {
        entry: '/src/build-entry.js',
        name: 'qrcode-of-this-site',
        fileName: (format) => `qrcode-of-this-site.${format}.js`,
      },
      rollupOptions: {
        external: ['vue', 'vuetify'],
        output: {
          // Provide global variables to use in the UMD build
          // Add external deps here
          globals: {
            vue: 'Vue',
          },
          plugins: [
            analyze(),
            mode === 'analyze' && visualizer({
              open: true,
              filename: 'dist/stats.html',
              gzipSize: true,
              brotliSize: true,
            }),
          ],
        },
      },
    },
    plugins: [
      vue({ 
        template: { transformAssetUrls }
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      // need comment out to exclude from library
/*      vuetify({
        autoImport: true,
      }),
*/
    ],
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
    server: {
      port: 3000,
    },
  }
})
