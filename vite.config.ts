import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/", // Use root path for organization page


  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});