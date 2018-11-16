<template>
    <v-container>
        <h1>Welcome to ICJIA Data Portal</h1>
        
        <hr>

        <app-search />
        
        <hr>
        
        <app-carousel-article />
        
        <hr>
        
        <app-highlight-apps />
        
        <hr>
        
        <app-resource-info />
        
        <div style="height:500px">
        </div>
    </v-container>
</template>

<script>
import AppSearch from '../components/Search'
import AppCarouselArticle from '../components/CarouselArticle'
import AppHighlightApps from '../components/HighlightApps'
import AppResourceInfo from '../components/ResourceInfo'

export default {
    components: {
        AppSearch,
        AppCarouselArticle,
        AppHighlightApps,
        AppResourceInfo
    }
}
</script>
