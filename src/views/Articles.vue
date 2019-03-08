<template>
  <div>
    <BaseViewTitle :home="false">
      <h1>{{ title }}</h1>
    </BaseViewTitle>

    <router-view search="" />
  </div>
</template>

<script>
import BaseViewTitle from '@/components/BaseViewTitle'

export default {
  name: 'articles',
  components: {
    BaseViewTitle
  },
  data() {
    return {
      title: 'Articles'
    }
  }
}
</script>
