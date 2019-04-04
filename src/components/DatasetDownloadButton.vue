<template>
  <div class="text-xs-center">
    <v-dialog persistent v-model="dialog" width="500">
      <v-btn slot="activator" class="mr-0" flat>
        <template>{{ 'Download' }}</template>
        <v-icon>file_download</v-icon>
      </v-btn>

      <v-card>
        <v-card-title class="grey lighten-2">
          <h3>Did you read the metadata?</h3>
        </v-card-title>

        <v-card-text>{{ msgDialog }} </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat class="mr-0" @click="downloadData">
            <template>{{ 'Yes, download' }}</template>
          </v-btn>

          <v-btn flat class="mr-0" @click="dialog = false">Back</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import client from '@/services/client'
import FileSaver from 'file-saver'

export default {
  props: {
    id: String,
    isDataCsv: Boolean
  },
  data() {
    return {
      dialog: false,
      msgDialog:
        'It is important for you to know the context of the dataset you are about to download. Make sure you have read and understand the metatdata shown in this page before using the dataset.'
    }
  },
  methods: {
    async downloadData() {
      const res = await client.getDataById(this.id, this.isDataCsv)
      const dataset = res.data.data.dataset

      if (this.isDataCsv) {
        const blob = new Blob([dataset.datacsv], {
          type: 'text/csv;charset=utf-8'
        })
        FileSaver.saveAs(blob, `${dataset.datafilename}.csv`)
      } else {
        const url = `${this.$store.state.api_url}/${dataset.datafile.url}`
        FileSaver.saveAs(url, dataset.datafile.name)
      }

      this.dialog = false
    }
  }
}
</script>
