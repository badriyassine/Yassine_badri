import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Disable CSP for development to avoid eval() issues
    headers: {
      "Content-Security-Policy":
        "script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https:; object-src 'none';",
    },
  },
  preview: {
    // SPA fallback for production preview
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
          icons: [
            "react-icons/fa",
            "react-icons/si",
            "react-icons/md",
            "react-icons/vsc",
          ],
        },
      },
    },
    // Disable automatic preloading of assets
    assetsInlineLimit: 0,
    // Enable minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
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
    // Pre-bundling is enabled by default in Vite 5.1+
  },
});
