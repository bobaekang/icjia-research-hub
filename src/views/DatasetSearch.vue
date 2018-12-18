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
                    label="Search for datasets"
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

export default {
    props: {
        search: String,
    },
    data () {
        return {
            item: 'dataset',
            filterObj: {},
        }
    },
    computed: {
        ...mapGetters({
            items: 'datasets',
            filters: 'datasetFilters',
        })
    },
    watch: {
        
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
        }
    },
    components: {
        AppCardDatasets,
        AppCountItems,
        AppSearchBar,
        AppSearchFilter,
    },
}
</script>