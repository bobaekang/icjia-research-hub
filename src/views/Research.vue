<template>
    <div>
        <app-view-title :title="title"></app-view-title>
        
        <v-container>
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

                        <app-search-filter :items="filters" />
                    </v-flex>

                    <v-flex xs12>
                        <app-count-items
                            :count="filterItems(items).length"
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
                        v-for="(item, i) in filterItems(items)"
                        :key="i"
                        >
                        <app-card-articles :item="item"/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCardArticles from '../components/CardArticles.vue';
import AppCountItems from '../components/CountItems';
import AppSearchBar from '../components/SearchBar';
import AppSearchFilter from '../components/SearchFilter';
import AppViewTitle from '../components/ViewTitle';

export default {
    name: 'research',
    data () {
        return {
            title: 'Research publication',
            search: '',
            item: 'article',
        }
    },
    computed: {
        ...mapGetters({
            items: 'articles',
            filters: 'articleFilters',
        }),
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
        AppCardArticles,
        AppCountItems,
        AppSearchBar,
        AppSearchFilter,
        AppViewTitle,
    },
}
</script>
