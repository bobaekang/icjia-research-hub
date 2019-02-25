<template>
  <v-card>
    <v-card-title primary-title>
      <h2 class="pr-2">
        <router-link :to="`/datasets/${dataset.slug}`">
          {{ dataset.title }}
        </router-link>
      </h2>

      <div v-if="dataset.categories">
        <span v-for="(category, i) in dataset.categories" :key="i">
          <simple-chip :name="category.toUpperCase()" />
        </span>
      </div>
      <simple-chip :name="dataset.agegroup.toUpperCase()" />
    </v-card-title>

    <v-divider />

    <div>
      <v-layout row wrap>
        <v-flex xs12>
          <v-container class="small sans-serif py-2">
            <span class="bold pr-2">Tags</span>

            <span v-if="dataset.tags && Array.isArray(dataset.tags)">
              <span class="pr-2" v-for="(tag, i) in dataset.tags" :key="i">
                {{ tag.toUpperCase() }}
              </span>
            </span>

            <span v-else class="italic">No tags</span>
          </v-container>

          <v-container class="py-2 small sans-serif hidden-sm-and-down">
            <v-layout row wrap>
              <v-flex sm2>
                <div class="pb-2">
                  <p class="ma-0 bold">Updated</p>
                  {{ dataset.date }}
                </div>
              </v-flex>
              <v-flex sm10>
                <div>
                  <p class="ma-0 bold">Sources</p>
                  <span v-for="(source, i) in dataset.sources" :key="i">
                    <a :href="source.url">{{ source.title }}</a>
                  </span>
                </div>
              </v-flex>
            </v-layout>
          </v-container>

          <v-container class="pt-0 small sans-serif hidden-md-and-up">
            <div class="pb-2">
              <span class="pr-2 bold">Updated</span>
              {{ dataset.date }}
            </div>
            <div>
              <span class="pr-2 bold">Sources</span>
              <span v-for="(source, i) in dataset.sources" :key="i">
                <a :href="source.url">{{ source.title }}</a>
              </span>
            </div>
          </v-container>

          <v-container class="pa-0 text-xs-right">
            <v-btn flat :to="`/datasets/${dataset.slug}`">
              More
              <v-icon>more_horiz</v-icon>
            </v-btn>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
  </v-card>
</template>

<script>
import SimpleChip from '@/components/SimpleChip'

export default {
  components: {
    SimpleChip
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
