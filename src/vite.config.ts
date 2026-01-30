import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'figma-asset-plugin',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          // Return the id with a null character to mark it as external but handled
          return '\0' + id;
        }
      },
      load(id) {
        if (id.startsWith('\0figma:asset/')) {
          // Return a tiny transparent placeholder image as base64
          const placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
          return `export default "${placeholder}";`;
        }
      },
    },
  ],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
  },
});