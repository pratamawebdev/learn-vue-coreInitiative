<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" :text="data" />
  <Home />
  <ButtonIncrease />
  <ButtonDecrease />
  <h1>{{ person }}</h1>
  <ChildExample @sendDataFromChild="getDataFromChild"></ChildExample>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ButtonDecrease from "./components/ButtonDecrease.vue";
import ChildExample from "@/components/ChildExample.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ButtonDecrease,
    ChildExample,
  },
  data() {
    return {
      data: "agus",
      person: "Name",
    };
  },
  methods: {
    getDataFromChild(data) {
      this.person = data;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
