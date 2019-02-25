<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 lg4>
        <v-list subheader>
          <v-subheader>ICJIA Research Hub Article authors</v-subheader>

          <template v-for="(item, i) in items">
            <v-list-tile :key="i" :to="`/authors/${item.slug}`">
              <v-list-tile-content class="text-xs-center">
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider :key="i"></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      items: 'authors'
    })
  }
}
</script>
