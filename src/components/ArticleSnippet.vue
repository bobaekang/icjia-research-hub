<template>
    <v-container>
        <v-container
            class="article-snippet mb-3"
            v-for="(item,i) in items"
            :key="i"
            >
            <h2>{{ item.title }}</h2>
            <h4>{{ item.publishDate }}</h4>
            <v-container>{{ item.summary }}</v-container>
            <h4>by {{ item.author }}</h4>
        </v-container>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    title: 'First article',
                    publishDate: '2019-01-01',
                    author: 'author',
                    summary: 'Hi there'
                },
                {
                    title: 'Second article',
                    publishDate: '2019-01-01',
                    author: 'author',
                    summary: 'Hi there'
                }
            ]
        }
    }
}
</script>

<style scoped>
.article-snippet {
    border: 1px solid #ccc;
}
</style>
