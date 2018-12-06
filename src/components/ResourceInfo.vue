<template>
    <v-container>
        <v-flex
            xs12
            xl8
            offset-xl2
            >
            <h2 class="section-title">
                {{ title }}
                <span
                    class="normaltext"
                    >
                    |
                    <router-link :to="path">
                        {{ body }}
                    </router-link>
                </span>
            </h2>
        
            <v-layout
                row
                wrap
                >
                <v-flex
                    xs12
                    sm4
                    v-for="(item,i) in items"
                    :key="i"
                    >
                    <v-container class="pb-0">
                        <h3>{{ item.title.toUpperCase() }}</h3>
                        <p class="resource-item">{{ item.body }}</p>
                    </v-container>
                    
                    <v-btn
                        :to="item.url"
                        flat
                        >
                        open
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            title: 'resources',
            body: 'see more',
            path: 'resources',
            items: [
                {
                    title: 'User Guide',
                    body: 'New to the Data Portal? Read to find out more about navigating the Data Portal like a pro.',
                    url: '#'
                },
                {
                    title: 'API Documentation',
                    body: 'Learn how to use the Data Portal API to obtain data, analyze them, and develop awesome applications.',
                    url: '#'
                },
                {
                    title: 'Contributing Guidelines',
                    body: 'Need help! Find out how to make contributions to the Data Portal and have your work recognized.',
                    url: '#'
                }
            ]
        }
    }
}
</script>

<style scoped>
.resource-item {
    font-size: 1.2em;
}
</style>