import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: false,  // Ta bort .map filer
    preprocessorOptions: {
      scss: {
        sourceMap: false   // Ta bort source maps
      }
    }
  }
})