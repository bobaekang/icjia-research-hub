<template>
  <h3>
    <router-link :to="to">
      <slot></slot>
    </router-link>
  </h3>
</template>

<script>
export default {
  props: {
    to: String
  }
}
</script>
