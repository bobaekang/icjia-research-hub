<template>
  <div class="text-xs-center">
    <v-dialog persistent v-model="dialog" width="500">
      <v-btn slot="activator" class="mr-0" flat>
        Download
        <v-icon>file_download</v-icon>
      </v-btn>

      <v-card>
        <v-card-title class="grey lighten-2">
          <h3>Did you read the metadata?</h3>
        </v-card-title>

        <v-card-text>
          It is important for you to know the context of the dataset you are
          about to download. Make sure you have read and understand the
          metatdata shown in this page before using the dataset.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat class="mr-0" @click="downloadData">
            Yes, download
          </v-btn>

          <v-btn flat class="mr-0" @click="dialog = false">
            Back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FileSaver from 'file-saver'

export default {
  props: {
    data: Object,
    name: String,
    type: String
  },
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapGetters({
      base_url: 'api_url'
    })
  },
  methods: {
    async downloadData() {
      if (this.type === 'csv') {
        const blob = new Blob([this.data], { type: 'text/csv;charset=utf-8' })
        FileSaver.saveAs(blob, `${this.name}.csv`)
      } else {
        const url = `${this.base_url}/${this.data}`
        FileSaver.saveAs(url, this.name)
      }

      this.dialog = false
    }
  }
}
</script>
