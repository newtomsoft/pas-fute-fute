import { keys } from 'lodash-es';
import YAMLPlugin from 'unplugin-yaml/vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { dependencies } from './package.json';

export default defineConfig({
  plugins: [
    YAMLPlugin(),
    dts({
      rollupTypes: true,
      include: ['src/index.ts', 'src/quotes.yaml', 'src/types.d.ts'],
    }),
  ],
  build: {
    rollupOptions: {
      external: keys(dependencies),
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: format => ({ es: 'index.mjs', cjs: 'index.cjs' }[format]),
    },
  },
});
