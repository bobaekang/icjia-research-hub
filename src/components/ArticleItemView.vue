<template>
  <div>
    <SocialSharing :url="baseUrl + item.slug" :title="item.title" />

    <v-img :height="splashHeight" :src="article.splash"></v-img>

    <v-layout row wrap>
      <v-flex md2 class="hidden-sm-and-down">
        <ArticleItemViewTOC
          :headings="headings"
          :activeHeading="activeHeading"
          :class="{
            'toc-sticky': isTOCSticky,
            'toc-md-only': isMedium,
            'toc-lg-and-up': !isMedium
          }"
          v-scroll="onScrollTOC"
        />
      </v-flex>

      <v-flex md10>
        <v-layout justify-center row id="article-view">
          <v-flex xs12 sm10 pt-4>
            <v-layout align-center justify-space-between row>
              <div class="article-type font-lato">
                <span v-for="type in article.type" :key="type">{{ type }}</span>
                &nbsp;|&nbsp;
                <span v-for="category in article.categories" :key="category">
                  {{ category }}
                </span>
              </div>

              <BaseButton to="/articles">
                back
              </BaseButton>
            </v-layout>

            <h1 class="article-title">{{ article.title }}</h1>

            <div class="article-summary font-lato my-3">
              {{ article.summary }}
            </div>

            <div>
              <span
                v-for="(author, i) in article.authors"
                :key="i"
                class="uppercase font-oswald"
              >
                <span v-if="isBeforeLastAuthor(article.authors.length, i)">
                  &nbsp;and&nbsp;
                </span>

                <router-link :to="getAuthorPath(author.slug)">
                  {{ author.title }}
                </router-link>

                <span v-if="i + 2 < article.authors.length">,&nbsp;</span>
              </span>
              &nbsp;|&nbsp;
              <span class="uppercase font-oswald">
                {{ article.date ? article.date.slice(0, 10) : '' }}
              </span>
              &nbsp;|&nbsp;
              <v-icon id="print-button" @click="printArticle">fa-print</v-icon>
            </div>

            <v-divider />

            <div
              ref="article-body"
              class="article-body py-3"
              v-html="articleBody"
              v-scroll="onScroll"
            />

            <div style="height: 100px"></div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ArticleItemViewTOC from '@/components/ArticleItemViewTOC'
import BaseButton from '@/components/BaseButton'
import SocialSharing from '@/components/SocialSharing'

const mdOpts = {
  html: true,
  linkify: true,
  typographer: true
}

const mdAnchorOpts = {
  level: 2,
  slugify: s =>
    String(s)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-_]/g, '')
}

const md = require('markdown-it')(mdOpts)
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-anchor'), mdAnchorOpts)

export default {
  components: {
    ArticleItemViewTOC,
    BaseButton,
    SocialSharing
  },
  props: {
    item: Object
  },
  data() {
    return {
      activeHeading: 'introduction',
      articleBody: null,
      baseUrl: 'localhost:8080/',
      headings: null,
      isTOCSticky: false,
      splashHeight: 500
    }
  },
  computed: {
    article() {
      return this.item
    },
    isMedium() {
      return this.$vuetify.breakpoint.name === 'md'
    }
  },
  watch: {
    article() {
      this.articleBody = md.render(this.item.markdown)
    },
    articleBody() {
      this.$nextTick(() => {
        this.headings = this.$refs['article-body'].querySelectorAll('h2')
      })
    }
  },
  methods: {
    isBeforeLastAuthor(length, i) {
      return length > 1 && length === i + 1
    },
    getAuthorPath(slug) {
      return `/authors/${slug}`
    },
    onScroll(e) {
      if (typeof window === 'undefined') return

      const top = window.pageYOffset || e.target.scrollTop || 0

      if (top === 0) {
        this.activeHeading = this.headings[0].id
      } else {
        this.headings.forEach(heading => {
          let elHeading = this.$el.querySelector(`#${heading.id}`)
          let rect = elHeading.getBoundingClientRect()
          if (rect.top < 91 && this.activeHeading !== heading.id) {
            this.activeHeading = heading.id
          }
        })
      }
    },
    onScrollTOC(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      const threshold = this.splashHeight + 75 + 75

      this.isTOCSticky = top > threshold
    },
    printArticle() {
      const win = window.open('', '')
      const html = document.getElementById('article-view').innerHTML
      let style = ''

      document
        .querySelectorAll('link[rel="stylesheet"], style')
        .forEach(node => {
          console.log(node)
          style += node.outerHTML
        })

      win.document.write(
        `<!DOCTYPE html><html><head>${style}</head><body>${html}</body></html>`
      )
      win.document.close()
      win.focus()
      win.print()
      win.close()
    }
  }
}
</script>

<style scoped>
.article-type {
  color: grey;
}

.article-img {
  width: 100%;
}

.article-title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.3;
}

.article-summary {
  color: grey;
  font-weight: 300;
  font-size: 20px;
}

/* headers */
.article-body >>> h1,
.article-body >>> h2,
.article-body >>> h3,
.article-body >>> h4,
.article-body >>> h5 {
  font-family: 'Oswald', sans-serif;
  line-height: 1.3;
}

.article-body >>> h1,
.article-body >>> h2,
.article-body >>> h3 {
  margin-top: 22px;
  margin-bottom: 11px;
  font-weight: 500;
}

.article-body >>> h4,
.article-body >>> h5,
.article-body >>> h6 {
  text-transform: uppercase;
  color: black;
  letter-spacing: 0.04em;
  font-weight: 700;
  margin-bottom: 11px;
  margin-top: 11px;
}

.article-body >>> h1 {
  font-size: 48px;
  font-weight: 700;
}

.article-body >>> h2 {
  font-size: 34px;
}

.article-body >>> h3 {
  font-size: 24px;
}

.article-body >>> h4 {
  font-size: 17px;
}

.article-body >>> h5 {
  font-size: 14px;
}

.article-body >>> h6 {
  font-family: 'Lato';
  font-size: 13px;
}

.article-body >>> p,
.article-body >>> ul,
.article-body >>> ol {
  font-size: 20px;
  margin-bottom: 11px;
}

.article-body >>> ul,
.article-body >>> ol {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.article-body >>> p {
  text-indent: 1.5em;
}

.article-body >>> hr {
  background: transparent;
  border: 0;
  border-bottom: 1px solid #dfe2e5;
  height: 0;
  margin: 15px 0;
  overflow: hidden;
}

/* footnotes */
.article-body >>> .footnotes {
  margin-top: 30px;
  margin-bottom: 30px;
}

.article-body >>> .footnotes p {
  font-size: 16px;
  text-indent: 0;
}

/* figure and table */
.article-body >>> .article-figure {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 24px 12px;
}

.article-body >>> .article-table {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 24px 12px;
}

.article-body >>> table {
  border-collapse: collapse;
  border-spacing: 0;
  margin-left: auto;
  margin-right: auto;
}

.article-body >>> table th {
  font-weight: 600;
}

.article-body >>> table td,
.article-body >>> table th {
  border: 1px solid grey;
  padding: 6px 13px;
}

.article-body >>> table tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
}

.article-body >>> table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

/* blockquote */
.article-body >>> blockquote {
  border-left: 0.25em solid #dfe2e5;
  font-family: 'Lato', sans-serif;
  color: #6a737d;
  padding: 0 1em;
  margin: 2em 0;
}

.article-body >>> blockquote p,
.article-body >>> blockquote ol,
.article-body >>> blockquote ul {
  font-size: 18px;
  text-indent: 0;
}

.article-body >>> blockquote > :first-child {
  margin-top: 0;
}

.article-body >>> blockquote > :last-child {
  margin-bottom: 0;
}

/* others */
#print-button:hover {
  color: #1976d2;
}

.toc-md-only {
  padding-top: 90px !important;
  padding-left: 45px !important;
  max-width: 150px;
}

.toc-lg-and-up {
  padding-top: 90px !important;
  padding-left: 90px !important;
  max-width: 300px;
}

.toc-sticky {
  position: fixed;
  top: 0;
  left: 0;
}

@media screen and (max-width: 600px) {
  #article-view {
    padding-left: 32px;
  }
}
</style>
