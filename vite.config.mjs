import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  plugins: [],
  resolve: {
    alias: {
      '@': './src',
    },
  },
  build: {
    outDir: '../dist',
  },
});
