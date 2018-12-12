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
                            label="Search for datasets"
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
                        <app-card-datasets :item="item" />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCardDatasets from '../components/CardDatasets'
import AppCountItems from '../components/CountItems';
import AppSearchBar from '../components/SearchBar';
import AppViewTitle from '../components/ViewTitle'

export default {
    name: 'dataset',
    data () {
        return {
            title: "Dataset",
            search: '',
            item: 'dataset',
        }
    },
    computed: {
        ...mapGetters({
            items: 'datasets'
        }),
        editedItems () {
            return this.items.map(item => {
                return item;
            });
        }
    },
    methods: {
        filterItems (items) {
            const s = this.search.toUpperCase()

            return items.filter((item) => {    
                return item.title.toUpperCase().match(s);
            });
        },
    },
    components: {
        AppCardDatasets,
        AppCountItems,
        AppSearchBar,
        AppViewTitle,
    }
}
</script>
