import { defineConfig } from 'vitest/config'
import TSConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [TSConfigPaths()],
  test: {
    coverage: {
      reportsDirectory: '.coverage'
    }
  },
  esbuild: {
    define: {
      __DEV__: 'false',
      __PROD__: 'false',
      __TEST__: 'true'
    }
  }
})
