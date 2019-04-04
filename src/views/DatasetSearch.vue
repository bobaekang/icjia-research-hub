<template>
  <v-container class="pb-5">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 lg6>
        <SearchBar
          ref="searchBar"
          label="Search for datasets (by title, date, sources, categories, tags)"
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
          <v-flex xs12 xl6 v-for="(item, i) in filterItems(items)" :key="i">
            <DatasetItem :item="item" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DatasetItem from '@/components/DatasetItem'
import SearchBar from '@/components/SearchBar'
import SearchInfoExtra from '@/components/SearchInfoExtra'

export default {
  components: {
    DatasetItem,
    SearchBar,
    SearchInfoExtra
  },
  props: {
    search: String
  },
  data() {
    return {
      contentType: 'dataset'
    }
  },
  computed: {
    ...mapState('datasets', {
      items: 'info',
      suggestions: 'suggestions'
    }),
    ...mapGetters('datasets', {
      filters: 'filters'
    })
  },
  mounted() {
    if (this.$store.state.datasets.info.length === 0) {
      this.$store.dispatch('datasets/fetchInfo')
    }
  },
  methods: {
    filterItems(items) {
      const s = this.search.toUpperCase()

      return items.filter(item => {
        return (
          item.title.toUpperCase().match(s) ||
          item.date.match(s) ||
          item.sources
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
