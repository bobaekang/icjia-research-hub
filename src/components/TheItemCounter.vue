<template>
  <div class="text-xs-center pb-2 font-lato">{{ count }} {{ item }}s found</div>
</template>

<script>
export default {
  props: {
    count: Number,
    item: String
  }
}
</script>
