<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const param = route.params.param;

const props = defineProps({
    title: String,
    data: Object,
    blockTitle: String,
    navigateTo: String,
});

const otherQualities = Object.entries(props.data).reduce(
    (acc, [key, value]) => {
        if (key !== param) {
            acc[key] = value;
        }
        return acc;
    },
    {}
);
</script>

<template>
    <section>
        <div class="container">
            <div class="text">
                <h1 class="title">{{ props.title }}</h1>
            </div>
            <div class="wrapper">
                <div class="block" v-for="item in otherQualities">
                    <div class="img">
                        <img v-if="item.image" :src="item.image" alt="img"/>
                    </div>

                    <h2>{{ props.blockTitle }}</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/${props.navigateTo}/${item.title.en}/`"
                        >{{ item.title.ru }}</nuxt-link
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.text {
    margin-bottom: 64px;

    h1 {
        margin-bottom: 16px;
    }

    p {
        font-weight: 400;
        font-size: 24px;
        line-height: 133%;
        text-align: center;
    }
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.block {
    padding: 35px 30px;
    background: var(--dark-select);
    min-height: 234px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(25% - 12px);

    .img {
        border-radius: 49px;
        padding: 12px;
        width: 64px;
        height: 64px;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 64px;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    h2 {
        font-weight: 400;
        font-size: 17px;
        line-height: 165%;
        text-align: center;
        color: var(--dark-select-20);
        margin-bottom: 4px;
    }

    a {
        font-weight: 700;
        font-size: 20px;
        line-height: 120%;
        text-align: center;
        color: var(--dark-select-10);
    }
}

@media (max-width: 1100px) {
    .text {
        margin-bottom: 20px;

        p {
            font-weight: 400;
            font-size: 17px;
            line-height: 153%;
            text-align: start;
        }
    }

    .wrapper {
        gap: 8px;
    }
    .block {
        padding: 16px;
        min-height: 0px;
        max-width: none;
        min-width: 175px;
        border-radius: 16px;
        width: calc(25% - 6px);

        .img {
            border-radius: 49px;
            padding: 12px;
            width: 48px;
            height: 48px;
            margin-bottom: 8px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 48px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        h2 {
            font-size: 13px;
            line-height: 169%;
            margin-bottom: 2px;
        }

        a {
            font-weight: 500;
            font-size: 15px;
            line-height: 160%;
        }
    }
}

@media (max-width: 840px) {
    .block {
        flex-basis: calc(50% - 4px);
        min-width: auto;
    }
}
</style>
