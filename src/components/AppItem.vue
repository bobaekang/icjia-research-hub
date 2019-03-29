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
      <v-layout row wrap>
        <BaseItemTitleDisplay :to="appPath">
          <template>{{ app.title }}</template>
        </BaseItemTitleDisplay>

        <div v-if="app.tags">
          <BaseItemPropChip v-for="tag in app.tags" :key="tag">
            <template>{{ tag }}</template>
          </BaseItemPropChip>
        </div>
      </v-layout>
    </v-card-title>

    <v-container py-0 px-3 class="font-lato small">
      <template v-if="app.contributors">
        <template>{{ 'Contributed by ' }}</template>
        <span v-for="(contributor, i) in app.contributors" :key="i">
          <template v-if="i > 1">{{
            app.contributors.length > i + 1 ? ', ' : ' and '
          }}</template>

          <a :href="contributor.url" target="_blank">
            <template>{{ contributor.title }}</template>
          </a>
        </span>
      </template>

      <template v-else>{{ 'Created by ICJIA R&A staff' }}</template>
    </v-container>

    <v-card-actions>
      <v-spacer></v-spacer>

      <BaseButton :to="appPath" icon="more_horiz">more</BaseButton>
    </v-card-actions>
  </v-card>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseItemPropChip from '@/components/BaseItemPropChip'
import BaseItemTitleDisplay from '@/components/BaseItemTitleDisplay'

export default {
  components: {
    BaseButton,
    BaseItemPropChip,
    BaseItemTitleDisplay
  },
  props: {
    item: Object
  },
  computed: {
    app() {
      return this.item
    },
    appPath() {
      return `/apps/${this.item.slug}`
    }
  }
}
</script>
