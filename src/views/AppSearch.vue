<template>
  <v-container class="pb-5">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 lg6>
        <v-layout row wrap>
          <v-flex xs12 :class="hasExternal ? 'sm10' : ''">
            <SearchBar
              ref="searchBar"
              label="Search for apps (by title, contributors, categories, tags)"
              :search.sync="localSearch"
            />
          </v-flex>

          <v-flex v-if="hasExternal" xs12 sm2>
            <v-switch
              v-model="icjiaOnly"
              label="ICJIA only"
              class="ml-4 font-lato"
            />
          </v-flex>
        </v-layout>

        <SearchInfoExtra
          :contentType="contentType"
          :items="items"
          :filteredItems="filteredItems"
          :suggestions="suggestions"
          @search-suggestion="useLocalSearchTerm($event)"
        />
      </v-flex>

      <v-flex xs12 sm10 xl8>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm6 lg4 v-for="(item, i) in filteredItems" :key="i">
            <RHAppCard :item="item" @tag-click="useSearchTerm($event)" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import {
  filterMixin,
  localSearchMixin,
  searchMixin
} from '@/mixins/contentMixin'
import SearchBar from '@/components/SearchBar'
import SearchInfoExtra from '@/components/SearchInfoExtra'

export default {
  components: {
    SearchBar,
    SearchInfoExtra
  },
  mixins: [filterMixin, localSearchMixin, searchMixin],
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
    filteredItems() {
      return this.filterItems(this.items, this.localSearch, (item, s) => {
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
    }
  },
  mounted() {
    if (this.$store.state.apps.data.length === 0) {
      this.$store.dispatch('apps/fetchInfo')
    }
  }
}
</script>
