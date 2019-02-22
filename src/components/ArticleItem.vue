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
                    <v-progress-circular
                        indeterminate color="grey lighten-3"
                        />
                </v-layout>
            </v-img>
            <v-layout
                column
                justify-space-between
                class="article-body"
                >
                <div>
                    <v-container class="py-2">
                        <v-layout row wrap>
                            <h3>
                                <router-link :to="`/article/${article.slug}`">
                                    {{ article.title }}
                                </router-link>
                            </h3>

                            <span v-for="type of article.type" :key="type">                            
                                <simple-chip :name="type.toUpperCase()" />
                            </span>
                            <span v-for="category of article.categories" :key="category">                            
                                <simple-chip :name="category.toUpperCase()" />
                            </span>
                        </v-layout>
                    </v-container>
                    
                    <v-divider />
                    
                    <v-container class="small sans-serif py-2">
                        <div class="pb-2">
                            <span class="ma-0 bold">Updated</span>
                            {{ article.date }}
                        </div>
                        <div class="pb-2">
                            <span class="ma-0 bold">Authors</span>
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
                        </div>
                    </v-container>
                </div>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        v-if="article.summary"
                        @click="article.showSummary = !article.showSummary"
                        flat
                        >
                        summary
                        <v-icon>{{ article.showSummary ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    
                    <v-btn
                        :to="`/article/${article.slug}`"
                        flat>
                        read
                        <v-icon>visibility</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                    <v-card-text v-if="article.showSummary">
                        {{ article.summary }}
                    </v-card-text>
                </v-slide-y-transition>
            </v-layout>
        </v-layout>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import SimpleChip from './SimpleChip';

export default {
    components: {
        SimpleChip,
    },
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
    },
    methods: {
        isBeforeLastAuthor (length, i) {
            return length > 1 && length === i + 1;
        }
    }
}
</script>

<style scoped>
.article-body {
    width: 100px;
}

.article-authors {
    text-transform: uppercase;
}
</style>
