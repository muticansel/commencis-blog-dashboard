import { fileURLToPath, URL } from "url";
import Pages from "vite-plugin-pages";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";
import path from "path";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Layouts(),
    Pages({
      extensions: ["vue", "md"],
    }),
    WindiCSS(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n", "@vueuse/core"],
      dts: "src/auto-imports.d.ts",
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "locales/**")],
    }),
  ],
  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
    exclude: ["vue-demi"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
