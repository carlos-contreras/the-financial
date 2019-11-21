import json from 'rollup-plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node',
    footer: '/* follow me on Twitter! @carlos-contreras */'
  },
  plugins: [ json() ]
};