<template>
  <div>
    <BaseViewTitle :home="false">
      <h3 class="light">
        <template>{{ 'ICJIA Research Hub' }}</template>
        <v-icon color="white">chevron_right</v-icon>
        <template>{{ title }}</template>
      </h3>
    </BaseViewTitle>

    <router-view search="" />
  </div>
</template>

<script>
import BaseViewTitle from '@/components/BaseViewTitle'

export default {
  name: 'apps',
  components: {
    BaseViewTitle
  },
  data() {
    return {
      title: 'Apps'
    }
  }
}
</script>
