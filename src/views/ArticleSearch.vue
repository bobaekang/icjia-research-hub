<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 lg6>
        <SearchBar
          ref="searchBar"
          label="Search for articles (by title, date)"
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
        <ArticleItem :item="item" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { applyFilterBox } from '@/services/utils'
import ArticleItem from '@/components/ArticleItem'
import SearchBar from '@/components/SearchBar'
import SearchFilter from '@/components/SearchFilter'
import SearchInfoExtra from '@/components/SearchInfoExtra'

export default {
  components: {
    ArticleItem,
    SearchBar,
    SearchFilter,
    SearchInfoExtra
  },
  props: {
    search: String
  },
  data() {
    return {
      // search: '',
      contentType: 'article',
      filterObj: {}
    }
  },
  computed: {
    ...mapState('articles', {
      items: 'info',
      suggestions: 'suggestions'
    }),
    ...mapGetters('articles', {
      filters: 'filters'
    })
  },
  mounted() {
    if (this.$store.state.articles.info.length === 0) {
      this.$store.dispatch('articles/fetchInfo')
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
        return item.title.toUpperCase().match(s) || item.date.match(s)
      })
    },
    useSuggestion(suggestion) {
      this.search = suggestion
      this.$refs.searchBar.searchInput = suggestion
    }
  }
}
</script>
