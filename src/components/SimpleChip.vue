<template>
  <v-chip
    disabled
    small
    text-color="#333"
    style="font-family: 'Lato', sans-serif;"
    >{{ name }}</v-chip
  >
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>
