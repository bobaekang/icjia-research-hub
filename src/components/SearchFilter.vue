<template>
    <div class="pb-3">
        <v-btn flat @click="show = !show">
            <v-icon class="pr-1">tune</v-icon>
            <v-span>{{ text }}</v-span>
        </v-btn>

        <v-slide-y-transition>
            <div
                v-show="show"
                class="mx-2 py-2 greyborder"
                >
                <v-layout
                    row
                    wrap
                    justify-center
                    >
                    <v-btn
                        outline
                        color="primary"
                        @click="applyFilter($event)"
                        >
                        apply
                    </v-btn>
                    
                    <v-btn
                        outline
                        color="error"
                        @click="clearFilter($event)"
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
        applyFilter (e) {
            const filterbox = e.target.parentElement.parentElement.parentElement;
            const filterNodeList = filterbox.childNodes[1].childNodes;
            
            let filterObj = {};

            for (let i = 0; i < filterNodeList.length; i++) {
                const node = filterNodeList[i];
                const slots = node.getElementsByClassName('v-select__slot');
                
                for (let j = 0; j < slots.length; j++) {
                    const contents = slots[j].getElementsByClassName('v-chip__content');
                    
                    if (contents.length > 0) {
                        const filterName = slots[j].getElementsByClassName('v-text-field__prefix')[0].innerText;
                        let filters = [];
                        
                        for (let g = 0; g < contents.length; g++) {
                            let filter = contents[g].innerText.split('\n')[0];
                            filters.push(filter);
                        }
                        
                        filterObj[filterName] = filters;
                    }
                }
            }
            
            this.$emit('updateFilter', filterObj);
            this.show = false;
        },
        clearFilter (e) {
            this.$refs.filterInput.map(el => el.removeAll());
            this.$emit('updateFilter', {});
            this.show = false;
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