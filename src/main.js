import { createApp } from "vue";
import App from "./App.vue";
import ButtonIncrease from "@/components/ButtonIncrease.vue";

const app = createApp(App);

app.component("ButtonIncrease", ButtonIncrease);

app.mount("#app");
