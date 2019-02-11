<template>
    <v-container>
        <v-layout
            justify-center
            >
            <v-flex
                xs12
                sm10
                xl8
                >
                <section-title
                    :title="title"
                    :path="docs_url"
                    />
            
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

                        <v-divider class="hidden-sm-and-up" />
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import SectionTitle from '../components/SectionTitle';

export default {
    components: {
        SectionTitle
    },
    data () {
        return {
            title: 'documentation',
            items: [
                {
                    title: 'User Guide',
                    body: 'New to the Research Hub? Read to find out more about navigating the Research Hub like a pro.',
                    url: ''
                },
                {
                    title: 'API Documentation',
                    body: 'Learn how to use the Research Hub API to obtain data, analyze them, and develop awesome applications.',
                    url: ''
                },
                {
                    title: 'Contributing Guidelines',
                    body: 'Need help! Find out how to make contributions to the Research Hub and have your work recognized.',
                    url: ''
                }
            ]
        }
    },
    computed: {
        ...mapGetters({
            docs_url: 'docs_url',
        }),
    },
}
</script>

<style scoped>
.docs-item {
    font-size: 1.2em;
}
</style>