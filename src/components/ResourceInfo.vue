<template>
    <v-container>
        <v-flex
            xs12
            xl8
            offset-xl2
            >
            <h2>{{ title }}</h2>
            <ul>
                <li>User Guide</li>
                <li>Developer Guide</li>
            </ul>
        </v-flex>
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