<template>
    <div class="view-title">
        <v-container py-3>
            <v-layout justify-center>
                <v-flex
                    xs12
                    sm10
                    xl8
                    >
                    {{ title }}
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>