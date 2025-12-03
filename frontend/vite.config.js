import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment (repository name)
  base: '/lunaria_beauty/',
  server: {
    port: 3000,
    // Proxy is removed - using deployed backend URL directly
    // To use local backend, set VITE_API_BASE_URL=http://localhost:5001 in .env file
  }
})

