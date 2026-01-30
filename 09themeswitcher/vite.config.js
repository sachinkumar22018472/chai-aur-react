import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


//dark mode property enable krna padta hai 2 basis pr hoti hai class aaur media.

darkMode: "class"



export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})