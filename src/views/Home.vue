<template>
  <div>
    <BaseViewTitle :home="true">
      <h1>{{ title }}</h1>

      <p class="font-lato large">{{ subtitle }}</p>

      <p class="text-xs-right">
        <v-btn to="about" flat color="#ddd">
          {{ about }}
        </v-btn>
      </p>
    </BaseViewTitle>

    <div v-for="i in 4" :key="i" :class="{ 'grey-background': i % 2 == 1 }">
      <HomeSearch v-if="i == 1" />

      <HomeLatestArticles v-if="i == 2" />

      <HomeAppHighlights v-if="i == 3" />

      <HomeDocumentation v-if="i == 4" />
    </div>

    <div style="height:100px"></div>
  </div>
</template>

<script>
import BaseViewTitle from '@/components/BaseViewTitle'
import HomeAppHighlights from '@/components/HomeAppHighlights'
import HomeDocumentation from '@/components/HomeDocumentation'
import HomeLatestArticles from '@/components/HomeLatestArticles'
import HomeSearch from '@/components/HomeSearch'

export default {
  components: {
    BaseViewTitle,
    HomeAppHighlights,
    HomeDocumentation,
    HomeLatestArticles,
    HomeSearch
  },
  data() {
    return {
      title: 'The Home of the Illinois Criminal Justice Data and Research',
      subtitle:
        'Welcome to the Illinois Crinimal Justice Information Authority (ICJIA) Research Hub. Here you can find various criminal justice datasets, research publications and resources to develop web applications, dashboards and more.',
      about: 'About this Research Hub'
    }
  }
}
</script>

<style scoped>
.large {
  font-size: 1.2em;
}
.grey-background {
  background-color: #eee;
}
</style>
