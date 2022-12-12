import { defineConfig } from 'vitest/config'

export default defineConfig({
  esbuild: {
    define: {
      __DEV__: 'false',
      __PROD__: 'false',
      __TEST__: 'true'
    }
  }
})
