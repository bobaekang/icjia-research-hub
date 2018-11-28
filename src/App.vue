<template>
    <v-app>
        <app-toolbar />

        <router-view />

        <app-button-back-to-top />
         
        <app-footer />
    </v-app>
</template>

<script>
import AppToolbar from './components/Toolbar'
import AppButtonBackToTop from './components/ButtonBackToTop'
import AppFooter from './components/Footer' 

export default {
    components: {
        AppToolbar,
        AppButtonBackToTop,
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

.view-title {
    font-size: 2.5em;
    font-family: 'Oswald', sans-serif;
    color: white;
    background-color: #466c8c;
}
</style>
