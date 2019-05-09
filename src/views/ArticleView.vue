<template>
  <div>
    <TheProgessBar />

    <RHArticleView
      v-if="item"
      :item="item"
      @tag-click="useSearchTerm($event)"
    />
  </div>
</template>

<script>
import client from '@/services/client'
import { searchMixin } from '@/mixins/contentMixin'
import TheProgessBar from '@/components/TheProgressBar'

export default {
  components: {
    TheProgessBar
  },
  mixins: [searchMixin],
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
