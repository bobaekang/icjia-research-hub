<template>
  <div>
    <v-container class="pb-3">
      <v-layout justify-center>
        <v-flex xs12 sm10 xl8>
          <SectionTitle :title="title" :path="path" />
        </v-flex>
      </v-layout>
    </v-container>

    <v-carousel id="carousel">
      <router-link
        v-for="(item, i) in items"
        :key="i"
        :to="`/article/${item.slug}`"
        style="text-decoration: none"
      >
        <v-carousel-item
          :src="item.splash"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.33)"
        >
          <v-layout justify-center>
            <v-flex xs10 sm8>
              <h1
                class="text-xs-center"
                style="color:white; margin:15% 10% 0 10%"
              >
                {{ item.title }}
              </h1>
            </v-flex>
          </v-layout>
        </v-carousel-item>
      </router-link>
    </v-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SectionTitle from '../components/SectionTitle'

export default {
  components: {
    SectionTitle
  },
  data() {
    return {
      title: 'Latest articles',
      path: 'article'
    }
  },
  computed: {
    ...mapGetters({
      items: 'articlesHome',
      base_url: 'api_url'
    })
  }
}
</script>

<style scoped>
.v-image__image:hover {
  background-color: grey;
  background-image: none;
}
</style>
