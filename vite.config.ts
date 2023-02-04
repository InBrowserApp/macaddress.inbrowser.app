import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: [
        "favicon.ico",
        "favicon-dark.ico",
        "favicon.svg",
        "apple-touch-icon.png",
        "masked-icon.svg",
        "data/cid/cid.csv",
        "data/iab/iab.csv",
        "data/oui/oui.csv",
        "data/oui28/mam.csv",
        "data/oui36/oui36.csv",
      ],
      manifest: {
        name: "MAC Address InBrowser.App",
        short_name: "MAC Address",
        description:
          "MAC Address InBrowser.App is an offline-capable PWA for MAC Address. Fully runs in your browser. Zero API latency.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
