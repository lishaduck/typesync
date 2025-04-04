import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/{index,cli}.ts'],
  format: 'esm',
  clean: true,
  platform: 'node',
  sourcemap: true,
  skipNodeModulesBundle: true,
  dts: {
    transformer: 'oxc',
    sourceMap: true,
  },
  publint: { strict: true },
  unused: { level: 'error' },
})
