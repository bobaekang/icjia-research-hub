<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 lg6>
        <SearchBar
          ref="searchBar"
          label="Search for apps (by title, contributors, categories, tags)"
          :search.sync="search"
        />

        <SearchInfoExtra
          :contentType="contentType"
          :items="items"
          :filteredItems="filterItems(items)"
          :suggestions="suggestions"
          @useSuggestion="useSuggestion($event)"
        />
      </v-flex>

      <v-flex xs12 sm10 xl8>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm6 lg4 v-for="(item, i) in filterItems(items)" :key="i">
            <AppItem :item="item" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import AppItem from '@/components/AppItem'
import SearchBar from '@/components/SearchBar'
import SearchInfoExtra from '@/components/SearchInfoExtra'

export default {
  components: {
    AppItem,
    SearchBar,
    SearchInfoExtra
  },
  props: {
    search: String
  },
  data() {
    return {
      contentType: 'app'
    }
  },
  computed: {
    ...mapState('apps', {
      items: 'data',
      suggestions: 'suggestions'
    }),
    itemsLoaded() {
      return this.items.length > 0
    }
  },
  mounted() {
    if (this.$store.state.apps.data.length === 0) {
      this.$store.dispatch('apps/fetchData')
    }
  },
  methods: {
    filterItems(items) {
      const s = this.search.toUpperCase()

      return items.filter(item => {
        return (
          item.title.toUpperCase().match(s) ||
          item.contributors
            .map(el => el.title)
            .join('')
            .toUpperCase()
            .match(s) ||
          item.categories
            .join('')
            .toUpperCase()
            .match(s) ||
          item.tags
            .join('')
            .toUpperCase()
            .match(s)
        )
      })
    },
    useSuggestion(suggestion) {
      this.search = suggestion
      this.$refs.searchBar.searchInput = suggestion
    }
  }
}
</script>
