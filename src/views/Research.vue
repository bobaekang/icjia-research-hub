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
    components: {
        TheViewTitle,
    },
    data () {
        return {
            title: 'Research publication',
        }
    },
}
</script>
