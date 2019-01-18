<template>
    <div>
        <v-container class="pb-3">
            <v-layout justify-center>
                <v-flex
                    xs12
                    sm10
                    xl8
                    >
                    <section-title
                        :title="title"
                        :path="path"
                        />
                </v-flex>
            </v-layout>
        </v-container>

        <v-carousel
            id="carousel"
            >
            <a
                v-for="(item,i) in items"
                :key="i"
                :href="item.url"
                target="_blank"
                style="text-decoration: none"
                >
                <v-carousel-item
                    :src="item.image.url"
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.33)"
                    >
                    <v-layout justify-center>
                        <v-flex
                            xs10
                            sm8
                            >
                            <h1
                                class="text-xs-center"
                                style="color:white; margin:15% 10% 0 10%"
                                >
                                {{ item.title }}
                            </h1>
                        </v-flex>
                    </v-layout>
                </v-carousel-item>
            </a>
        </v-carousel>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SectionTitle from '../components/SectionTitle';

export default {
    data () {
        return {
            title: 'Latest articles',
            path: 'research',
        }
    },
    computed: {
        ...mapGetters({
            items: 'articlesHome'
        })
    },
    components: {
        SectionTitle
    }
}
</script>

<style scoped>
.v-image__image:hover {
    background-color: grey;
    background-image: none;
}
</style>