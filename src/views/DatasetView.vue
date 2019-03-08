<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <DatasetItemView v-if="item" :item="item" />
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
      item: null
    }
  },
  async created() {
    const res = await client.getDatasetBySlug(this.$route.params.slug)
    this.item = res.data.data.datasets[0]
  }
}
</script>
