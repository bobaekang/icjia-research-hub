<template>
    <div>
        <v-container>
            <v-container
                class="pb-0"
                >
                <v-flex
                    xs12
                    xl8
                    offset-xl2
                    >
                    <app-section-title-home :title="title" :path="path" />
                </v-flex>
            </v-container>
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
                        <v-flex
                            justify-center
                            align-center
                            xs12
                            xl8
                            offset-xl2
                            >
                            <h1
                                class="text-xs-center"
                                style="color:white; margin:15% 10% 0 10%"
                                >
                                {{ item.title }}
                            </h1>
                        </v-flex>
                    </v-container>
                </v-carousel-item>
            </a>
        </v-carousel>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppSectionTitleHome from '../components/SectionTitleHome';

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
        AppSectionTitleHome
    }
}
</script>

<style scoped>
.v-image__image:hover {
    background-color: grey;
    background-image: none;
}
</style>