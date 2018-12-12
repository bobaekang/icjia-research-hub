<template>
    <v-container fluid>
        <v-flex
            xs12
            sm8
            lg6
            offset-sm2
            offset-lg3
            >
            <app-search-bar
                label="Search for apps"
                :search.sync="search"
                />
        </v-flex>

        <v-flex xs12>
            <app-count-items
                :count="filterItems(editedItems).length"
                :item="item"
                />
        </v-flex>

        <v-layout
            justify-center
            row
            wrap
            >
            <v-flex
                lg3
                md4
                sm6
                xs12
                v-for="(item,i) in filterItems(editedItems)"
                :key="i"
                >
                
                <v-card class="ma-3">
                    <v-img
                        height="200px"
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

                    <v-card-title primary-title>
                        <div>
                            <h2>{{ item.title }}</h2>
                            <span class="grey--text">{{ item.subtitle }}</span>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn :href=item.url flat>Launch</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="item.showDesc = !item.showDesc">
                            <v-icon>{{ item.showDesc ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text v-if="item.showDesc">
                            {{ item.desc }}
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import AppCountItems from './CountItems';
import AppSearchBar from './SearchBar';
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            search: '',
            item: 'app'
        }
    },
    computed: {
        ...mapGetters({
            items: 'apps'
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
        AppCountItems,
        AppSearchBar,
    }
}
</script>