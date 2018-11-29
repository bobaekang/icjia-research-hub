<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex
                md4
                sm6
                xs12
                v-for="(item,i) in editedItems"
                :key="i"
                >
                
                <v-card class="ma-3">
                    <v-img
                        :src="item.imgUrl"
                        height="200px">
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{ item.title }}</div>
                            <span class="grey--text">{{ item.subtitle }}</span>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn :href=item.url flat>Launch</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="item.showDesc = !item.showDesc">
                            <v-icon>{{ item.showDesc ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text v-if="item.showDesc">
                            {{ item.desc }}
                        </v-card-text>
                    </v-slide-y-transition>
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
            items: appInfo
        }
    },
    computed: {
        editedItems () {
            return this.items.map(item => {
                return item;
            });
        }
    }
}
</script>