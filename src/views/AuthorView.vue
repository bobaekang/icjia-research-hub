<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <RHAuthorView :item="item" :getArticleInfo="getArticleInfo" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { articleGetters } from '@/services/client'
const RHAuthorView = () =>
  import('icjia-research-hub-lib/packages/icjia-research-hub-lib').then(
    lib => lib.AuthorView
  )

export default {
  components: {
    RHAuthorView
  },
  data() {
    return {
      item: null
    }
  },
  created() {
    if (this.$store.state.authors.data.length === 0) {
      this.$store.dispatch('authors/fetchData')
    }
    const slug = this.$route.params.slug
    const item = this.$store.state.authors.data.filter(item => {
      return item.slug === slug
    })

    this.item = item[0]
  },
  methods: {
    async getArticleInfo(id) {
      return await articleGetters.getSingleCard(id)
    }
  }
}
</script>
