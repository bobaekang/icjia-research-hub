<template>
    <div>
        <the-view-title :title="title" />
        
        <router-view search="" />
    </div>
</template>

<script>
import TheViewTitle from '../components/TheViewTitle';

export default {
    name: 'research',
    data () {
        return {
            title: 'Research publication',
        }
    },
    components: {
        TheViewTitle,
    },
}
</script>
