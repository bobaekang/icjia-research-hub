<template>
  <div class="text-xs-center pb-2 font-lato">
    {{ count }} {{ contentType }}s found
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    contentType: String
  }
}
</script>
