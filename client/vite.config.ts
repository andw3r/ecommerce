import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { URL, fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: "http://localhost:5000/",
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
        {
          find: "@assets",
          replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
        },
      ],
    },
  });
};
