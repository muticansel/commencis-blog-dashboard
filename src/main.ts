import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
/* TODO: add this modules to a seperate folder(pinia,i18n) */
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager("../locales/*.y(a)?ml")).map(
    ([key, value]) => {
      const yaml = key.endsWith(".yaml");
      return [key.slice(11, yaml ? -5 : -4), value.default];
    }
  )
);
console.log(import.meta.globEager("../locales/*.y(a)?ml"));

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
});

import "virtual:windi.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount("#app");
