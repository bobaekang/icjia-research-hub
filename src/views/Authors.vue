<template>
  <div>
    <BaseViewTitle :home="false">
      <h3 class="light">
        <template>{{ 'ICJIA Research Hub' }}</template>
        <v-icon color="white">chevron_right</v-icon>
        <span>{{ title }}</span>
      </h3>
    </BaseViewTitle>

    <router-view />
  </div>
</template>

<script>
const BaseViewTitle = () => import('@/components/BaseViewTitle')

export default {
  name: 'authors',
  components: {
    BaseViewTitle
  },
  data() {
    return {
      title: 'Authors'
    }
  }
}
</script>
