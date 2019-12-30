import typescript from '@rollup/plugin-typescript'
import json from 'rollup-plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import cjs from '@rollup/plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'
import { rollupConfig } from '@overlayed-app/loadable-element'

/* eslint-env node */

console.warn(
  'Note: Rollup and symlinks/NTFS junctions do not play nice.' +
    " If you're using either of these, switch to the source location" +
    ' before running rollup.'
)

export default {
  input: `./src/index.ts`,
  output: {
    file: `./dist/index.min.js`,
    format: 'esm',
  },
  plugins: [
    typescript({
      ...rollupConfig,
      baseUrl: 'src',
    }),
    json(),
    nodeResolve(),
    cjs(),
    minify(),
  ],
}
