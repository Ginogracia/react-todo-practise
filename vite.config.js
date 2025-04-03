import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8888,
    // proxy: {
    //   "/api": {
    //     target: "http://todo-env.eba-asbueigp.eu-north-1.elasticbeanstalk.com",
    //     changeOrigin: true,
    //     secure: false
    //   }
    // }
  },
})
