import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node',
    footer: '/* follow me on Twitter! @carlos-contreras */'
  },
  plugins: [
    json(),
    nodeResolve({
      // the fields to scan in a package.json to determine the entry point
      // if this list contains "browser", overrides specified in "pkg.browser"
      // will be used
      mainFields: ['module', 'main', 'index.js'], // Default: ['module', 'main']
    }),
    commonjs({
      include: 'node_modules/**',
    })
  ]
};