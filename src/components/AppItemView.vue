<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <span class="small pl-2" style="color: #666">Apps</span>
        <v-icon>chevron_right</v-icon>
        <template>{{ app.title }}</template>
      </h2>

      <v-spacer />

      <BaseButton :href="app.url" icon="play_arrow">
        <template>{{ 'Launch' }}</template>
      </BaseButton>

      <BaseButton v-if="app.src" :href="app.src" icon="code">
        <template>{{ 'Source code' }}</template>
      </BaseButton>

      <BaseButton to="/apps">
        <template>{{ 'back' }}</template>
      </BaseButton>
    </v-card-title>

    <v-divider />

    <v-layout row>
      <v-flex xs3>
        <v-img :src="app.image" lazy-src="https://via.placeholder.com/1/DDDDDD">
          <v-layout
            slot="placeholder"
            fill-height
            align-center
            justify-center
            ma-0
          >
            <v-progress-circular indeterminate color="grey lighten-3" />
          </v-layout>
        </v-img>
      </v-flex>

      <v-flex>
        <v-container>
          <h2 class="pb-3 light">About this app</h2>
          <BaseItemPropDisplay name="Updated">
            <template>{{ app.date | formatDate }}</template>
          </BaseItemPropDisplay>

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

          <BaseItemPropDisplay v-if="app.tags" name="Tags">
            <BaseItemPropChip v-for="tag in app.tags" :key="tag">
              <template>{{ tag }}</template>
            </BaseItemPropChip>
          </BaseItemPropDisplay>

          <BaseItemPropDisplay name="Description">
            <template>{{ app.description }}</template>
          </BaseItemPropDisplay>
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { allContentMixin } from '@/mixins/contentMixin'
import BaseButton from '@/components/BaseButton'
import BaseItemPropChip from '@/components/BaseItemPropChip'
import BaseItemPropDisplay from '@/components/BaseItemPropDisplay'

export default {
  mixins: [allContentMixin],
  components: {
    BaseButton,
    BaseItemPropChip,
    BaseItemPropDisplay
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
