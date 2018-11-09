<template>
    <v-container>
        <h1>Apps</h1>
        <app-card-app />
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
