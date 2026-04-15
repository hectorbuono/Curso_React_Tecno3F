import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Buscamos la Key en el archivo .env
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'https://royaleapi.dev',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
          headers: {
            // Vite pega la Key aquí, el navegador no la ve
            'Authorization': `Bearer ${env.VITE_CLASH_ROYALE_API_KEY}`,
            'Accept': 'application/json'
          }
        }
      }
    }
  }
})
