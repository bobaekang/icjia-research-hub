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
                <search-bar
                    ref="searchBar"
                    label="Search for datasets"
                    :search.sync="search"
                    />
                
                <search-filter
                    :items="filters"
                    @updateFilter="filterObj = $event"
                    />

                <the-item-counter
                    :count="filterItems(items).length"
                    :item="item"
                    />
                
                <search-suggestion
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
                <dataset-item :item="item" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { applyFilterBox } from '../utils';
import DatasetItem from '../components/DatasetItem';
import SearchBar from '../components/SearchBar';
import SearchFilter from '../components/SearchFilter';
import SearchSuggestion from '../components/SearchSuggestion';
import TheItemCounter from '../components/TheItemCounter';

export default {
    components: {
        DatasetItem,
        SearchBar,
        SearchFilter,
        SearchSuggestion,
        TheItemCounter,
    },
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
    created () {
        this.$store.dispatch('createDatasetFilters');
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
}
</script>