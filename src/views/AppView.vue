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
      item: null,
      meta: {
        title: 'Apps',
        description: ''
      }
    }
  },
  metaInfo() {
    const title = this.meta.title
    const description = this.meta.description
    return {
      titleTemplate: `${title} | %s`,
      meta: [
        {
          vmid: 'desc-apps',
          name: 'description',
          content: description
        }
      ]
    }
  },
  async created() {
    const item = await appGetters.getSingle(this.$route.params.slug)
    this.item = item
    this.meta.title = item.title
    this.meta.description = item.description
  }
}
</script>
