<template>
    <div>
        <v-img
            height="500px"
            :src="article.splash"
            >
        </v-img>

        <v-container>
            <v-layout
                justify-center
                row
                >
                <v-flex
                    xs12
                    sm10
                    md8
                    >
                    <v-layout
                        align-center
                        justify-space-between
                        row
                        >
                        <div class="article-header">
                            <span
                                v-for="type in article.type"
                                :key="type"
                                >
                                {{ type }}
                            </span>
                            
                            &nbsp;|&nbsp;
                            
                            <span
                                v-for="category in article.categories"
                                :key="category"
                                >
                                {{ category }}
                            </span>
                        </div>

                        <v-btn
                            flat
                            exact
                            to="/articles"
                            >
                            Back
                        </v-btn>
                    </v-layout>
                    
                    <h1 class="article-title">{{ article.title }}</h1>

                    <div class="article-summary my-3">
                        {{ article.summary }}
                    </div>

                    <div>
                        <span
                            v-for="(author, i) in article.authors"
                            :key="i"
                            class="article-authors"
                            >
                            <span v-if="isBeforeLastAuthor(article.authors.length, i)">
                                &nbsp;and&nbsp;
                            </span>
                            
                            <router-link :to="`/author/${author.slug}`">
                                {{ author.title }}
                            </router-link>
                            
                            <span v-if="i + 2 < article.authors.length">
                                ,&nbsp;
                            </span>
                        </span>
                        
                        &nbsp;|&nbsp;
                        
                        <span class="article-date">
                            {{ article.date }}
                        </span>
                    </div>

                    <v-divider />

                    <div
                        class="article-body py-3"
                        v-html="compliedBody"
                        />

                    <div style="height: 100px"></div>
                </v-flex>
            </v-layout>        
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

const md = require('markdown-it')({
        html: true,
        linkify: true,
        typographer: true
    })
    .use(require('markdown-it-footnote'));

export default {
    props: {
        item: Object,
    },
    computed: {
        ...mapGetters({
            base_url: 'api_url'
        }),
        article () {
            return this.item;
        },
        compliedBody () {
            return md.render(this.item.markdown);
        }
    },
    methods: {
        isBeforeLastAuthor (length, i) {
            return length > 1 && length === i + 1;
        }
    }
}
</script>

<style scoped>
.article-authors {
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
}

.article-date {
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Oswald',serif;
    color: #999;
}

.article-header {
    font-family: 'Lato', sans-serif;
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
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 20px;
}


/* headers */
.article-body >>> h1,
.article-body >>> h2,
.article-body >>> h3,
.article-body >>> h4,
.article-body >>> h5 {
    font-family: 'Oswald',sans-serif;
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
    letter-spacing: .04em;
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
   margin-left:auto; 
   margin-right:auto;
   text-align: center;
   padding: 24px 12px;
}

.article-body >>> .article-table {
    margin-left:auto; 
    margin-right:auto;
    text-align: center;
    padding: 24px 12px; 
}

.article-body >>> table {
    border-collapse: collapse;
    border-spacing: 0;
    margin-left:auto; 
    margin-right:auto;
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
  border-left: .25em solid #dfe2e5;
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

.article-body >>> blockquote>:first-child {
  margin-top: 0;
}

.article-body >>> blockquote>:last-child {
  margin-bottom: 0;
}

</style>