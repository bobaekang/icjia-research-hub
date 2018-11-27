<template>
    <v-container>
        <v-container
            class="article-snippet mb-3"
            v-for="(item,i) in items"
            :key="i"
            >
            <h2>{{ item.title }}</h2>
            <h4>{{ item.date }}</h4>
            <v-container>{{ item.teaser }}</v-container>
            <h4>by {{ item.authors.join(', ') }}</h4>
        </v-container>
    </v-container>
</template>

<script>
import articleInfo from '@/assets/articleInfo.json';

export default {
    data () {
        return {
            items: articleInfo
        }
    }
}
</script>

<style scoped>
.article-snippet {
    border: 1px solid #ccc;
}

iframe {
    width: 100%;
    height: 500px;
}

iframe > #document {
    display: none;
}
</style>
