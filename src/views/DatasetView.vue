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
        <DatasetItemView :item="item" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import DatasetItemView from '@/components/DatasetItemView'

export default {
  components: {
    DatasetItemView
  },
  computed: {
    ...mapGetters({
      items: 'datasets'
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
