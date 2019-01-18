<template>
    <v-autocomplete
        v-model="selected"
        :items="items"
        :prefix="label"
        chips
        multiple
        class="sans-serif small"
        >
        <template
            slot="selection"
            slot-scope="data"
            >
            <v-chip
                :selected="data.selected"
                close
                class="chip--select-multi"
                @input="remove(data.item)"
                >
                {{ data.item }}
            </v-chip>
        </template>
        
        <template
            slot="item"
            slot-scope="data"
            >
            <v-list-tile-content v-text="data.item" />
        </template>
    </v-autocomplete>
</template>

<script>
export default {
    props: {
        label: String,
        items: Array,
    },
    data () {
        return {
            selected: [],
        }
    },
    methods: {
        remove (item) {
            const index = this.selected.indexOf(item)
            if (index >= 0) this.selected.splice(index, 1)
        },
        removeAll () {
            this.selected = [];
        }
    }
}
</script>

<style scoped>
.v-text-field {
    padding-top: 0;
    margin-top: 0;
}
</style>