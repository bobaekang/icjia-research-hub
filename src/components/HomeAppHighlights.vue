<template>
  <BaseSection :title="title" :home="true" :to="to">
    <v-container pt-0>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md4 lg3 v-for="(item, i) in items" :key="i">
          <AppItem :item="item" />
        </v-flex>
      </v-layout>
    </v-container>
  </BaseSection>
</template>

<script>
import { mapGetters } from 'vuex'
import AppItem from '@/components/AppItem'
import BaseSection from '@/components/BaseSection'

export default {
  components: {
    AppItem,
    BaseSection
  },
  data() {
    return {
      title: 'app highlights',
      to: 'apps'
    }
  },
  computed: {
    ...mapGetters('apps', {
      items: 'highlights'
    })
  },
  created() {
    if (this.$store.state.apps.data.length === 0) {
      this.$store.dispatch('apps/fetchInfo')
    }
  }
}
</script>
