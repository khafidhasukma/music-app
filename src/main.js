import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugnin from "./includes/validation";

import "./assets/base.css";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugnin);

app.mount("#app");
