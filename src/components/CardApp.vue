<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex sm6 xs12
                v-for="(item,i) in items"
                :key="i"
                >
                
                <v-card class="ma-3">
                    <v-img
                        :src="item.img"
                        height="200px">
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{ item.title }}</div>
                            <span class="grey--text">{{ item.descShort }}</span>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn :href=item.url flat>Launch</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="item.show = !item.show">
                            <v-icon>{{ item.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text v-show="item.show">
                            {{ item.descLong }}
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                    title: "Application 1",
                    descShort: "This is an awesome application",
                    url: "http://www.icjia.state.il.us/",
                    show: false,
                    descLong: "More detailed description from the contributor."  
                },
                {
                    img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                    title: "Application 2",
                    descShort: "This is another application",
                    url: "http://www.icjia.state.il.us/",
                    show: false,
                    descLong: "More detailed description from the contributor."  
                },
                {
                    img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                    title: "Application 3",
                    descShort: "Yet another application",
                    url: "http://www.icjia.state.il.us/",
                    show: false,
                    descLong: "More detailed description from the contributor."  
                }
            ]
        }
    },
    methods: {
        toggleShow: function(item) {
            item.show = !item.show;
            return item.show;
        }
    }
}
</script>