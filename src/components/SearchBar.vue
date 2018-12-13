<template>
    <v-text-field
        @keyup="onChange($event)"
        :value="searchInput"
        :label="searchLabel"
        append-outer-icon="search"
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

<style scoped>
.v-text-field .v-text-field-enclosed .v-text-filed__details {
    display: none;
}
</style>