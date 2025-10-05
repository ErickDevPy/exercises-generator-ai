import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 0,
    hookTimeout: 0,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
  resolve: { alias: { '~/': '/src/' } }
})