import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/3-column-preview-card-component-FEM-solution/",
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
