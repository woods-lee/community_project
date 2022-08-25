import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    server: {
      proxy: {
        "/api": process.env.VITE_API_URL,
      },
    },
    plugins: [vue(), vuetify({ autoImport: true })],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};

// css: {
//   preprocessorOptions: {
//     // global scss
//     scss: {
//       additionalData: `
//         @import "./src/styles/_animations.scss";
//         @import "./src/styles/_variables.scss";
//         @import "./src/styles/_mixins.scss";
//         @import "./src/styles/_helpers.scss";
//       `,
//     },
//   },
// },
