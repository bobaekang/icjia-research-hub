<template>
    <div class="text-xs-center pb-2 sans-serif">
        {{ count }} {{ item }}s found
    </div>
</template>

<script>
export default {
    props: {
        count: Number,
        item: String
    }
}
</script>