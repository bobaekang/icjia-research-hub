<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <span class="small pl-2" style="color: #666">Datasets</span>
        <v-icon>chevron_right</v-icon>
        <template>{{ dataset.title }}</template>
      </h2>

      <v-spacer />

      <DatasetDownloadButton
        v-if="dataset.datacsv && dataset.datacsv !== ''"
        :data="dataset.datacsv"
        :name="dataset.datafilename"
        type="csv"
      />

      <DatasetDownloadButton
        v-else
        :data="dataset.datafile.url"
        :name="dataset.datafile.name"
        type="file"
      />

      <BaseButton to="/datasets">back</BaseButton>
    </v-card-title>

    <v-divider />

    <v-container>
      <h3 class="pb-2">About this dataset</h3>

      <BaseItemPropDisplay name="Updated">
        <template>{{ dataset.date | formatDate }}</template>
      </BaseItemPropDisplay>

      <BaseItemPropDisplay name="Sources">
        <span v-for="(source, i) in dataset.sources" :key="i">
          <a v-if="source.url" :href="source.url" target="_blank">
            {{ source.title }}
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

      <BaseItemPropDisplay v-if="dataset.tags" name="Tags">
        <BaseItemPropChip v-for="tag in dataset.tags" :key="tag">
          <template>{{ tag }}</template>
        </BaseItemPropChip>
      </BaseItemPropDisplay>

      <BaseItemPropDisplay v-if="dataset.timeperiod" name="Time period">
        <template>{{ dataset.timeperiod | formatTimeperiod }}</template>
      </BaseItemPropDisplay>

      <BaseItemPropDisplay v-if="dataset.agegroup" name="Age group">
        <template>{{ dataset.agegroup | capitalize }}</template>
      </BaseItemPropDisplay>
    </v-container>
  </v-card>
</template>

<script>
import { allContentMixin, datasetMixin } from '@/mixins/contentMixin'
import BaseButton from '@/components/BaseButton'
import BaseItemPropChip from '@/components/BaseItemPropChip'
import BaseItemPropDisplay from '@/components/BaseItemPropDisplay'
import DatasetDownloadButton from '@/components/DatasetDownloadButton'

export default {
  mixins: [allContentMixin, datasetMixin],
  components: {
    BaseButton,
    BaseItemPropChip,
    BaseItemPropDisplay,
    DatasetDownloadButton
  },
  props: {
    item: Object
  },
  computed: {
    dataset() {
      return this.item
    }
  }
}
</script>
