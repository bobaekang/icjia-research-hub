<template>
    <div>
        <v-flex
            v-for="(item, i) in view($route.params.name)"
            :key="i"
            >
            <research-item-view :item="item"/>
        </v-flex>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ResearchItemView from '../components/ResearchItemView';

export default {
    computed: {
        ...mapGetters({
            items: 'articles',
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
        ResearchItemView,
    },
}
</script>