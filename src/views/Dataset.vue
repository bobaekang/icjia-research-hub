<template>
    <div>
        <app-view-title :title="title"></app-view-title>
        
        <v-container>
            <app-card-datasets />      
        </v-container> 
    </div>
</template>

<script>
import AppViewTitle from '../components/ViewTitle'
import AppCardDatasets from '../components/CardDatasets'

export default {
    name: 'dataset',
    data () {
        return {
            title: "Dataset"
        }
    },
    components: {
        AppViewTitle,
        AppCardDatasets
    }
}
</script>
