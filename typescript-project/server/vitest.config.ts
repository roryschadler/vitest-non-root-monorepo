/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    clearScreen: false,
    test: {
      globals: true,
      watch: false,
      environment: "node",
    },
  };
});
