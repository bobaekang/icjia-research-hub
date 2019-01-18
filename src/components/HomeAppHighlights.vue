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
                <apps-item :item="item" :simple="isSimpleCard" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AppsItem from './AppsItem'
import SectionTitle from './SectionTitle';

export default {
    components: {
        AppsItem,
        SectionTitle,
    },
    data () {
        return {
            title: 'app highlights',
            path: 'apps',
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