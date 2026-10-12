import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Class names stay kebab-case in CSS (as in the Blazor source)
      // and are read as camelCase in TSX: .resin-title -> styles.resinTitle
      localsConvention: 'camelCaseOnly',
    },
  },
});
