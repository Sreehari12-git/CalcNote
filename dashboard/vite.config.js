import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    port: 4173,
    strictPort: true,
    allowedHosts: [
      'waggle-survive-babble.ngrok-free.dev'
    ]
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globIgnores: ['firebase-messaging-sw.js'],
      },
      manifest: {
        name: 'CalcNote',
        short_name: 'CNote',
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