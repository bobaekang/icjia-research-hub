<template>
    <div class="view-title">
            <v-container>
                <v-flex sm10>
                    {{ title }}
                </v-flex>
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