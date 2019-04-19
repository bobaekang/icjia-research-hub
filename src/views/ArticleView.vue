<template>
  <div>
    <TheProgessBar />

    <RHArticleView v-if="item" :item="item" />
  </div>
</template>

<script>
import client from '@/services/client'
import TheProgessBar from '@/components/TheProgressBar'

export default {
  components: {
    TheProgessBar
  },
  data() {
    return {
      item: null
    }
  },
  async created() {
    const res = await client.getArticleBySlug(this.$route.params.slug)
    this.item = res.data.data.articles[0]
  }
}
</script>
