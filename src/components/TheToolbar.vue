<template>
  <RHBaseToolbar>
    <template v-slot:toolbarItems>
      <v-btn v-for="view in views" :key="view" :to="`/${view}`" flat>
        <template>{{ view }}</template>
      </v-btn>

      <v-btn :href="docs_url" target="_blank" flat>documentation</v-btn>
    </template>

    <template v-slot:toolbarDrawerItems>
      <v-list-tile v-for="(view, i) in views" :key="i" :to="`/${view}`">
        <v-list-tile-title>{{ view }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile :href="docs_url">
        <v-list-tile-title>documentation</v-list-tile-title>
      </v-list-tile>
    </template>
  </RHBaseToolbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      views: ['about', 'apps', 'articles', 'datasets']
    }
  },
  computed: {
    ...mapState('docs', {
      docs_url: 'url'
    })
  }
}
</script>
