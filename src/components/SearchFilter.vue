<template>
    <div class="pb-3">
        <v-btn flat @click="show = !show">
            <v-icon class="pr-1">tune</v-icon>
            <v-span>{{ text }}</v-span>
        </v-btn>

        <v-slide-y-transition>
            <div
                v-show="show"
                class="mx-2 pt-2 greyborder"
                >
                <v-layout
                    row
                    wrap
                    justify-center
                    >
                    <v-btn
                        outline
                        color="primary"
                        @click="applyFilter"
                        >
                        apply
                    </v-btn>
                    
                    <v-btn
                        outline
                        color="error"
                        @click="clearFilter"
                        >
                        clear
                    </v-btn>
                </v-layout>
                
                <v-layout
                    row
                    wrap
                    justify-center
                    >
                    <v-flex
                        xs12
                        sm9
                        v-for="(item, i) in items"
                        :key="i"
                        >
                        <app-autocomplete
                            class="py-2 px-3"
                            ref="filterInput"
                            :label="item.title.toUpperCase()"
                            :items="item.options"
                            />
                    </v-flex>
                </v-layout>
            </div>
        </v-slide-y-transition>
    </div>
</template>

<script>
import AppAutocomplete from './Autocomplete';

export default {
    props: {
        items: Object
    },
    data () {
        return {
            text: 'filter',
            show: false,
        }
    },
    methods: {
        applyFilter() {
            this.show = false;
        },
        clearFilter () {
            this.show = false;
            this.$refs.filterInput.map(el => el.removeAll());
        }
    },
    components: {
        AppAutocomplete,
    }
}
</script>

<style>
.greyborder {
    border: 1px solid #ddd;
}
</style>