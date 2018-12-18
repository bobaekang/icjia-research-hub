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
                <app-section-title-home
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