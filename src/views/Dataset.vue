<template>
    <div>
        <app-view-title :title="title" />

        <router-view search=''/>
    </div>
</template>

<script>
import AppViewTitle from '../components/ViewTitle';

export default {
    name: 'dataset',
    data () {
        return {
            title: 'Dataset',
        }
    },
    components: {
        AppViewTitle,
    },
}
</script>
