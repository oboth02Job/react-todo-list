import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set a string for the base path (must be quoted). Use '/' for development
  // or '/react-todo-app/' if deploying to a subpath.
  base: "/react-todo-list",
});
