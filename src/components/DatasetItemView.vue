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
      <v-layout row wrap>
        <v-flex sm12 md6 lg4>
          <BaseItemPropDisplay name="Updated">
            <template>{{ dataset.date | formatDate }}</template>
          </BaseItemPropDisplay>

          <BaseItemPropDisplay name="Sources">
            <span v-for="(source, i) in dataset.sources" :key="i">
              <template v-if="i > 0">{{
                dataset.sources.length > i + 1 ? ', ' : ' and '
              }}</template>

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
        </v-flex>

        <v-flex sm12 md6 lg8>
          <BaseItemPropDisplay v-if="dataset.unit" name="Unit of analysis">
            <template>{{ dataset.unit | capitalize }}</template>
          </BaseItemPropDisplay>

          <BaseItemPropDisplay v-if="dataset.description" name="Description">
            <template>{{ dataset.description }}</template>
          </BaseItemPropDisplay>

          <BaseItemPropDisplay v-if="dataset.notes" name="Notes">
            <ul>
              <li v-for="note in dataset.notes" :key="note">{{ note }}</li>
            </ul>
          </BaseItemPropDisplay>
        </v-flex>
      </v-layout>
    </v-container>

    <template v-if="dataset.variables">
      <v-divider></v-divider>

      <v-container class="hidden-sm-and-down">
        <h3 class="pb-2">Variables</h3>
        <div ref="variables" class="variables-table font-lato small pb-2"></div>
      </v-container>
    </template>
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
  },
  mounted() {
    if (this.dataset.variables)
      this.$refs.variables.innerHTML = this.array2table(this.dataset.variables)
  },
  methods: {
    array2table(array) {
      let cols = ['name', 'type', 'definition', 'values']
      let header = ''
      let body = ''

      cols.forEach(col => {
        header += '<th>' + col[0].toUpperCase() + col.slice(1) + '</th>'
      })

      array.forEach(row => {
        body += '<tr>'

        cols.forEach(col => {
          let value = row[col] ? row[col] : ''
          body += '<td>' + value + '</td>'
        })

        body += '</tr>'
      })

      return (
        '<table><thead><tr>' +
        header +
        '</tr></thead><tbody>' +
        body +
        '</tbody></table>'
      )
    }
  }
}
</script>

<style scoped>
.variables-table {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.variables-table >>> table {
  border-collapse: collapse;
  border-spacing: 0;
}

.variables-table >>> table th {
  font-weight: 600;
}

.variables-table >>> table td,
.variables-table >>> table th {
  border: 1px solid grey;
  padding: 6px 13px;
}

.variables-table >>> table tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
}

.variables-table >>> table tr:nth-child(2n) {
  background-color: #f6f8fa;
}
</style>
