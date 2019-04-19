<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <RHDatasetView v-if="item" :item="item" :downloadData="downloadData" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import client from '@/services/client'
import FileSaver from 'file-saver'

export default {
  data() {
    return {
      item: null
    }
  },
  async created() {
    const res = await client.getDatasetBySlug(this.$route.params.slug)
    this.item = res.data.data.datasets[0]
  },
  methods: {
    async downloadData(id, isDataCsv) {
      const res = await client.getDataById(id, isDataCsv)
      const dataset = res.data.data.dataset

      if (isDataCsv) {
        const blob = new Blob([dataset.datacsv], {
          type: 'text/csv;charset=utf-8'
        })
        FileSaver.saveAs(blob, `${dataset.datafilename}.csv`)
      } else {
        const url = `${this.$store.state.api_url}/${dataset.datafile.url}`
        FileSaver.saveAs(url, dataset.datafile.name)
      }
    }
  }
}
</script>
