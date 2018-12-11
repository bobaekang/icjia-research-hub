<template>
    <div>
        <div class="view-title">
            <v-container class="pb-1">
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
                    <p class="normaltext text-xs-right">
                        <v-btn to="about" flat color="#ddd">
                                {{ about }}
                        </v-btn>
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
                <app-card-apps-highlight />
            </v-container>

            <v-container v-if="i==4">
                <app-info-resources />
            </v-container>
        </div>
            
        <div style="height:100px"></div>
    </div>
</template>

<script>
import AppSearch from '../components/Search'
import AppCarouselArticles from '../components/CarouselArticles'
import AppCardAppsHighlight from '../components/CardAppsHighlight'
import AppInfoResources from '../components/InfoResources'

export default {
    data () {
        return {
            title: 'The Home of the Illinois Criminal Justice Data and Research',
            subtitle: 'Welcome to the Illinois Crinimal Justice Information Authority (ICJIA) Data Portal. Here you can find various criminal justice datasets, research publications and resources to develop web applications, dashboards and more.',
            about: 'About this Data Portal'.toUpperCase()
        }
    },
    components: {
        AppSearch,
        AppCarouselArticles,
        AppCardAppsHighlight,
        AppInfoResources
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
    background-color: #eee;
}
</style>
