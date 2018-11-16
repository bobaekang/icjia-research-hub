<template>
    <v-container>
        <h2>{{ title }}</h2>
        <ul>
            <li>User Guide</li>
            <li>Developer Guide</li>
        </ul>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            title: 'Resource info'
        }
    }
}
</script>