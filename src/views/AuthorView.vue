<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <RHAuthorView
          v-if="item"
          :item="item"
          :getArticleInfo="getArticleInfo"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import client from '@/services/client.articles'
const RHAuthorView = () =>
  import('icjia-research-hub-lib/packages/icjia-research-hub-lib').then(
    lib => lib.AuthorView
  )

export default {
  name: 'AuthorView',
  components: {
    RHAuthorView
  },
  data() {
    return {
      item: null,
      meta: {
        title: 'Authors',
        description: ''
      }
    }
  },
  metaInfo() {
    const title = this.meta.title
    const description = this.meta.description
    return {
      titleTemplate: `${title} | %s`,
      meta: [
        {
          vmid: 'desc-authors',
          name: 'description',
          content: `${description}`
        }
      ]
    }
  },
  async created() {
    if (this.$store.state.authors.data.length === 0) {
      this.$store.dispatch('authors/fetchData')
    }
    const slug = await this.$route.params.slug
    const item = await this.$store.state.authors.data.filter(item => {
      return item.slug === slug
    })

    this.item = item[0]
    this.meta.title = item[0].title
    this.meta.description = item[0].description
  },
  methods: {
    async getArticleInfo(id) {
      return await client.getSingleCard(id)
    }
  }
}
</script>
