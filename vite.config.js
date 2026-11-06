import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' makes asset paths work on Cloudflare Pages, GitHub Pages and any static host.
export default defineConfig({ plugins: [react()], base: './' })
