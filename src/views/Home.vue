<template>
    <v-container>
        <h1>Welcome to ICJIA Data Portal</h1>
        
        <br><br>
        <hr>
        <br><br>
        
        <h2>Searchbar for Data</h2>
        <h3>With tag-specific buttons</h3>
        
        <br><br>
        <hr>
        <br><br>
        
        <h2>Latest featured Articles</h2>
        <app-carousel-article />
        
        <br><br>
        <hr>
        <br><br>
        
        <h2>App highlights</h2>
        
        <br><br>
        <hr>
        <br><br>
        
        <h2>Resource links</h2>
        <ul>
            <li>User Guide</li>
            <li>Developer Guide</li>
        </ul>
    </v-container>
</template>

<script>
import AppCarouselArticle from '../components/CarouselArticle'

export default {
    components: {
        AppCarouselArticle
    }
}
</script>
