const {
  name,
  version,
  author
} = require('./package.json')

const banner = `
/*!
 * ${name} v${version}
 * (c) ${new Date().getFullYear()} ${author}
 * Released under the MIT License.
 */
`

import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'umd',
  moduleName: name.replace(/(^|-)(\w)/g, (...args) => args[2].toUpperCase()),
  sourceMap: true,
  external: ['jquery', 'vir'],
  globals: {
    jquery: 'jQuery',
    vir: 'Vir'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  banner
}