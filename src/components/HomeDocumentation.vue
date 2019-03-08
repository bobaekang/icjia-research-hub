<template>
  <BaseSection :title="title" :href="url">
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <v-layout row wrap>
          <v-flex xs12 sm4 v-for="(item, i) in items" :key="i">
            <v-container class="pb-0">
              <h3>{{ item.title.toUpperCase() }}</h3>
              <p class="resource-item">{{ item.body }}</p>
            </v-container>

            <v-layout justify-end>
              <v-btn :href="item.url" target="_blank" flat>open</v-btn>
            </v-layout>

            <v-divider class="hidden-sm-and-up" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </BaseSection>
</template>

<script>
import { mapState } from 'vuex'
import BaseSection from '@/components/BaseSection'

export default {
  components: {
    BaseSection
  },
  data() {
    return {
      title: 'documentation',
      items: [
        {
          title: 'User Guide',
          body:
            'New to the Research Hub? Read to find out more about navigating the Research Hub like a pro.',
          url: 'https://'
        },
        {
          title: 'API Documentation',
          body:
            'Learn how to use the Research Hub API to obtain data, analyze them, and develop awesome applications.',
          url: 'https://'
        },
        {
          title: 'Contributing Guidelines',
          body:
            'Need help! Find out how to make contributions to the Research Hub and have your work recognized.',
          url: 'https://'
        }
      ]
    }
  },
  computed: {
    ...mapState('docs', {
      url: 'url'
    })
  }
}
</script>

<style scoped>
.docs-item {
  font-size: 1.2em;
}
</style>
