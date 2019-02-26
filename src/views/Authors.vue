<template>
  <div>
    <BaseViewTitle :home="false">
      <h1>{{ title }}</h1>
    </BaseViewTitle>

    <router-view />
  </div>
</template>

<script>
import BaseViewTitle from '@/components/BaseViewTitle'

export default {
  name: 'author',
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
