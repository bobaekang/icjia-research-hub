<template>
  <v-card class="ma-3">
    <v-img
      height="200px"
      :src="app.image"
      lazy-src="https://via.placeholder.com/1/DDDDDD"
    >
      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="grey lighten-3" />
      </v-layout>
    </v-img>

    <v-card-title primary-title>
      <BaseItemTitleDisplay :to="getAppPath(app.slug)">
        {{ app.title }}
      </BaseItemTitleDisplay>
    </v-card-title>

    <v-container py-0 px-3 class="font-lato small">
      <template v-if="app.contributors">
        Contributed by
        <span v-for="(contributor, i) in app.contributors" :key="i">
          <a :href="contributor.url" target="_blank">
            {{ contributor.title }}
          </a>
        </span>
      </template>

      <template v-else>
        Created by ICJIA R&A staff
      </template>
    </v-container>

    <v-card-actions>
      <v-spacer></v-spacer>

      <BaseButton :href="app.url" icon="play_arrow">
        launch
      </BaseButton>

      <BaseButton :to="getAppPath(app.slug)" icon="more_horiz">
        more
      </BaseButton>
    </v-card-actions>
  </v-card>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseItemTitleDisplay from '@/components/BaseItemTitleDisplay'

export default {
  components: {
    BaseButton,
    BaseItemTitleDisplay
  },
  props: {
    item: Object
  },
  computed: {
    app() {
      return this.item
    }
  },
  methods: {
    getAppPath(slug) {
      return `/apps/${slug}`
    }
  }
}
</script>
