import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'figma-asset-plugin',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
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
    outDir: 'build',
    sourcemap: false,
    emptyOutDir: true,
  },
});
