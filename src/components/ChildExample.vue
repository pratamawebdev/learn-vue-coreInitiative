<template>
  <button @click="handleClick">Agus</button>
  <button @click="handleClick2">Joko</button>
</template>

<script>
export default {
  name: "ChildExample",
  props: {},
  methods: {
    handleClick() {
      this.$emit("sendDataFromChild", "Agus");
    },
    handleClick2() {
      this.$emit("sendDataFromChild", "Joko");
    },
  },
};
</script>
