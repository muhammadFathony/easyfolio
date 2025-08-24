import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//const basename = process.env.NODE_ENV === 'production' ? '/personal.io/' : '/';
const basename = process.env.NODE_ENV === 'production' ? '/easyfolio/' : '/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basename, // Sesuai nama repository kamu
  build: {
    outDir: 'dist'
  }
})
