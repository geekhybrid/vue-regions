import { createApp } from "vue";
import App from "./App.vue";
import { regionManagerPlugin } from "./regionManagerPluggin";

const app = createApp(App);
app.use(regionManagerPlugin)
app.mount("#app");