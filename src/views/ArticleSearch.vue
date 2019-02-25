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

        <TheItemCounter :count="filterItems(items).length" :item="item" />

        <SearchSuggestion
          :showSuggestion="filterItems(items).length === 0"
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
import { mapGetters } from 'vuex'
import { applyFilterBox } from '../utils'
import ArticleItem from '../components/ArticleItem'
import SearchBar from '../components/SearchBar'
import SearchFilter from '../components/SearchFilter'
import SearchSuggestion from '../components/SearchSuggestion'
import TheItemCounter from '../components/TheItemCounter'

export default {
  components: {
    ArticleItem,
    SearchBar,
    SearchFilter,
    SearchSuggestion,
    TheItemCounter
  },
  props: {
    search: String
  },
  data() {
    return {
      // search: '',
      item: 'article',
      filterObj: {}
    }
  },
  computed: {
    ...mapGetters({
      items: 'articles',
      filters: 'articleFilters',
      suggestions: 'articleSuggestions'
    })
  },
  created() {
    this.$store.dispatch('createArticleFilters')
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
        // item.authors.join('').toUpperCase().match(s);
      })
    },
    useSuggestion(suggestion) {
      this.search = suggestion
      this.$refs.searchBar.searchInput = suggestion
    }
  }
}
</script>
