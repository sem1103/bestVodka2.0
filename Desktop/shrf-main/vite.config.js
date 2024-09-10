import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({})=>{
  const baseUrl=process.env.VITE_API_BASE_URL;
  return {
    plugins: [react()],
    server:{
      port:8080
    },
    define:{
      'process.env.VITE_API_BASE_URL':JSON.stringify(baseUrl)
    }
  }
})