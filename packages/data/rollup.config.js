import typescriptPlugin from '@rollup/plugin-typescript';
import yamlPlugin from '@rollup/plugin-yaml';
import dtsPlugin from 'rollup-plugin-dts';

const outputPath = 'dist/index';

const commonInputOptions = {
  input: 'src/index.ts',
  plugins: [yamlPlugin(), typescriptPlugin()],
};

const config = [
  {
    ...commonInputOptions,
    output: [
      {
        file: `${outputPath}.mjs`,
        format: 'esm',
      },
    ],
  },
  {
    ...commonInputOptions,
    output: [
      {
        file: `${outputPath}.cjs`,
        format: 'cjs',
      },
    ],
  },
  {
    ...commonInputOptions,
    plugins: [commonInputOptions.plugins, dtsPlugin()],
    output: [
      {
        file: `${outputPath}.d.ts`,
        format: 'es',
      },
    ],
  },
];

export default config;
