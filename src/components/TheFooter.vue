<template>
  <RHFooter :agency="agency" :github="github" />
</template>

<script>
export default {
  data() {
    return {
      agency: {
        name: 'Illinois Criminal Justice Information Authority',
        url: 'http://www.icjia.state.il.us/'
      },
      github: {
        url: '/',
        version: '0.1.0'
      }
    }
  }
}
</script>
