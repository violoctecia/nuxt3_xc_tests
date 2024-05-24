<script setup>
const props = defineProps({
    title: String,
    desc: String,
    image: String,
});
</script>

<template>
    <section class="what_is">
        <div class="container">
            <div class="wrapper">
                <h1 class="title">{{ props.title }}</h1>
                <p class="page_desc">{{ props.desc }}</p>
                <img
                    v-if="props.image"
                    :src="props.image"
                    alt="background-img"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.wrapper {
    position: relative;
    padding-left: 48px;
    padding-right: 288px;

    img {
        position: absolute;

        z-index: -1;
        bottom: -80px;
        max-width: 100%;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
}
h1 {
    text-align: start;
    margin-bottom: 32px;
}
p {
    text-align: start;
}
@media (max-width: 1100px) {
    .wrapper {
        overflow: hidden;
        border: 1px solid var(--dark-main-80);
        border-radius: 16px;
        padding: 24px;

        img {
            bottom: 0;
        }
    }
}
</style>
