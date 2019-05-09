<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <RHAppView
          v-if="item"
          :item="item"
          @tag-click="useSearchTerm($event)"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { appGetters } from '@/services/client'
import { searchMixin } from '@/mixins/contentMixin'

export default {
  mixins: [searchMixin],
  data() {
    return {
      item: null
    }
  },
  async created() {
    this.item = await appGetters.getSingle(this.$route.params.slug)
  }
}
</script>
