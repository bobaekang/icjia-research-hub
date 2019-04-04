<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <AppItemView v-if="item" :item="item" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import client from '@/services/client'
import AppItemView from '@/components/AppItemView'

export default {
  components: {
    AppItemView
  },
  data() {
    return {
      item: null
    }
  },
  async created() {
    const res = await client.getAppBySlug(this.$route.params.slug)
    this.item = res.data.data.apps[0]
  }
}
</script>
