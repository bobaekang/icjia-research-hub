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
                    offset-sm1
                    offset-xl2
                    class="mb-3"
                    v-for="(item, i) in filterItems(items)"
                    :key="i"
                    >
                    <app-card-datasets :item="item" />
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCardDatasets from '../components/CardDatasets';
import AppCountItems from '../components/CountItems';
import AppSearchBar from '../components/SearchBar';
import AppSearchFilter from '../components/SearchFilter';
import AppViewTitle from '../components/ViewTitle';

export default {
    name: 'dataset',
    data () {
        return {
            title: "Dataset",
            search: '',
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
    methods: {
        hasKeyMatch(item, key, fObj) {
            const fVals = fObj[key.toUpperCase()];
            const vals = item[key];

            let test = false;
            for (let fVal of fVals) {
                console.log(fVal);
                if (Array.isArray(vals)) {
                    test = vals.some(val => fVal === val.toUpperCase());
                    if (test) break;
                } else {
                    test = fVal === vals.toUpperCase();
                    if (test) break;
                }
            }
            return test;
        },
        isOutItem(item, keys, fObj) {
            let test = keys.every(key => this.hasKeyMatch(item, key, fObj));
            return test;
        },
        getOutItems(items, fObj) {
            const fObjKeys = Object.keys(fObj);
            
            let keys = [];
            for (let key of this.filters.map(key => key.title)) {
                for (let objKey of fObjKeys) {
                    if (key.toUpperCase() === objKey) keys.push(key);
                }
            }

            let outItems = [];
            for (let item of items) {
                if (this.isOutItem(item, keys, fObj)) outItems.push(item);
            }
            
            return outItems;
        },
        filterItems (items) {
            const s = this.search.toUpperCase();
            const outItems = Object.keys(this.filterObj).length !== 0 ?
                this.getOutItems(items, this.filterObj) :
                items;
            
            return outItems.filter((item) => {
                return item.title.toUpperCase().match(s);
            });
        }
    },
    components: {
        AppCardDatasets,
        AppCountItems,
        AppSearchBar,
        AppSearchFilter,
        AppViewTitle,
    },
}
</script>
