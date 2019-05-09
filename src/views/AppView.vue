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
import client from '@/services/client'
import { searchMixin } from '@/mixins/contentMixin'

export default {
  mixins: [searchMixin],
  data() {
    return {
      item: null
    }
  },
  async created() {
    const res = await client.getAppBySlug(this.$route.params.slug)
    this.item = res.data.data.apps[0]
  }
}
</script>
