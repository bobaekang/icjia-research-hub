<template>
    <div>
        <v-container style="padding-bottom:0">
            <h2>{{ title }}</h2>
        </v-container>

        <v-carousel
            id="carousel"
            >
            <a
                v-for="(item,i) in items"
                :key="i"
                :href="`http://www.icjia.state.il.us/articles/${item.filename}`"
                target="_blank"
                style="text-decoration: none"
                >
                <v-carousel-item
                    :src="`http://www.icjia.state.il.us/${item.splash}`"
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.33)"
                    >
                    <v-container>
                        <h1
                            class="text-xs-center"
                            style="color:white; margin:20% 10% 0 10%">
                            {{ item.title }}
                        </h1>
                    </v-container>
                </v-carousel-item>
            </a>
        </v-carousel>
    </div>
</template>

<script>
import articleInfo from '@/assets/articleInfo.json';

export default {
    data () {
        return {
            title: 'Latest articles',
            items: articleInfo.slice(0, 5)
        }
    }
}
</script>

<style scoped>
.v-image__image:hover {
    background-color: grey;
    background-image: none;
}
</style>