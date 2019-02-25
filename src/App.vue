<template>
  <v-app>
    <the-toolbar />

    <router-view />

    <the-button-back-to-top />

    <the-footer />
  </v-app>
</template>

<script>
import TheToolbar from './components/TheToolbar'
import TheButtonBackToTop from './components/TheButtonBackToTop'
import TheFooter from './components/TheFooter'

export default {
  components: {
    TheToolbar,
    TheButtonBackToTop,
    TheFooter
  },
  created() {
    this.$store.dispatch('fetchData')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css?family=Oswald');
@import url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic');

.application {
  color: #333;
  font-family: 'Gentium Book Basic', serif;
  font-size: 16px;
}

h1 {
  font-family: 'Oswald', sans-serif;
}

h2,
h3 {
  font-family: 'Lato', sans-serif;
}

a {
  text-decoration: none;
}

.v-btn {
  font-family: 'Lato', sans-serif;
}

.view-title {
  font-size: 2em;
  font-family: 'Oswald', sans-serif;
  color: white;
  background-color: #466c8c;
}

.section-title {
  border-bottom: 1px #999 solid;
  text-transform: uppercase;
}

.sans-serif {
  font-family: 'Lato', sans-serif;
}

.small {
  font-size: 0.8em;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.v-messages {
  display: none;
}
</style>
