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
        <AuthorItemView :item="item" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import AuthorItemView from '@/components/AuthorItemView'

export default {
  components: {
    AuthorItemView
  },
  computed: {
    ...mapGetters({
      items: 'authors'
    })
  },
  methods: {
    view(slug) {
      return this.items.filter(item => {
        return item.slug === slug
      })
    }
  }
}
</script>
