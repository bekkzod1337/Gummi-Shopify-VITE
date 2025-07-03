// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default {
  plugins: [
    react({
    jsxRuntime: 'automatic'
  }),
  tailwindcss()
],
  
};

