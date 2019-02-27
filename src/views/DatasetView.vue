<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <DatasetItemView :item="item" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import client from '@/services/client'
import DatasetItemView from '@/components/DatasetItemView'

export default {
  components: {
    DatasetItemView
  },
  data() {
    return {
      item: {}
    }
  },
  mounted() {
    client.getDatasetBySlug(this.$route.params.slug).then(res => {
      this.item = res.data.data.datasets[0]
    })
  }
}
</script>
