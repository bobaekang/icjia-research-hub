<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 lg6>
        <SearchBar
          ref="searchBar"
          label="Search for datasets"
          :search.sync="search"
        />

        <SearchFilter :items="filters" @updateFilter="filterObj = $event" />

        <SearchInfoExtra
          :contentType="contentType"
          :items="items"
          :filteredItems="filterItems(items)"
          :suggestions="suggestions"
          @useSuggestion="useSuggestion($event)"
        />
      </v-flex>

      <v-flex
        xs12
        sm10
        xl8
        class="mb-3"
        v-for="(item, i) in filterItems(items)"
        :key="i"
      >
        <DatasetItem :item="item" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { applyFilterBox } from '@/services/utils'
import DatasetItem from '@/components/DatasetItem'
import SearchBar from '@/components/SearchBar'
import SearchFilter from '@/components/SearchFilter'
import SearchInfoExtra from '@/components/SearchInfoExtra'

export default {
  components: {
    DatasetItem,
    SearchBar,
    SearchFilter,
    SearchInfoExtra
  },
  props: {
    search: String
  },
  data() {
    return {
      contentType: 'dataset',
      suggestion: '',
      filterObj: {}
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
      const itemsToShow =
        Object.keys(this.filterObj).length !== 0
          ? applyFilterBox(items, this.filters, this.filterObj)
          : items

      return itemsToShow.filter(item => {
        return item.title.toUpperCase().match(s)
      })
    },
    useSuggestion(suggestion) {
      this.search = suggestion
      this.$refs.searchBar.searchInput = suggestion
    }
  }
}
</script>
