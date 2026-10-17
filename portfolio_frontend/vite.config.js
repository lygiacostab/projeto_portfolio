import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Em desenvolvimento, chamadas para /api são encaminhadas ao back-end Node.js.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
