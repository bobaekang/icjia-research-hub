<template>
    <v-container fluid>
        <v-flex xs12 sm8 offset-sm2>
            <app-search-bar
                label="Search for apps"
                :search.sync="search"
                />
        </v-flex>

        <v-layout
            justify-center
            row
            wrap
            >
            <v-flex
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
import AppSearchBar from './SearchBar';
import appInfo from '@/assets/appInfo.json';

export default {
    data () {
        return {
            items: appInfo,
            search: ''
        }
    },
    computed: {
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
        AppSearchBar,
    }
}
</script>