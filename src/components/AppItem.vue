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
        <h2>{{ app.title }}</h2>
        <span class="grey--text">{{ app.summary }}</span>
      </div>
    </v-card-title>

    <v-btn v-if="simple" :href="app.url" flat>Launch</v-btn>

    <template v-else>
      <v-card-actions>
        <v-btn :href="app.url" flat>Launch</v-btn>

        <v-spacer />

        <v-btn icon @click="app.showDescription = !app.showDescription">
          <v-icon>
            {{
              app.showDescription ? 'keyboard_arrow_down' : 'keyboard_arrow_up'
            }}
          </v-icon>
        </v-btn>
      </v-card-actions>

      <v-slide-y-transition>
        <v-card-text v-if="app.showDescription">{{
          app.description
        }}</v-card-text>
      </v-slide-y-transition>
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object,
    simple: Boolean
  },
  computed: {
    app() {
      return this.item
    }
  }
}
</script>
