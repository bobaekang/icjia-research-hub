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
        <AppItemView :item="item" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import AppItemView from '@/components/AppItemView'

export default {
  components: {
    AppItemView
  },
  computed: {
    ...mapState('apps', {
      items: 'data'
    })
  },
  mounted() {
    if (this.$store.state.apps.data.length === 0) {
      this.$store.dispatch('apps/fetchData')
    }
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
