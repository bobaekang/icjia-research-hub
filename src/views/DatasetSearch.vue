<template>
    <v-container>
        <v-layout
            row
            wrap
            justify-center
            >
            <v-flex
                xs12
                sm8
                lg6
                >
                <app-search-bar
                    ref="searchBar"
                    label="Search for datasets"
                    :search.sync="search"
                    />
                
                <app-search-filter
                    :items="filters"
                    @updateFilter="filterObj = $event"
                    />

                <app-count-items
                    :count="filterItems(items).length"
                    :item="item"
                    />
                
                <app-search-suggestion
                    :showSuggestion="filterItems(items).length === 0"
                    :suggestions="suggestions"
                    @useSuggestion="useSuggestion($event)"
                    />
            </v-flex>

            <v-flex
                xs12
                sm10
                xl8
                class="mb-3"
                v-for="(item, i) in filterItems(items)"
                :key="i"
                >
                <app-card-datasets :item="item" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { applyFilterBox } from '../utils';
import AppCardDatasets from '../components/CardDatasets';
import AppCountItems from '../components/CountItems';
import AppSearchBar from '../components/SearchBar';
import AppSearchFilter from '../components/SearchFilter';
import AppSearchSuggestion from '../components/SearchSuggestion';

export default {
    props: {
        search: String,
    },
    data () {
        return {
            item: 'dataset',
            suggestion: '',
            filterObj: {},
        }
    },
    computed: {
        ...mapGetters({
            items: 'datasets',
            filters: 'datasetFilters',
            suggestions: 'datasetSuggestions'
        })
    },
    methods: {
        filterItems (items) {
            const s = this.search.toUpperCase();
            const itemsToShow = Object.keys(this.filterObj).length !== 0 ?
                applyFilterBox(items, this.filters, this.filterObj) :
                items;

            return itemsToShow.filter((item) => {
                return item.title.toUpperCase().match(s);
            });
        },
        useSuggestion (suggestion) {
            this.search = suggestion;
            this.$refs.searchBar.searchInput = suggestion;
        },
    },
    components: {
        AppCardDatasets,
        AppCountItems,
        AppSearchBar,
        AppSearchFilter,
        AppSearchSuggestion,
    },
    created () {
        this.$store.dispatch('createDatasetFilters');
    },
}
</script>