import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@Components": "/src/components",
      "@Assets": "/src/assets",
      "@views": "/src/views",
    },
  },
});
