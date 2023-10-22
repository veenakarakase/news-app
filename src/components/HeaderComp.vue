<template>
  <header class="header-background">
    <h2 class="center-text">{{ title }}</h2>
  </header>
</template>
<script>
export default {
  name: "HeaderComp",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.center-text {
  text-align: center;
  color: azure;
}
.header-background {
  background-color: #2e87c3;
  padding: 5px;
  align-items: center;
  justify-content: center;
  width: auto;
}
</style>
