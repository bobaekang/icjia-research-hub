<template>
  <div>
    <TheProgessBar />

    <ArticleItemView :item="item" />
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
      item: {}
    }
  },
  mounted() {
    client.getArticleBySlug(this.$route.params.slug).then(res => {
      this.item = res.data.data.articles[0]
    })
  }
}
</script>
