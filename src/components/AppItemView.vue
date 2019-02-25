<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <span class="small pl-2" style="color: #666">Apps</span>
        <v-icon>chevron_right</v-icon>
        {{ app.title }}
      </h2>

      <v-spacer />

      <v-btn flat exact to="/apps">Back</v-btn>
    </v-card-title>
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

<style></style>
