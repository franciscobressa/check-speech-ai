<template>
    <h1 
        class="section-title my-5"
        :style="{
            'color': color,
        }"
    >
        {{title}}
    </h1>
</template>

<script>
export default {
    name: "SectionTitle",
    props: {
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
}
</script>
<style scoped>
    .section-title {
        font-family: "Open Sans", sans-serif;
        font-size: 3.5rem;
        text-align: center;
    }
</style>