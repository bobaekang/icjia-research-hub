<template>
  <div>
    <TheProgessBar />

    <RHArticleView
      v-if="item"
      :item="item"
      :downloader="downloadPDF"
      @tag-click="useSearchTerm($event)"
    />

    <ArticleSocialSharing
      v-if="item && baseUrl"
      :url="baseUrl + '/' + item.slug"
      :title="item.title"
    />
  </div>
</template>

<script>
import FileSaver from 'file-saver'
import client from '@/services/client.articles'
import { searchMixin } from '@/mixins/contentMixin'
const ArticleSocialSharing = () => import('@/components/ArticleSocialSharing')
const RHArticleView = () =>
  import('icjia-research-hub-lib/packages/icjia-research-hub-lib').then(
    lib => lib.ArticleView
  )
const TheProgessBar = () => import('@/components/TheProgressBar')

export default {
  name: 'ArticleView',
  components: {
    ArticleSocialSharing,
    RHArticleView,
    TheProgessBar
  },
  mixins: [searchMixin],
  data() {
    return {
      item: null,
      baseUrl: '',
      meta: {
        title: 'Articles',
        description: ''
      }
    }
  },
  metaInfo() {
    const title = this.meta.title
    const description = this.meta.description
    return {
      titleTemplate: `${title} | %s`,
      meta: [
        {
          vmid: 'desc-articles',
          name: 'description',
          content: `${description}`
        }
      ]
    }
  },
  async created() {
    const item = await client.getSingle(this.$route.params.slug)
    this.baseUrl = await window.location.origin
    this.item = item
    this.meta.title = item.title
    this.meta.description = item.abstract
  },
  methods: {
    async downloadPDF(id, type) {
      const res = await client.getPDF(id, type)
      let pdf

      if (type === 'report') {
        pdf = res.reportpdf
      } else if (type === 'slides') {
        pdf = res.slidsepdf
      }

      const url = `${this.$store.state.api_url}/${pdf.url}`
      FileSaver.saveAs(url, decodeURI(pdf.name))
    }
  }
}
</script>
