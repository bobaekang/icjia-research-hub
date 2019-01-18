<template>
    <div>
        <the-view-title :title="title" />

        <router-view search="" />
    </div>
</template>

<script>
import TheViewTitle from '../components/TheViewTitle'

export default {
    name: 'apps',
    data () {
        return {
            title: 'Applications',
        }
    },
    components: {
        TheViewTitle,
    }
}
</script>
