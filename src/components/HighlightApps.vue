<template>
    <v-container>
        <v-flex
            xs12
            xl8
            offset-xl2
            >
            <h2 class="section-title">
                {{ title }}
                <span
                    class="normaltext">
                    |
                    <router-link
                        :to="path">
                        {{ body }}
                    </router-link>
                </span>
            </h2>
        </v-flex>

        <v-layout
            justify-center
            row
            wrap
            >
            <v-flex
                lg3
                md4
                sm6
                xs12
                v-for="(item,i) in items"
                :key="i"
                >
                <v-card class="ma-3">
                    <v-img
                        height="200px"
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

                    <v-card-title primary-title>
                        <div>
                            <h2>{{ item.title }}</h2>
                            <span class="grey--text">{{ item.subtitle }}</span>
                        </div>
                    </v-card-title>

                    <v-btn :href=item.url flat>Launch</v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import appInfo from '@/assets/appInfo.json';

export default {
    data () {
        return {
            title: 'app highlights',
            body: 'see more',
            path: 'apps',
            items: appInfo.slice(0, 3),
        }
    }
}
</script>