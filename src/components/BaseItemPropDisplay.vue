<template>
  <div class="py-1 font-lato small">
    <span class="bold pr-2">{{ name }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>
