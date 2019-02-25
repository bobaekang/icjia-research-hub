<template>
  <div>
    <TheViewTitle :title="title" />

    <router-view search="" />
  </div>
</template>

<script>
import TheViewTitle from '@/components/TheViewTitle'

export default {
  name: 'article',
  components: {
    TheViewTitle
  },
  data() {
    return {
      title: 'Articles'
    }
  }
}
</script>
