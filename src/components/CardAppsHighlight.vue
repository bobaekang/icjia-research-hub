<template>
    <v-container>
        <v-flex
            xs12
            xl8
            offset-xl2
            >
            <app-section-title-home :title="title" :path="path" />
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
                <app-card-apps :item="item" :simple="isSimpleCard" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCardApps from './CardApps'
import AppSectionTitleHome from './SectionTitleHome';

export default {
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
    components: {
        AppCardApps,
        AppSectionTitleHome,
    }
}
</script>