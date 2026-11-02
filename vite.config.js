import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the built site work on any host (Netlify, Vercel, GitHub Pages sub-folders).
export default defineConfig({
  plugins: [react()],
  base: './',
})
