<template>
    <v-app>
        <app-toolbar />
            <router-view />
        <app-footer />
    </v-app>
</template>

<script>
import AppToolbar from './components/Toolbar'
import AppFooter from './components/Footer'

export default {
    components: {
        AppToolbar,
        AppFooter
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css?family=Oswald');

h1 {
    font-family: 'Oswald', sans-serif;
}

h1.view-title {
    border-bottom: 1px #ccc solid;
    padding-bottom: 8px;
}
</style>
