<template>
    <div>
        <div class="view-title">
            <v-container>
                <v-flex sm10>
                    Research publication
                </v-flex>
            </v-container>
        </div>
        <v-container>
            <app-article-snippet />        
        </v-container>
    </div>
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
