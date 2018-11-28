<template>
    <div>
        <div class="view-title">
            <v-container>
                <div class="text-xs" id="welcome-title">
                    The Home of the Illinois Criminal Justice Data and Research
                </div>
                <p id="welcome-body">
                    Welcome to the Illinois Crinimal Justice Information Authority (ICJIA) Data Portal.
                    Here you can find various criminal justice datasets, research publications
                    and resources to develop web applications, dashboards and more.
                </p>
            </v-container>
        </div>
        
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
    </div>
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

<style scoped>
#welcome-title {
    font-size: 1.1em;
}

#welcome-body {
    font-family: 'Lato', sans-serif;
    font-size: 0.6em;
}

</style>
