<template>
  <v-layout align-end justify-space-between class="section-title">
    <h2>{{ title }}</h2>

    <router-link :to="path" class="normaltext">see more</router-link>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: String,
    path: String
  }
}
</script>

<style scoped>
.normaltext {
  font-family: 'Lato', sans-serif;
  font-size: 0.8em;
}
</style>
