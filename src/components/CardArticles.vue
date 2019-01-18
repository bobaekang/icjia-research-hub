<template>
    <v-card>
        <v-layout row>
            <v-img
                class="hidden-sm-and-down"
                :src="article.image.url"
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
                                <router-link :to="`/research/${article.slug}`">
                                    {{ article.title }}
                                </router-link>
                            </h3>

                            <span v-for="(t, i) of article.type" :key="i">                            
                                <app-chip-card :name="t.toUpperCase()" />
                            </span>
                            <span v-for="(c, i) of article.categories" :key="i">                            
                                <app-chip-card :name="c.toUpperCase()" />
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
                            {{ article.allAuthors }}
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
                        :to="`/research/${article.slug}`"
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
import AppChipCard from './ChipCard';

export default {
    props: {
        item: Object,
    },
    computed: {
        article () {
            const joinIfArray = (x, name = false) => {
                if (Array.isArray(x)) {
                    if (name && x.length > 1) {
                        let i = x.length - 1
                        return x.slice(0, i).join(', ') + ' and ' + x[i];
                    } else {
                        return x.join(', ')
                    }
                } else {
                    return x
                }
            }
            let article = this.item;
            article.allAuthors = joinIfArray(article.authors, true);

            return article;
        }
    },
    components: {
        AppChipCard,
    }
}
</script>

<style scoped>
.article-body {
    width: 100px;
}
</style>
