<template>
  <v-card>
    <v-card-title primary-title>
      <BaseItemTitleDisplay :to="getDatasetPath(dataset.slug)">
        {{ dataset.title }}
      </BaseItemTitleDisplay>

      <div v-if="dataset.categories">
        <BaseItemPropChip
          v-for="category in dataset.categories"
          :key="category"
        >
          {{ category.toUpperCase() }}
        </BaseItemPropChip>
      </div>
      <BaseItemPropChip>{{ dataset.agegroup.toUpperCase() }}</BaseItemPropChip>
    </v-card-title>

    <v-divider />

    <v-container class="py-2">
      <BaseItemPropDisplay name="Tags">
        <span v-if="dataset.tags && dataset.tags.length > 0">
          <span class="pr-2" v-for="(tag, i) in dataset.tags" :key="i">
            {{ tag.toUpperCase() }}
          </span>
        </span>

        <span v-else class="italic">No tags</span>
      </BaseItemPropDisplay>

      <BaseItemPropDisplay name="Updated">
        {{ dataset.date.slice(0, 10) }}
      </BaseItemPropDisplay>

      <BaseItemPropDisplay name="Sources">
        <span v-for="(source, i) in dataset.sources" :key="i">
          <a :href="source.url">{{ source.title }}</a>
        </span>
      </BaseItemPropDisplay>
    </v-container>

    <v-container class="pa-0 text-xs-right">
      <BaseButton :to="getDatasetPath(dataset.slug)" icon="more_horiz">
        more
      </BaseButton>
    </v-container>
  </v-card>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseItemPropChip from '@/components/BaseItemPropChip'
import BaseItemPropDisplay from '@/components/BaseItemPropDisplay'
import BaseItemTitleDisplay from '@/components/BaseItemTitleDisplay'

export default {
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
    }
  },
  methods: {
    getDatasetPath(slug) {
      return `/datasets/${slug}`
    }
  }
}
</script>
