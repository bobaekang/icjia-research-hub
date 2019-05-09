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

export default {
  mixins: [searchMixin],
  data() {
    return {
      item: null
    }
  },
  async created() {
    this.item = await datasetGetters.getSingle(this.$route.params.slug)
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
