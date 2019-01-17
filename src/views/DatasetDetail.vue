<template>
    <v-container>
        <v-layout justify-center>
            <v-flex
                xs12
                sm10
                md8
                v-for="(item, i) in view($route.params.name)"
                :key="i"
                >
                <app-card-dataset-detail :item="item"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCardDatasetDetail from '../components/CardDatasetDetail';

export default {
    computed: {
        ...mapGetters({
            items: 'datasets',
        })
    },
    methods: {
        view (slug) {
            return this.items.filter(item => {
                return item.slug === slug;
            });
        }
    },
    components: {
        AppCardDatasetDetail,
    },
}
</script>