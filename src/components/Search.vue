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
                md9
                xl6
                >
                <v-form @submit.prevent="onSubmit">
                    <v-text-field
                        @keyup.enter="submit"
                        v-model="search"
                        label="Search this Data Portal"
                        append-outer-icon="search"
                        solo
                        />
                </v-form>
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
            search: '',
        }
    },
    computed: {
        titleUpper () {
            return this.title.toUpperCase();
        },
    },
    methods: {
        onSubmit () {
            this.$router.push({
                name: 'datasetSearch',
                params: {
                    search: this.search
                }
            });
        }
    },
    components: {
        AppSearchBar
    }
}
</script>