<template>
    <div>
        <app-view-title :title="title"></app-view-title>

        <v-container>
            <app-card-apps />      
        </v-container> 
    </div>
</template>

<script>
import AppViewTitle from '../components/ViewTitle'
import AppCardApps from '../components/CardApps'

export default {
    name: 'apps',
    data () {
        return {
            title: 'Applications'
        }
    },
    components: {
        AppViewTitle,
        AppCardApps
    }
}
</script>
