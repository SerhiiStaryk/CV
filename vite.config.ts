import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@shared': path.resolve(import.meta.dirname, './src/shared'),
      '@entities': path.resolve(import.meta.dirname, './src/entities'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@app': path.resolve(import.meta.dirname, './src/app'),
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
});
