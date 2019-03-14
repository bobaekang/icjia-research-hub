<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <span class="small pl-2" style="color: #666">Datasets</span>
        <v-icon>chevron_right</v-icon>
        {{ dataset.title }}
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

      <BaseButton to="/datasets">
        back
      </BaseButton>
    </v-card-title>

    <v-divider />

    <v-container>
      <h3 class="pb-2">About this dataset</h3>

      <BaseItemPropDisplay name="Updated">
        {{ dataset.date ? dataset.date.slice(0, 10) : '' }}
      </BaseItemPropDisplay>

      <BaseItemPropDisplay name="Sources">
        <span v-for="(source, i) in dataset.sources" :key="i">
          <template v-if="source.hasOwnProperty('url')">
            <a :href="source.url" target="_blank">
              {{ source.title }}
            </a>
          </template>

          <template v-else>
            {{ source.title }}
          </template>
        </span>
      </BaseItemPropDisplay>

      <BaseItemPropDisplay name="Categories">
        <span v-for="(category, i) in dataset.categories" :key="i">
          {{ category }}
        </span>
      </BaseItemPropDisplay>

      <BaseItemPropDisplay name="Tags">
        <span v-if="dataset.tags && dataset.tags.length > 0">
          <BaseItemPropChip v-for="tag in dataset.tags" :key="tag">
            {{ tag.toUpperCase() }}
          </BaseItemPropChip>
        </span>

        <span v-else class="italic">No tags</span>
      </BaseItemPropDisplay>

      <BaseItemPropDisplay name="Time period">
        {{ dataset.timeperiod }}
      </BaseItemPropDisplay>

      <BaseItemPropDisplay name="Age group">
        {{ dataset.agegroup }}
      </BaseItemPropDisplay>
    </v-container>
  </v-card>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseItemPropChip from '@/components/BaseItemPropChip'
import BaseItemPropDisplay from '@/components/BaseItemPropDisplay'
import DatasetDownloadButton from '@/components/DatasetDownloadButton'

export default {
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
