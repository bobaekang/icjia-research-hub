<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <span class="small pl-2" style="color: #666">Apps</span>
        <v-icon>chevron_right</v-icon>
        {{ app.title }}
      </h2>

      <v-spacer />

      <v-btn flat exact :to="app.url">
        Launch
        <v-icon>play_arrow</v-icon>
      </v-btn>

      <BaseButton to="/apps">
        back
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
          <h3 class="pb-2">About this app</h3>
          <BaseItemPropDisplay name="Updated">
            {{ app.date }}
          </BaseItemPropDisplay>

          <BaseItemPropDisplay name="Contributors">
            <span v-for="(contributor, i) in app.contributors" :key="i">
              <a :href="contributor.url" target="_blank">
                {{ contributor.title }}
              </a>
            </span>
          </BaseItemPropDisplay>

          <BaseItemPropDisplay name="Categories">
            <span v-for="(category, i) in app.categories" :key="i">
              {{ category }}
            </span>
          </BaseItemPropDisplay>

          <BaseItemPropDisplay name="Tags">
            <span v-if="app.tags">
              <BaseItemPropChip v-for="tag in app.tags" :key="tag">
                {{ tag.toUpperCase() }}
              </BaseItemPropChip>
            </span>

            <span v-else class="italic">No tags</span>
          </BaseItemPropDisplay>

          <BaseItemPropDisplay name="Description">
            {{ app.description }}
          </BaseItemPropDisplay>
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseItemPropChip from '@/components/BaseItemPropChip'
import BaseItemPropDisplay from '@/components/BaseItemPropDisplay'

export default {
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
