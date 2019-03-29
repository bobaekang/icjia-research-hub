<template>
  <v-footer height="auto">
    <v-layout justify-center row wrap>
      <v-flex text-xs-center>
        <span>
          <template>{{ copy + ' ' + year + ' ' }}</template>
          <a :href="agency.url">{{ agency.name }}</a>
        </span>
        <template>{{ ' | ' }}</template>
        <span>
          <a :href="github.url">
            <template>{{ version + ' ' }}</template>
            <v-icon>{{ github.icon }}</v-icon>
          </a>
        </span>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      copy: '©',
      year: new Date().getFullYear(),
      agency: {
        name: 'Illinois Criminal Justice Information Authority',
        url: 'http://www.icjia.state.il.us/'
      },
      version: '0.1.0',
      github: {
        icon: 'fa fa-github',
        url: 'https://github.com/bobaekang/icjia-data-portal-proto'
      }
    }
  }
}
</script>

<style>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
