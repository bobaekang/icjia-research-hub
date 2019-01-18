<template>
    <div>
        <the-view-title :title="title" />
        
        <v-container>
            <v-layout
                row
                wrap
                justify-center
                >
                <v-flex
                    xs12
                    sm10
                    xl8
                    >
                    <h2 class="section-title">User Guide</h2>
                </v-flex>

                <v-flex
                    xs12
                    sm10
                    xl8
                    >
                    <h2 class="section-title">API Documentation</h2>
                </v-flex>

                <v-flex
                    xs12
                    sm10
                    xl8
                    >
                    <h2 class="section-title">Contributing Guidelines</h2>

                    <h3>Applications</h3>
                                       
                    <h3>Portal</h3>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import TheViewTitle from '../components/TheViewTitle'

export default {
    name: 'resources',
    components: {
        TheViewTitle
    },
    data () {
        return {
            title: "Resources"
        }
    },
}
</script>