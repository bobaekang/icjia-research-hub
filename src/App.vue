<template>
  <v-app>
    <the-toolbar />

    <router-view />

    <the-button-back-to-top />

    <the-footer />
  </v-app>
</template>

<script>
const TheToolbar = () => import('@/components/TheToolbar')
const TheButtonBackToTop = () => import('@/components/TheButtonBackToTop')
const TheFooter = () => import('@/components/TheFooter')

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
