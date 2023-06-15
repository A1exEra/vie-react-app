import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  test: {
    includeSource: ["src/**/*.{js,ts,jsx,tsx}"],
    // coverage: {
    //   reporter: ["text", "html"],
    // },
  },
  plugins: [react()],
  server: { port: 3000 },
});
