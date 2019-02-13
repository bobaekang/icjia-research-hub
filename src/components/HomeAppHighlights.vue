<template>
    <v-container>
        <v-layout
            row
            wrap
            justify-center
            >
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

        <v-layout
            row
            wrap
            justify-center
            >
            <v-flex
                xs12
                sm6
                md4
                lg3
                v-for="(item,i) in items"
                :key="i"
                >
                <app-item :item="item" :simple="isSimpleCard" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AppItem from './AppItem'
import SectionTitle from './SectionTitle';

export default {
    components: {
        AppItem,
        SectionTitle,
    },
    data () {
        return {
            title: 'app highlights',
            path: 'app',
            isSimpleCard: true
        }
    },
    computed: {
        ...mapGetters({
            items: 'appsHome'
        })
    },
}
</script>