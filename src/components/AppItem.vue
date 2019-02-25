<template>
  <v-card class="ma-3">
    <v-img
      height="200px"
      :src="app.image"
      lazy-src="https://via.placeholder.com/1/DDDDDD"
    >
      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="grey lighten-3" />
      </v-layout>
    </v-img>

    <v-card-title primary-title>
      <div>
        <h3>
          <router-link :to="`/apps/${app.slug}`">
            {{ app.title }}
          </router-link>
        </h3>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :to="`/apps/${app.slug}`" flat>
        more
        <v-icon>more_horiz</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    app() {
      return this.item
    }
  }
}
</script>
