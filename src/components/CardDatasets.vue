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
                <v-card>
                    <v-card-title primary-title>
                        <h2 class="pr-2">{{ item.title }}</h2>
                        
                        <app-chip-card :name="item.initialCategory" />
                        <app-chip-card :name="item.juvenileAdult" />
                    </v-card-title>

                    <v-divider />
                    
                    <div>
                        <v-layout row wrap>
                            <v-flex
                                xs12
                                sm9
                                >
                                <v-container class="small sans-serif py-2">
                                    <span class="bold pr-2">Keywords</span>
                                    <span
                                        v-if="item.keywords"
                                        >
                                        <span
                                            v-for="(keyword, i) in item.keywords"
                                            :key="i">
                                            {{ item.keywords }}
                                        </span>
                                    </span>
                                    <span class="italic">No keywords</span>
                                </v-container>

                                <v-container>
                                    {{ item.summary }}
                                </v-container>
                            </v-flex>
                            
                            <v-divider
                                vertical
                                class="hidden-sm-and-down"
                                />

                            <v-flex
                                sm2
                                class="small sans-serif hidden-sm-and-down"
                                >
                                <v-container
                                    class="py-2"
                                    >
                                    <div class="pb-2">
                                        <p class="ma-0 bold">Updated</p>
                                        {{ item.date }}
                                    </div>
                                    <div class="pb-2">
                                        <p class="ma-0 bold">Time Period</p>
                                        {{ item.timePeriodDesc }}
                                    </div>
                                    <div>
                                        <p class="ma-0 bold">Agency</p>
                                        <a :href="item.agencyLink">
                                            {{ item.agencyName }}
                                        </a>
                                    </div>
                                </v-container>
                            </v-flex>

                            <v-flex
                                xs12
                                class="small sans-serif hidden-md-and-up"
                                >
                                <v-divider />
                                <v-container
                                    class="py-2"
                                    >
                                    <div class="pb-2">
                                        <span class="ma-0 bold">Updated</span>
                                        {{ item.date }}
                                    </div>
                                    <div class="pb-2">
                                        <span class="ma-0 bold">Time Period</span>
                                        {{ item.timePeriodDesc }}
                                    </div>
                                    <div>
                                        <span class="ma-0 bold">Agency</span>
                                        <a :href="item.agencyLink">
                                            {{ item.agencyName }}
                                        </a>
                                    </div>
                                </v-container>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import AppChipCard from './ChipCard';
import AppCountItems from './CountItems';
import AppSearchBar from './SearchBar';
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            search: '',
            item: 'dataset'
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
        AppChipCard,
        AppCountItems,
        AppSearchBar,
    }
}
</script>

<style scoped>
.sans-serif {
    font-family: 'Lato', sans-serif;
}

.small {
    font-size: 0.8em
}

.bold {
    font-weight: bold;
}

.italic {
    font-style: italic;
}

.uppercase {
    text-transform: uppercase;
}
</style>