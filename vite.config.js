import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // replace 'repository-name' with your actual repo name
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        // This is a fix to ensure assets and relative paths work correctly on GitHub Pages
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})
