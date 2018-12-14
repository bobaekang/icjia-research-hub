<template>
    <div>
        <app-view-title :title="title"></app-view-title>
        
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
                        label="Search for articles (by title, date, author)"
                        :search.sync="search"
                        />

                    <app-search-filter
                        :items="filters"
                        @updateFilter="filterObj = $event"
                        />
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
                    xl8
                    offset-sm1
                    offset-xl2
                    class="mb-3"
                    v-for="(item, i) in filterItems(items)"
                    :key="i"
                    >
                    <app-card-articles :item="item"/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { applyFilterBox } from '../utils';
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
            filterObj: {},
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
            const s = this.search.toUpperCase();
            const itemsToShow = Object.keys(this.filterObj).length !== 0 ?
                applyFilterBox(items, this.filters, this.filterObj) :
                items;

            return itemsToShow.filter((item) => {    
                return item.title.toUpperCase().match(s) ||
                    item.date.match(s) ||
                    item.authors.join('').toUpperCase().match(s);
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
