<template>
  <div>
    <TheProgessBar />

    <RHArticleView
      v-if="item"
      :item="item"
      @tag-click="useSearchTerm($event)"
    />

    <ArticleSocialSharing
      v-if="item && baseUrl"
      :url="baseUrl + item.slug"
      :title="item.title"
    />
  </div>
</template>

<script>
import { articleGetters } from '@/services/client'
import { searchMixin } from '@/mixins/contentMixin'
const ArticleSocialSharing = () => import('@/components/ArticleSocialSharing')
const TheProgessBar = () => import('@/components/TheProgressBar')

export default {
  name: 'ArticleView',
  components: {
    ArticleSocialSharing,
    TheProgessBar
  },
  mixins: [searchMixin],
  data() {
    return {
      item: null,
      baseUrl: ''
    }
  },
  async created() {
    this.item = await articleGetters.getSingle(this.$route.params.slug)
    this.baseUrl = await window.location.origin
  }
}
</script>
