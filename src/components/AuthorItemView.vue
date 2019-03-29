<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <span class="small pl-2" style="color: #666">Authors</span>
        <v-icon>chevron_right</v-icon>
        <template>{{ author.title }}</template>
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
          <v-flex v-for="article in articles" :key="article.id" class="mb-3">
            <ArticleItem :item="article" />
          </v-flex>
        </div>
      </template>
    </v-container>
  </v-card>
</template>

<script>
import { sortByDate } from '@/services/utils'
import client from '@/services/client'
import ArticleItem from '@/components/ArticleItem'

export default {
  components: {
    ArticleItem
  },
  props: {
    item: Object
  },
  data() {
    return {
      articles: [],
      articleIds: []
    }
  },
  computed: {
    author() {
      return this.item
    }
  },
  mounted() {
    this.articleIds = this.item.articles
    Promise.all(
      this.item.articles.map(async el => {
        const res = await client.getArticleInfo(el._id)
        return res.data.data.article
      })
    ).then(articles => {
      this.articles = sortByDate(articles)
    })
  },
  beforeUpdate() {
    if (this.articleIds !== this.item.articles) {
      this.articleIds = this.item.articles
      Promise.all(
        this.item.articles.map(async el => {
          const res = await client.getArticleInfo(el._id)
          return res.data.data.article
        })
      ).then(articles => {
        this.articles = sortByDate(articles)
      })
    }
  }
}
</script>
