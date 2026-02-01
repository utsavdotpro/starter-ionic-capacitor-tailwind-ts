import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
    // Match browserslist; Vite 7 default is Chrome 107+, Safari 16+
    target: ["chrome79", "firefox70", "safari14", "edge79"],
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
