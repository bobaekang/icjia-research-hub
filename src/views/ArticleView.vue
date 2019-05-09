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
import { articleGetters } from '@/services/client'
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
    this.item = await articleGetters.getSingle(this.$route.params.slug)
  }
}
</script>
