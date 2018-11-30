<template>
    <div>
        <app-view-title :title="title"></app-view-title>

        <v-container>
            <app-card-app />      
        </v-container> 
    </div>
</template>

<script>
import AppViewTitle from '../components/ViewTitle'
import AppCardApp from '../components/CardApp'

export default {
    name: 'apps',
    data () {
        return {
            title: 'Applications'
        }
    },
    components: {
        AppViewTitle,
        AppCardApp
    }
}
</script>
