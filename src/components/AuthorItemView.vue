<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <span class="small pl-2" style="color: #666">Authors</span>

        <v-icon>chevron_right</v-icon>
        {{ author.title }}
      </h2>
    </v-card-title>

    <v-divider />

    <v-container>
      <div class="mb-3">
        <h3>About this author</h3>
        <p v-if="author.description">{{ author.description }}</p>
        <p v-else class="italic">(No description.)</p>
      </div>

      <template v-if="author.articles.length > 0">
        <v-divider></v-divider>

        <div class="my-3">
          <h3 class="mb-1">Articles by this author</h3>
          <v-flex
            v-for="article in sortByDate(author.articles)"
            :key="article.id"
            class="mb-3"
          >
            <ArticleItem :item="getArticle(article.id)" />
          </v-flex>
        </div>
      </template>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleItem from './ArticleItem'

export default {
  components: {
    ArticleItem
  },
  props: {
    item: Object
  },
  computed: {
    ...mapGetters({
      items: 'articles'
    }),
    author() {
      return this.item
    }
    // articlesSortedByDate() {
    //   return this.item.articles.sort((a, b) => {
    //     if (a.date < b.date) return 1
    //     if (a.date > b.date) return -1
    //     return 0
    //   })
    // }
  },
  methods: {
    sortByDate(articles) {
      return articles.sort((a, b) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      })
    },
    getArticle(id) {
      return this.items.filter(el => {
        return el.id == id
      })[0]
    }
  }
}
</script>
