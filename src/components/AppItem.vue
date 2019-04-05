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
        <BaseItemTitleDisplay :to="app.slug | path('apps')">
          <template>{{ app.title }}</template>
        </BaseItemTitleDisplay>

        <div v-if="app.tags">
          <BaseItemPropChip v-for="tag in app.tags" :key="tag">
            <template>{{ tag }}</template>
          </BaseItemPropChip>
        </div>
      </v-layout>
    </v-card-title>

    <v-container py-0 px-3>
      <BaseItemPropDisplay name="Contributors">
        <template v-if="app.contributors">
          <span v-for="(contributor, i) in app.contributors" :key="i">
            <template v-if="i > 1">{{
              app.contributors.length > i + 1 ? ', ' : ' and '
            }}</template>

            <a :href="contributor.url" target="_blank">
              <template>{{ contributor.title }}</template>
            </a>
          </span>
        </template>

        <template v-else>{{ 'ICJIA R&A staff' }}</template>
      </BaseItemPropDisplay>

      <BaseItemPropDisplay v-if="app.categories" name="Categories">
        <span v-for="(category, i) in app.categories" :key="i">
          <template v-if="i > 0">{{ ', ' }}</template>
          <template>{{ category | capitalize }}</template>
        </span>
      </BaseItemPropDisplay>
    </v-container>

    <v-card-actions>
      <v-spacer></v-spacer>

      <BaseButton :to="app.slug | path('apps')" icon="more_horiz">
        <template>{{ 'more' }}</template>
      </BaseButton>
    </v-card-actions>
  </v-card>
</template>

<script>
import { allContentMixin } from '@/mixins/contentMixin'
import BaseButton from '@/components/BaseButton'
import BaseItemPropChip from '@/components/BaseItemPropChip'
import BaseItemPropDisplay from '@/components/BaseItemPropDisplay'
import BaseItemTitleDisplay from '@/components/BaseItemTitleDisplay'

export default {
  mixins: [allContentMixin],
  components: {
    BaseButton,
    BaseItemPropChip,
    BaseItemPropDisplay,
    BaseItemTitleDisplay
  },
  props: {
    item: Object
  },
  computed: {
    app() {
      return this.item
    }
  }
}
</script>
