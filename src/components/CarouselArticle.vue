<template>
    <v-container>
        <h2>{{title}}</h2>
        <v-carousel hide-controls>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src">
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            title: 'Latest articles',
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
            ]
        }
    }
}
</script>