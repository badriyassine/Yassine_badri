import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Disable CSP for development to avoid eval() issues
    // headers: {
    //   "Content-Security-Policy": "script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https:; object-src 'none';",
    // },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  define: {
    // Ensure Vite can use eval in development
    global: "globalThis",
  },
  esbuild: {
    // Allow eval in development
    target: "esnext",
  },
  optimizeDeps: {
    // Disable pre-bundling to avoid eval issues
    disabled: false,
  },
});
