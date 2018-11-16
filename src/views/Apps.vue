<template>
    <v-container>
        <v-flex sm10 offset-sm1>
            <h1 class="view-title">Applications</h1>
            <app-card-app />
        </v-flex>
    </v-container>
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
