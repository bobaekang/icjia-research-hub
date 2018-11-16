<template>
    <v-container>
        <v-flex sm10 offset-sm1>
            <h1 class="view-title">Research</h1>
            <app-article-snippet />
        </v-flex>
    </v-container>
</template>

<script>
import AppArticleSnippet from '../components/ArticleSnippet.vue'

export default {
    name: 'research',
    components: {
        AppArticleSnippet
    }
}
</script>
