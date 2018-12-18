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
                    label="Search for apps"
                    :search.sync="search"
                    />
            </v-flex>

            <v-flex xs12>
                <app-count-items
                    :count="filterItems(items).length"
                    :item="item"
                    />
            </v-flex>
        </v-layout>

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
                v-for="(item,i) in filterItems(items)"
                :key="i"
                >
                <app-card-apps :item="item" :simple="isSimpleCard" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCardApps from '../components/CardApps'
import AppCountItems from '../components/CountItems';
import AppSearchBar from '../components/SearchBar';

export default {
    props: {
        search: String,
    },
    data () {
        return {
            title: 'Applications',
            search: '',
            item: 'app',
            isSimpleCard: false,
        }
    },
    computed: {
        ...mapGetters({
            items: 'apps'
        })
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
        AppCardApps,
        AppCountItems,
        AppSearchBar,
    }
}
</script>