<script setup>
const props = defineProps({
    title: String,
    description: String,
    image: String,
});
</script>

<template>
    <div class="container">
        <h1 class="page_title">{{ props.title }}</h1>
        <p class="page_desc">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            xt commonly used in the graphic, print, and publishing industries
            for previewing layouts and v
        </p>
        <img v-if="props.image" :src="props.image" alt="background-img" />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img {
        position: absolute;
        z-index: -1;
        bottom: 0;
        max-width: 100%;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
}

p {
    margin-bottom: 300px;
}

@media (max-width: 1100px) {
    .container {
        display: flex;
        flex-direction: column;
        align-items: start;

        h1 {
            text-align: start;
        }
    }
}
</style>
