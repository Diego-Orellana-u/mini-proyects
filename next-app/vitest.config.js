import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "happy-dom",
    globals: true,
    include: ["**/*.test.{js,jsx,ts,tsx}"],
    setupFiles: ["./test/setup.ts"],
    css: true,
  },
});
