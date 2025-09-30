import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/", // Use root path for local dev
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});