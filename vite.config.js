import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change this to '/your-repo-name/' if deploying to https://user.github.io/your-repo-name/
  // Using './' makes paths relative, which usually works for simple static deployments.
  base: './',
})