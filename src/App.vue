<template>
  <v-app>
    <the-toolbar />

    <router-view />

    <the-button-back-to-top />

    <the-footer />
  </v-app>
</template>

<script>
import TheToolbar from '@/components/TheToolbar'
import TheButtonBackToTop from '@/components/TheButtonBackToTop'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheToolbar,
    TheButtonBackToTop,
    TheFooter
  }
}
</script>

<style>
.section-title {
  border-bottom: 1px #999 solid;
  text-transform: uppercase;
}

.v-messages {
  display: none;
}
</style>
