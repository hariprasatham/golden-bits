import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagetools({
      // Enable WebP and AVIF generation, set quality/size limits
      formats: ['webp', 'avif'],
      widths: [640, 1280],
      quality: 80,
    }),],
})
