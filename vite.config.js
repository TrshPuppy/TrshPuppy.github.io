import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["./src/assets/*.png", "./src/assets/*.gif"],
  base: "./",
  plugins: [preact()],
});
