<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <RHDatasetView
          v-if="item"
          :item="item"
          :downloadData="downloadData"
          @tag-click="useSearchTerm($event)"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { datasetGetters } from '@/services/client'
import FileSaver from 'file-saver'
import { searchMixin } from '@/mixins/contentMixin'
const RHDatasetView = () =>
  import('icjia-research-hub-lib/packages/icjia-research-hub-lib').then(
    lib => lib.DatasetView
  )

export default {
  name: 'DatasetView',
  components: {
    RHDatasetView
  },
  mixins: [searchMixin],
  data() {
    return {
      item: null,
      meta: {
        title: 'Datasets',
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
          vmid: 'desc-datasets',
          name: 'description',
          content: `${description}`
        }
      ]
    }
  },
  async created() {
    const item = await datasetGetters.getSingle(this.$route.params.slug)
    this.item = item
    this.meta.title = item.title
    this.meta.description = item.description
  },
  methods: {
    async downloadData(id, isDataCsv) {
      const res = await datasetGetters.getData(id, isDataCsv)

      if (isDataCsv) {
        const blob = new Blob([res.datacsv], {
          type: 'text/csv;charset=utf-8'
        })
        FileSaver.saveAs(blob, `${res.datafilename}.csv`)
      } else {
        const url = `${this.$store.state.api_url}/${res.datafile.url}`
        FileSaver.saveAs(url, res.datafile.name)
      }
    }
  }
}
</script>
