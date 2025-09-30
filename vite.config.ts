import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/pr-elhajji/Health-Research-Methodology-guide", // ton repo GitHub
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});