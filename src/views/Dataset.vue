<template>
    <div>
        <app-view-title :title="title"></app-view-title>
        
        <v-container>
            body
        </v-container>
    </div>
</template>

<script>
import AppViewTitle from '../components/ViewTitle'

export default {
    name: 'dataset',
    data () {
        return {
            title: "Dataset"
        }
    },
    components: {
        AppViewTitle
    }
}
</script>
