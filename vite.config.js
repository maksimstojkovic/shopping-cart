import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    watch: true,
    coverage: {
      provider: "v8",
      reporter: ["lcov"],
    },
  },
  base: "/shopping-cart/",
  server: {
    host: true,
  },
  plugins: [react()],
});
