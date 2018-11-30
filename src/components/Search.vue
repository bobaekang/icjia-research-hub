<template>
    <v-container>
        <v-layout
            justify-center
            row
            wrap
            >
            <v-flex
                xs12
                class="text-xs-center"
                >
                <h3>{{ titleUpper }}</h3>
                <v-icon x-large>arrow_drop_down</v-icon>
            </v-flex>
            
            <v-flex
                xs12
                sm9
                >
                <app-search-bar
                    label="Search"
                    :search.sync="search"
                    />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import AppSearchBar from './SearchBar';

export default {
    data () {
        return {
            title: 'get started and explore this data portal',
            search: ''
        }
    },
    computed: {
        titleUpper () {
            return this.title.toUpperCase();
        }
    },
    components: {
        AppSearchBar
    }
}
</script>