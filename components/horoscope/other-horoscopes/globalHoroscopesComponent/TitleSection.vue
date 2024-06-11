<script setup>
const props = defineProps({
    title: String,
    image: String,
    image_mobile: String,
    desc: String,
});
</script>

<template>
    <div class="container">
        <h1 class="page_title">{{ props.title }}</h1>
        <p class="page_desc">
           {{props.desc}}
        </p>
        <img v-if="props.image" :src="props.image" alt="background-img"/>
        <img class="img-mobile" v-if="props.image_mobile" :src="props.image_mobile" alt="background-img"/>
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
        bottom: -30px;
        max-width: 100%;
        width: calc(100% - 48px);
        left: 50%;
        transform: translateX(-50%);
    }

    .img-mobile {
        display: none;
    }
}

p {
    margin-bottom: 200px;
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
@media (max-width: 800px) {
    .container {
        img {
            display: none;
        }
        .img-mobile {
            display: block;
            position: absolute;
            z-index: -1;
            bottom: 0;
            max-width: 100%;
            width: calc(100% - 48px);
            left: 50%;
            transform: translateX(-50%);
        }
    }
}
</style>
