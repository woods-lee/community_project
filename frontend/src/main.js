import { createApp } from "vue";
import { store } from "./stores";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
loadFonts();
import axios from "./plugins/axios";
import axiosInterceptor from "./plugins/interceptor";
axiosInterceptor(store);

const root = createApp(App);
root.use(router);
root.use(vuetify);

root.config.globalProperties.axios = axios;

console.log(import.meta.env);

root.mount("#app");
