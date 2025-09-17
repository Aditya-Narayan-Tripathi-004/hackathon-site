import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace "hackathon-site" with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/hackathon-site/', 
})
