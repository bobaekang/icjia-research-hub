<template>
    <div>
        <div class="view-title">
            <v-container>
                <v-flex sm10>
                    Applications
                </v-flex>
            </v-container>
        </div>
        <v-container>
            <app-card-app />      
        </v-container> 
    </div>

    <!-- <v-container>
        <v-flex sm10 offset-sm1>
            <h1 class="view-title">Applications</h1>
            <app-card-app />
        </v-flex>
    </v-container> -->
</template>

<script>
import AppCardApp from '../components/CardApp'

export default {
    name: 'apps',
    components: {
        AppCardApp
    }
}
</script>
