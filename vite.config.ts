import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// NOTE: `base` must match how the site is served on GitHub Pages.
// This is the user site (jSwAggy01.github.io) + any future custom domain, both
// served at the root, so base is "/". (A project repo would use "/<repo>/".)
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    // Auto-open the browser at the base path (http://localhost:5173/portfolio/)
    // so `npm run dev` lands on the page directly instead of a blank root.
    open: true,
  },
});
