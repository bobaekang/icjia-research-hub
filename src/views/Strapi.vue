<template>
    <v-container>
        {{ test }}
    </v-container>
</template>

<script>
import Strapi from 'strapi-sdk-javascript';

const strapi = new Strapi('http://localhost:1337');

export default {
    data () {
        return {
            test: strapi
        }
    }
}
</script>