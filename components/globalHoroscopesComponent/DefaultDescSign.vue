<script setup>
import SocialLinks from "@/components/globalComponents/SocialLinks.vue";

const props = defineProps({
    sign: Object,
    isElement: Boolean,
});
</script>

<template>
    <section>
        <div class="container">
            <div class="wrapper" v-if="props.sign">
                <div class="img">
                    <img :src="props.sign.image" alt="sign" />
                </div>
                <h1 class="title">
                    {{ props.isElement ? "Стихия" : "Знак" }}:
                    {{ props.sign.ru }}
                </h1>
                <p class="desc">{{ props.sign.description }}</p>
                <SocialLinks></SocialLinks>
            </div>
        </div>
    </section>
</template>

<style scoped>
.img {
    border-radius: 49px;
    padding: 12px;
    width: 96px;
    height: 96px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-select);

    img {
        width: 72px;
        height: 72px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.wrapper {
    border: 1px solid var(--dark-main-80);
    border-radius: 40px;
    padding: 40px 48px;
    background: var(--dark-main);
    position: relative;
}

h1 {
    text-align: start;
    margin-bottom: 24px;
    max-width: 700px;
}

@media (max-width: 1100px) {
    .wrapper {
        border-radius: 16px;
        padding: 24px;
    }

    .img {
        width: 64px;
        height: 64px;
        margin-bottom: 12px;

        img {
            max-width: 48px;
            max-height: 48px;
        }
    }

    h1 {
        margin-bottom: 8px;
    }

    p {
        margin-bottom: 16px;
    }
}
</style>
