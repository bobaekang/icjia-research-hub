<template>
    <div>
        <v-flex
            v-for="(item, i) in view($route.params.name)"
            :key="i"
            >
            <article-item-view :item="item"/>

            <the-progess-bar />
        </v-flex>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleItemView from '../components/ArticleItemView';
import TheProgessBar from '../components/TheProgressBar';

export default {
    components: {
        ArticleItemView,
        TheProgessBar,
    },
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
}
</script>