import dts from 'rollup-plugin-dts'

const config = [
  {
    input: './dist/tsc/index.d.ts',
    output: [{ file: 'dist/rollup/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]

export default config
