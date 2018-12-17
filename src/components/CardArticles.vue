<template>
    <v-card>
        <v-layout row>
            <v-img
                class="hidden-sm-and-down"
                :src="article.imgUrl"
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
                            <h3>{{ article.title }}</h3>

                            <span v-for="(p, i) of article.pubtype" :key="i">                            
                                <app-chip-card :name="p.toUpperCase()" />
                            </span>
                            <span v-for="(a, i) of article.area" :key="i">                            
                                <app-chip-card :name="a.toUpperCase()" />
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
                        v-if="article.teaser"
                        @click="article.showTeaser = !article.showTeaser"
                        flat
                        >
                        summary
                        <v-icon>{{ article.showTeaser ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    <v-btn
                        :href="article.url"
                        target="_blank"
                        flat>
                        full
                        <v-icon>open_in_new</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                    <v-card-text v-if="article.showTeaser">
                        {{ article.teaser }}
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
            article.url = `http://www.icjia.state.il.us/articles/${article.filename}`;
            article.imgUrl = `http://www.icjia.state.il.us/${article.splash}`;

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
