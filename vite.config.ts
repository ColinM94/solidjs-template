import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  esbuild: {
    legalComments: "none",
  },
  css: {
    preprocessorMaxWorkers: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./src/styles/vars.scss";
          `,
      },
    },
  },
});
