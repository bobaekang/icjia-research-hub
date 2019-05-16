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
const RHAppView = () =>
  import('icjia-research-hub-lib/packages/icjia-research-hub-lib').then(
    lib => lib.AppView
  )

export default {
  components: {
    RHAppView
  },
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
