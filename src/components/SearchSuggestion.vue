<template>
    <div
        class="pt-2 text-xs-center sans-serif"
        v-if="showSuggestion"
        >
        Need suggestions? Try these:
        <br>
        <span
            v-for="(suggestion, i) in suggestions"
            :key="i"
            >
            <v-btn
                flat
                class="ma-1"
                style="text-transform: none;"
                @click="useSuggestion(suggestion)"
                >
                {{ suggestion }}
            </v-btn>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        showSuggestion: Boolean,
        suggestions: Array
    },
    methods: {
        useSuggestion (suggestion) {
            this.$emit('useSuggestion', suggestion);
        }
    }
}
</script>