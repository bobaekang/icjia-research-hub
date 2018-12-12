<template>
    <v-card>
        <v-layout row>
            <v-img
                class="hidden-sm-and-down"
                :src="item.imgUrl"
                lazy-src="https://via.placeholder.com/1/DDDDDD"
                >
                <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                    >
                    <v-progress-circular
                        indeterminate color="grey lighten-3"
                        />
                </v-layout>
            </v-img>
            <v-layout
                column
                justify-space-between
                class="article-body"
                >
                <div>
                    <v-container class="py-2">
                        <v-layout row wrap>
                            <h3>{{ item.title }}</h3>

                            <app-chip-card :name="item.pubtype" />
                            <app-chip-card :name="item.area" />
                        </v-layout>
                    </v-container>
                    
                    <v-divider />
                    
                    <v-container class="small sans-serif py-2">
                        <div class="pb-2">
                            <span class="ma-0 bold">Updated</span>
                            {{ item.date }}
                        </div>
                        <div class="pb-2">
                            <span class="ma-0 bold">Authors</span>
                            {{ item.authors }}
                        </div>
                    </v-container>
                </div>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        v-if="item.teaser"
                        @click="item.showTeaser = !item.showTeaser"
                        flat
                        >
                        summary
                        <v-icon>{{ item.showTeaser ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    <v-btn
                        :href="item.url"
                        target="_blank"
                        flat>
                        full
                        <v-icon>open_in_new</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                    <v-card-text v-if="item.showTeaser">
                        {{ item.teaser }}
                    </v-card-text>
                </v-slide-y-transition>
            </v-layout>
        </v-layout>
    </v-card>
</template>

<script>
import AppChipCard from './ChipCard';

export default {
    props: {
        item: Object,
    },
    components: {
        AppChipCard,
    }
}
</script>

<style scoped>
.article-body {
    width: 100px;
}

.sans-serif {
    font-family: 'Lato', sans-serif;
}

.small {
    font-size: 0.8em
}

.bold {
    font-weight: bold;
}
</style>
