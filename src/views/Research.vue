<template>
    <div>
        <app-view-title :title="title"></app-view-title>
        
        <v-container>
            <app-card-articles />        
        </v-container>
    </div>
</template>

<script>
import AppViewTitle from '../components/ViewTitle'
import AppCardArticles from '../components/CardArticles.vue'

export default {
    name: 'research',
    data () {
        return {
            title: "Research publication"
        }
    },
    components: {
        AppViewTitle,
        AppCardArticles
    }
}
</script>
