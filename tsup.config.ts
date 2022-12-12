import { defineConfig } from 'tsup'

export default defineConfig(({ env }) => {
  return {
    dts: true,
    outDir: 'dist',
    splitting: false,
    format: ['esm', 'cjs'],
    ignoreWatch: ['libs'],
    entryPoints: ['src/index.ts'],
    define: {
      __DEV__: (env?.NODE_ENV === 'development') + '',
      __TEST__: 'false'
    }
  }
})
