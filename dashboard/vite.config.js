import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'CalcNote',
        short_name: 'CN',
        description: 'My React PWA App',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/cnSmall.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/cnBig.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})