<template>
  <div>
    <TheProgessBar />

    <ArticleItemView v-if="item" :item="item" />
  </div>
</template>

<script>
import client from '@/services/client'
import ArticleItemView from '@/components/ArticleItemView'
import TheProgessBar from '@/components/TheProgressBar'

export default {
  components: {
    ArticleItemView,
    TheProgessBar
  },
  data() {
    return {
      item: null
    }
  },
  async mounted() {
    const res = client.getArticleBySlug(this.$route.params.slug)
    this.item = res.data.data.articles[0]
  }
}
</script>
