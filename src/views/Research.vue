<template>
    <div>
        <app-view-title :title="title"></app-view-title>
        
        <router-view search=""></router-view>
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
