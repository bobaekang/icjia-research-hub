<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm10 xl8>
          <v-layout align-end justify-space-between class="section-title">
            <h2>{{ title }}</h2>

            <router-link v-if="to" :to="to" class="font-lato small">
              see more
            </router-link>

            <a v-if="href" :href="href" class="font-lato small">
              see more
            </a>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    to: String,
    href: String
  }
}
</script>
