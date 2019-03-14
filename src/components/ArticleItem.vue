<template>
  <v-card>
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
              <BaseItemTitleDisplay :to="articlePath">
                {{ article.title }}
              </BaseItemTitleDisplay>

              <template v-if="article.type">
                <BaseItemPropChip v-for="type of article.type" :key="type">
                  {{ type.toUpperCase() }}
                </BaseItemPropChip>
              </template>

              <template v-if="article.categories">
                <BaseItemPropChip
                  v-for="category of article.categories"
                  :key="category"
                >
                  {{ category ? category.toUpperCase() : '' }}
                </BaseItemPropChip>
              </template>
            </v-layout>
          </v-container>

          <v-divider />

          <v-container class="py-2">
            <BaseItemPropDisplay name="Updated">
              {{ article.date ? article.date.slice(0, 10) : '' }}
            </BaseItemPropDisplay>

            <BaseItemPropDisplay name="Authors">
              <span
                v-for="(author, i) in article.authors"
                :key="author.title"
                class="uppercase"
              >
                <span v-if="isBeforeLastAuthor(article.authors.length, i)">
                  &nbsp;and&nbsp;
                </span>

                <router-link :to="`/authors/${author.slug}`">
                  {{ author.title }}
                </router-link>

                <span v-if="i + 2 < article.authors.length">
                  ,&nbsp;
                </span>
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
            summary
            <v-icon>
              {{ showSummary ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
            </v-icon>
          </v-btn>

          <BaseButton :to="articlePath" icon="more_horiz">
            more
          </BaseButton>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-if="showSummary">
            {{ article.summary }}
          </v-card-text>
        </v-slide-y-transition>
      </v-layout>
    </v-layout>
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
      showSummary: false
    }
  },
  computed: {
    article() {
      return this.item
    },
    articlePath() {
      return `/articles/${this.article.slug}`
    }
  },
  methods: {
    isBeforeLastAuthor(length, i) {
      return length > 1 && length === i + 1
    }
  }
}
</script>

<style scoped>
.article-body {
  width: 100px;
}
</style>
