<template>
    <div>
        <app-view-title :title="title"></app-view-title>
        
        <v-container>
            <app-article-snippet />        
        </v-container>
    </div>
</template>

<script>
import AppViewTitle from '../components/ViewTitle'
import AppArticleSnippet from '../components/ArticleSnippet.vue'

export default {
    name: 'research',
    data () {
        return {
            title: "Research publication"
        }
    },
    components: {
        AppViewTitle,
        AppArticleSnippet
    }
}
</script>
