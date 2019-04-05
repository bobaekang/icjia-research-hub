<template>
  <v-card class="ma-3">
    <v-layout row>
      <v-img
        class="hidden-sm-and-down"
        :src="article.splash"
        lazy-src="https://via.placeholder.com/1/DDDDDD"
      >
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
      <v-layout column justify-space-between class="article-body">
        <div>
          <v-container class="py-2">
            <v-layout row wrap>
              <BaseItemTitleDisplay :to="article.slug | path('articles')">
                <template>{{ article.title }}</template>
              </BaseItemTitleDisplay>

              <div v-if="article.tags">
                <BaseItemPropChip v-for="tag of article.tags" :key="tag">
                  <template>{{ tag }}</template>
                </BaseItemPropChip>
              </div>
            </v-layout>
          </v-container>

          <v-divider />

          <v-container class="py-2">
            <BaseItemPropDisplay v-if="article.date" name="Updated">
              <template>{{ article.date | formatDate }}</template>
            </BaseItemPropDisplay>

            <BaseItemPropDisplay v-if="article.authors" name="Authors">
              <span v-for="(author, i) in article.authors" :key="author.title">
                <template v-if="i > 0">{{
                  article.authors.length > i + 1 ? ', ' : ' and '
                }}</template>

                <router-link :to="author.slug | path('authors')">
                  <template>{{ author.title }}</template>
                </router-link>
              </span>
            </BaseItemPropDisplay>

            <BaseItemPropDisplay v-if="article.categories" name="Categories">
              <span v-for="(category, i) in article.categories" :key="category">
                <template v-if="i > 0">{{ ', ' }}</template>
                <template>{{ category | capitalize }}</template>
              </span>
            </BaseItemPropDisplay>

            <BaseItemPropDisplay v-if="article.type" name="Type">
              <span v-for="(type, i) in article.type" :key="type">
                <template v-if="i > 0">{{ ', ' }}</template>
                <template>{{ type | capitalize }}</template>
              </span>
            </BaseItemPropDisplay>
          </v-container>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="article.summary"
            @click="showSummary = !showSummary"
            flat
          >
            <template>{{ 'summary' }}</template>
            <v-icon>{{ summaryIcon }}</v-icon>
          </v-btn>

          <BaseButton :to="article.slug | path('articles')" icon="more_horiz">
            <template>{{ 'more' }}</template>
          </BaseButton>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-if="showSummary">{{ article.summary }}</v-card-text>
        </v-slide-y-transition>
      </v-layout>
    </v-layout>
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
  data() {
    return {
      showSummary: false
    }
  },
  computed: {
    article() {
      return this.item
    },
    summaryIcon() {
      return this.showSummary ? 'keyboard_arrow_down' : 'keyboard_arrow_up'
    }
  }
}
</script>

<style scoped>
.article-body {
  width: 100px;
}
</style>
