import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import * as path from "path";

export default defineConfig({
  plugins: [solid()],
  esbuild: {
    legalComments: "none",
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      layouts: path.resolve(__dirname, "src/layouts"),
      pages: path.resolve(__dirname, "src/pages"),
      styles: path.resolve(__dirname, "src/styles"),
      utils: path.resolve(__dirname, "src/utils"),
    },
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
