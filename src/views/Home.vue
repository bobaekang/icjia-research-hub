<template>
    <div>
        <div class="view-title">
            <v-container>
                <div id="home-title">
                    {{ title }}
                </div>
                <p id="home-subtitle">
                    {{ subtitle }}
                </p>
            </v-container>
        </div>

        <div style="background-color:#ddd;">
            <app-search />
        </div>

        <app-carousel-article />
        
        <div style="background-color:#ddd;">
            <app-highlight-apps />
        </div>
            
        <app-resource-info />
            
        <div style="height:500px"></div>
        </div>
    </div>
</template>

<script>
import AppSearch from '../components/Search'
import AppCarouselArticle from '../components/CarouselArticle'
import AppHighlightApps from '../components/HighlightApps'
import AppResourceInfo from '../components/ResourceInfo'

export default {
    data () {
        return {
            title: 'The Home of the Illinois Criminal Justice Data and Research',
            subtitle: 'Welcome to the Illinois Crinimal Justice Information Authority (ICJIA) Data Portal. Here you can find various criminal justice datasets, research publications and resources to develop web applications, dashboards and more.'
        }
    },
    components: {
        AppSearch,
        AppCarouselArticle,
        AppHighlightApps,
        AppResourceInfo
    }
}
</script>

<style scoped>
#home-title {
    font-size: 1.1em;
}

#home-subtitle {
    font-family: 'Lato', sans-serif;
    font-size: 0.6em;
}
</style>
