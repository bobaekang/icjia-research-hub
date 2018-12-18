<template>
    <div>
        <app-view-title :title="title" />
        
        <router-view search="" />
    </div>
</template>

<script>
import AppViewTitle from '../components/ViewTitle';

export default {
    name: 'research',
    data () {
        return {
            title: 'Research publication',
        }
    },
    components: {
        AppViewTitle,
    },
}
</script>
