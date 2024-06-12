import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // Use plugin-react-swc
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],  // Initialize the plugin
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.jsx'),
      output: {
        format: 'es',
        assetFileNames: `assets/[name].[ext]`
      },
      external: ['@mui/styles'],

    }
  },
  base: '/wp-content/plugins/paycoin-react/build/'
});
