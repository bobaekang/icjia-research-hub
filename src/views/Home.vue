<template>
    <div>
        <div class="view-title">
            <v-container>
                <v-flex
                    xs12
                    xl8
                    offset-xl2
                    >
                    <div id="home-title">
                        {{ title }}
                    </div>
                    <p id="home-subtitle">
                        {{ subtitle }}
                    </p>
                </v-flex>
            </v-container>
        </div>

        <div
            v-for="i in 4"
            :key="i"
            :class="{ 'grey-background':i % 2 == 1 }"
            >
            <app-search v-if="i==1"/>

            <app-carousel-article v-if="i==2"/>

            <v-container v-if="i==3" >
                <app-highlight-apps/>
            </v-container>

            <v-container v-if="i==4">
                <app-resource-info />
            </v-container>
        </div>
            
        <div style="height:500px"></div>
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

.grey-background {
    background-color: #ddd;
}
</style>
