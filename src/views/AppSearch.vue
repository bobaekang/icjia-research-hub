<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 lg6>
        <SearchBar
          ref="searchBar"
          label="Search for apps"
          :search.sync="search"
        />

        <TheItemCounter
          :count="filterItems(items).length"
          :contentType="contenetType"
        />

        <SearchSuggestion
          :showSuggestion="filterItems(items).length === 0"
          :suggestions="suggestions"
          @useSuggestion="useSuggestion($event)"
        />
      </v-flex>

      <v-flex xs12 sm10 xl8>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm6 lg4 v-for="(item, i) in filterItems(items)" :key="i">
            <AppItem :item="item" :simple="isSimpleCard" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import AppItem from '@/components/AppItem'
import TheItemCounter from '@/components/TheItemCounter'
import SearchBar from '@/components/SearchBar'
import SearchSuggestion from '@/components/SearchSuggestion'

export default {
  components: {
    AppItem,
    SearchBar,
    SearchSuggestion,
    TheItemCounter
  },
  props: {
    search: String
  },
  data() {
    return {
      title: 'Applications',
      contenetType: 'app',
      isSimpleCard: false
    }
  },
  computed: {
    ...mapState('apps', {
      items: 'data',
      suggestions: 'suggestions'
    })
  },
  mounted() {
    console.log(this.search)
    if (this.$store.state.apps.data.length === 0) {
      this.$store.dispatch('apps/fetchData')
    }
  },
  methods: {
    filterItems(items) {
      const s = this.search.toUpperCase()

      return items.filter(item => {
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
