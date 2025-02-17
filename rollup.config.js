import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/unformat-money.ts',
  plugins: [
    typescript({
      tsconfig: './tsconfig.rollup.json',
    }),
  ],
  output: [
    // UMD
    {
      file: 'dist/unformat-money-js.umd.js',
      format: 'umd',
      name: 'UnformatMoneyJS',
      sourcemap: true,
    },
    {
      file: 'dist/unformat-money-js.umd.min.js',
      format: 'umd',
      name: 'UnformatMoneyJS',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: 'dist/unformat-money-js.umd.clean.min.js',
      format: 'umd',
      name: 'UnformatMoneyJS',
      sourcemap: false,
      plugins: [
        terser({
          format: {
            comments: false,
          },
        }),
      ],
    },
    // ESM
    {
      file: 'dist/unformat-money-js.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/unformat-money-js.esm.min.js',
      format: 'esm',
      sourcemap: true,
      plugins: [terser()],
    },
    // CommonJS
    {
      file: 'dist/unformat-money-js.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/unformat-money-js.cjs.min.js',
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
    },
  ],
};
