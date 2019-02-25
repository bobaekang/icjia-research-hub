<template>
  <v-btn flat class="mr-0" @click="downloadData(data)">
    Download
    <v-icon>file_download</v-icon>
  </v-btn>
</template>

<script>
import { mapGetters } from 'vuex'
import FileSaver from 'file-saver'

export default {
  props: {
    data: Object
  },
  computed: {
    ...mapGetters({
      base_url: 'api_url'
    })
  },
  methods: {
    async downloadData(data) {
      FileSaver.saveAs(`${this.base_url}/${data.url}`, data.name)
    }
  }
}
</script>
