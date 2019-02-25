<template>
  <div>
    <TheViewTitle :title="title" />

    <router-view />
  </div>
</template>

<script>
import TheViewTitle from '@/components/TheViewTitle'

export default {
  name: 'author',
  components: {
    TheViewTitle
  },
  data() {
    return {
      title: 'Authors'
    }
  }
}
</script>
