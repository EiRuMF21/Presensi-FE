// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Port frontend
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Port backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
