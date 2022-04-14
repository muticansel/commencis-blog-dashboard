import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";
import { customColors } from "./src/common/constants/style/colors";
export default defineConfig({
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  theme: {
    extend: {
      colors: customColors,
    },
  },
  plugins: [formsPlugin],
});
