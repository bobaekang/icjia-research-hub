<template>
    <div>
        <v-flex
            v-for="(item, i) in view($route.params.name)"
            :key="i"
            >
            <app-view-research-article :item="item"/>
        </v-flex>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppViewResearchArticle from '../components/ViewResearchArticle';

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
        AppViewResearchArticle,
    },
}
</script>