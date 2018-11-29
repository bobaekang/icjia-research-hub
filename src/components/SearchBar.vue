<template>
    <v-text-field
        @keyup="onChange($event)"
        :value="searchInput"
        :label="searchLabel"
        append-icon="search"
        solo
        />
</template>

<script>
export default {
    props: {
        label: String,
        search: String
    },
    data () {
        return {
            searchInput: this.search,
            searchLabel: this.label
        }
    },
    methods: {
        onChange (e) {
            this.$emit('update:search', e.target.value);
        }
    }
}
</script>