<template>
    <div>
        <app-view-title :title="title"></app-view-title>
        
        <v-container grid-list-sm>
            <v-layout row wrap>
                <v-flex
                    xs10
                    offset-xs1
                    >
                    <h2>User Guide</h2>
                </v-flex>

                <v-flex
                    xs10
                    offset-xs1
                    >
                    <h2>API Documentation</h2>
                </v-flex>

                <v-flex
                    xs10
                    offset-xs1
                    >
                    <h2>Contributing Guidelines</h2>

                    <h3>Applications</h3>
                                       
                    <h3>Portal</h3>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import AppViewTitle from '../components/ViewTitle'

export default {
    name: 'resources',
    data () {
        return {
            title: "Resources"
        }
    },
    components: {
        AppViewTitle
    }
}
</script>