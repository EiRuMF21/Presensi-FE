import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Port frontend
    proxy: {
      "/api": {
        target: "https://api-smart.curaweda.com", 
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
