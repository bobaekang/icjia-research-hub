<template>
  <v-card>
    <v-card-title primary-title>
      <v-layout row wrap>
        <BaseItemTitleDisplay :to="datasetPath">
          <template>{{ dataset.title }}</template>
        </BaseItemTitleDisplay>

        <div v-if="dataset.tags">
          <BaseItemPropChip v-for="tag in dataset.tags" :key="tag">
            <template>{{ tag }}</template>
          </BaseItemPropChip>
        </div>
      </v-layout>
    </v-card-title>

    <v-divider />

    <v-container class="py-2">
      <BaseItemPropDisplay name="Updated">
        <template>{{ dataset.date | formatDate }}</template>
      </BaseItemPropDisplay>

      <BaseItemPropDisplay v-if="dataset.sources" name="Sources">
        <span v-for="(source, i) in dataset.sources" :key="i">
          <template v-if="i > 0">{{
            dataset.sources.length > i + 1 ? ', ' : ' and '
          }}</template>

          <a v-if="source.url" :href="source.url" target="_blank">
            <template>{{ source.title }}</template>
          </a>

          <template v-else>{{ source.title }}</template>
        </span>
      </BaseItemPropDisplay>

      <BaseItemPropDisplay v-if="dataset.categories" name="Categories">
        <span v-for="(category, i) in dataset.categories" :key="i">
          <template v-if="i > 0">{{ ', ' }}</template>
          <template>{{ category | capitalize }}</template>
        </span>
      </BaseItemPropDisplay>
    </v-container>

    <v-container class="pa-0 text-xs-right">
      <BaseButton :to="datasetPath" icon="more_horiz">more</BaseButton>
    </v-container>
  </v-card>
</template>

<script>
import { allContentMixin, datasetMixin } from '@/mixins/contentMixin'
import BaseButton from '@/components/BaseButton'
import BaseItemPropChip from '@/components/BaseItemPropChip'
import BaseItemPropDisplay from '@/components/BaseItemPropDisplay'
import BaseItemTitleDisplay from '@/components/BaseItemTitleDisplay'

export default {
  mixins: [allContentMixin, datasetMixin],
  components: {
    BaseButton,
    BaseItemPropChip,
    BaseItemPropDisplay,
    BaseItemTitleDisplay
  },
  props: {
    item: Object
  },
  data() {
    return {
      path: 'datasets'
    }
  },
  computed: {
    dataset() {
      return this.item
    },
    datasetPath() {
      return `/datasets/${this.dataset.slug}`
    }
  }
}
</script>
