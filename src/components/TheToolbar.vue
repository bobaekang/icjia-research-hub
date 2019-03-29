<template>
  <div>
    <v-toolbar id="toolbar" :height="hpixel" fixed scroll-off-screen>
      <a class="hidden-sm-and-down" :href="logo.href" target="_blank">
        <img :src="logo.url" :height="logoHpixel" alt="logo" />
      </a>

      <router-link to="/">
        <v-toolbar-title>{{ titleUpper }}</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="view in views" :key="view" :to="`/${view}`" flat>
          <template>{{ view }}</template>
        </v-btn>

        <v-btn :href="docs_url" target="_blank" flat>documentation</v-btn>
      </v-toolbar-items>

      <v-btn class="hidden-md-and-up" flat icon @click="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <div :style="{ height: hpixel, backgroundColor: '#466c8c' }"></div>

    <v-navigation-drawer v-model="drawer" temporary right app width="175">
      <v-list class="slot">
        <v-list-tile v-for="(view, i) in views" :key="i" :to="`/${view}`">
          <v-list-tile-title>{{ view }}</v-list-tile-title>
        </v-list-tile>

        <v-list-tile :href="docs_url">
          <v-list-tile-title>documentation</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      height: 60,
      title: 'Research Hub',
      views: ['about', 'apps', 'articles', 'datasets'],
      logo: {
        url:
          'http://www.icjia.state.il.us/_themes/icjia/img/logo-icjia-small-blue-3.png',
        href: 'http://www.icjia.state.il.us'
      },
      drawer: null
    }
  },
  computed: {
    ...mapState('docs', {
      docs_url: 'url'
    }),
    titleUpper() {
      return this.title.toUpperCase()
    },
    hpixel() {
      return `${this.height}px`
    },
    logoHpixel() {
      return `${this.height * 0.9}px`
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}

img {
  margin-right: 10px;
}

#toolbar {
  font-family: 'Lato';
  box-shadow: 0 2px rgba(0, 0, 0, 0.2);
}

.slot {
  font-family: 'Lato';
  font-size: 0.8em;
  text-transform: uppercase;
  text-align: center;
}
</style>
