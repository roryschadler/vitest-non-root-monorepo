/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    clearScreen: false,
    test: {
      globals: true,
      watch: false,
      environment: "happy-dom",
      setupFiles: resolve(__dirname, "./tests/setupTests.ts"),
    },
  };
});
