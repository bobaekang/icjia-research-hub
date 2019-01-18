<template>
        <v-progress-linear
            v-model="progress"
            class="screen-bottom"
            height="3"
            />
</template>

<script>
  export default {
    data () {
        return {
            progress: 0
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll (event) {
            let scrollPos = window.scrollY
            let docHeight = document.documentElement.scrollHeight
            let winHeight = window.innerHeight
            
            this.progress = 100 * scrollPos / (docHeight - winHeight)
        }
    },
  }
</script>

<style scoped>
.screen-bottom {
    position: fixed;
    left:0;
    bottom:0;
    margin:0;
}
</style>