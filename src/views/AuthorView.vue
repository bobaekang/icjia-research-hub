<template>
  <v-container>
    <v-layout justify-center>
      <v-flex
        xs12
        sm10
        md8
        v-for="(item, i) in view($route.params.slug)"
        :key="i"
      >
        <RHAuthorView :item="item" :getArticleInfo="getArticleInfo" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import client from '@/services/client'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('authors', {
      items: 'data'
    })
  },
  mounted() {
    if (this.$store.state.authors.data.length === 0) {
      this.$store.dispatch('authors/fetchData')
    }
  },
  methods: {
    async getArticleInfo(id) {
      return await client.getArticleInfo(id)
    },
    view(slug) {
      return this.items.filter(item => {
        return item.slug === slug
      })
    }
  }
}
</script>
