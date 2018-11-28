<template>
    <v-layout row wrap>
        <v-flex
            xs10
            offset-xs1
            class="mb-3"
            v-for="(item,i) in items"
            :key="i"
            >
            <v-card class="article-card">
                <v-layout row>
                    <v-img
                        :src="`http://www.icjia.state.il.us/${item.splash}`"
                        />
                    <v-layout
                        column
                        justify-space-between
                        class="article-body"
                        >
                        <div>
                            <h3>{{ item.title }}</h3>
                            <h5>by {{ item.authors.join(', ') }}</h5>
                            <h5>{{ item.date }}</h5>
                        </div>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat @click="item.show = !item.show">
                                summary
                                <v-icon>{{ item.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                            </v-btn>
                            <v-btn
                                :href="`http://www.icjia.state.il.us/articles/${item.filename}`"
                                target="_blank"
                                flat>
                                full
                            </v-btn>
                        </v-card-actions>

                        <v-slide-y-transition>
                            <v-card-text v-show="item.show">
                                {{ item.teaser }}
                            </v-card-text>
                        </v-slide-y-transition>
                    </v-layout>

                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
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
    /* border: 1px solid #ccc; */
}

.article-card {
    overflow: hidden;
	width: 100%;

	border-radius: 0.1em;
}

.article-card img {
	width: 240px;
	height: 200px;

	object-fit: cover;
}

.article-body {
    padding: 0.8em 1.3em;
    max-width: 540px;
}

iframe {
    width: 100%;
    height: 500px;
}

iframe > #document {
    display: none;
}
</style>
