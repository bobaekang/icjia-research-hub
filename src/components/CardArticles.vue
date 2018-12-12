<template>
    <v-container>
        <v-layout row wrap>
            <v-flex
                xs12
                sm8
                lg6
                offset-sm2
                offset-lg3
                >
                <app-search-bar
                    label="Search for articles (by title, date, authors, etc.)"
                    :search.sync="search"
                    />
            </v-flex>

            <v-flex xs12>
                <app-count-items
                    :count="filterItems(editedItems).length"
                    :item="item"
                    />
            </v-flex>

            <v-flex
                xs12
                sm10
                lg8
                offset-sm1
                offset-lg2
                class="mb-3"
                v-for="(item, i) in filterItems(editedItems)"
                :key="i"
                >
                <v-card>
                    <v-layout row>
                        <v-img
                            class="hidden-sm-and-down"
                            :src="item.imgUrl"
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
                                        <h3>{{ item.title }}</h3>

                                        <app-chip-card :name="item.pubtype" />
                                        <app-chip-card :name="item.area" />
                                    </v-layout>
                                </v-container>
                                
                                <v-divider />
                                
                                <v-container class="small sans-serif py-2">
                                    <div class="pb-2">
                                        <span class="ma-0 bold">Updated</span>
                                        {{ item.date }}
                                    </div>
                                    <div class="pb-2">
                                        <span class="ma-0 bold">Authors</span>
                                        {{ item.authors }}
                                    </div>
                                </v-container>
                            </div>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    v-if="item.teaser"
                                    @click="item.showTeaser = !item.showTeaser"
                                    flat
                                    >
                                    summary
                                    <v-icon>{{ item.showTeaser ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                                <v-btn
                                    :href="item.url"
                                    target="_blank"
                                    flat>
                                    full
                                    <v-icon>open_in_new</v-icon>
                                </v-btn>
                            </v-card-actions>

                            <v-slide-y-transition>
                                <v-card-text v-if="item.showTeaser">
                                    {{ item.teaser }}
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-layout>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import AppChipCard from './ChipCard';
import AppCountItems from './CountItems'
import AppSearchBar from './SearchBar';
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            search: '',
            item: 'article'
        }
    },
    computed: {
        ...mapGetters({
            items: 'articles'
        }),
        editedItems () {
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

            return this.items.map(item => {
                item.area = joinIfArray(item.area);
                item.authors = joinIfArray(item.authors, true);
                item.pubtype = joinIfArray(item.pubtype);
                item.url = `http://www.icjia.state.il.us/articles/${item.filename}`;
                item.imgUrl = `http://www.icjia.state.il.us/${item.splash}`;

                return item;
            });
        },
    },
    methods: {
        filterItems (items) {
            const s = this.search.toUpperCase()

            return items.filter((item) => {    
                return item.title.toUpperCase().match(s) ||
                    item.date.match(s) ||
                    item.area.toUpperCase().match(s) ||
                    item.authors.toUpperCase().match(s) ||
                    item.pubtype.toUpperCase().match(s);
            });
        },
    },
    components: {
        AppChipCard,
        AppCountItems,
        AppSearchBar,
    }
}
</script>

<style scoped>
.article-body {
    width: 100px;
}

.sans-serif {
    font-family: 'Lato', sans-serif;
}

.small {
    font-size: 0.8em
}

.bold {
    font-weight: bold;
}
</style>
