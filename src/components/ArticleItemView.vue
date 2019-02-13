<template>
    <div>
        <v-img
            height="500px"
            :src="`${base_url}/${article.splash.url}`"
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
                            to="/article"
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
                                and&nbsp;
                            </span>
                            
                            <router-link :to="`/author/${author.slug}`">
                                {{ author.title }}
                            </router-link>
                            
                            <span v-if="i + 1 < article.authors.length">
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

                    <div style="height: 500px"></div>
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
            // let test = "# Heading (#)\n"
            // test += "Some contents[^1]\n"
            // test += "## Sub-heading (##)\n"
            // test += "Some contents[^2]\n"
            // test += "### Sub-sub-heading (###)\n"
            // test += "Some contents\n"
            // test += "#### Sub-sub-sub-heading (####)\n"
            // test += "Some contents\n"
            // test += "##### Sub-sub-sub-sub-heading (#####)\n"
            // test += "Some contents\n"
            // test += "[^1]: First footnote\n"
            // test += "[^2]: Second footnote\n"
            
            // return md.render(test);
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

.article-body >>> h1,
.article-body >>> h2,
.article-body >>> h3,
.article-body >>> h4,
.article-body >>> h5,
.article-body >>> h6 {
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
    line-height: 26px;
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

.article-body >>> p {
    font-size: 22px;
    text-indent: 1.5em;
}

.article-body >>> hr {
    margin-top: 22px;
    margin-bottom: 22px;
    border: 0;
    border-top: 1px solid #eee;
}

.article-body >>> .footnotes {
    margin-top: 30px;
    margin-bottom: 30px;
}

.article-body >>> .footnotes p {
    font-size: 16px;
    text-indent: 0;
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

</style>