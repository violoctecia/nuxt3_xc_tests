<script setup>
import {
    chineseElements,
    chineseSigns,
} from "@/assets/data/chinese.js";

const signs = chineseSigns;
const elements = chineseElements;

const props = defineProps({
    sign: String,
    element: String,
});

const activeSign = signs.find((sign) => sign.ru === props.sign);

const activeElement = elements.find((element) => element.ru === props.element);
</script>

<template>
    <section>
        <div class="container">
            <div class="wrapper">
                <div class="block">
                    <div class="img">
                        <img
                            v-if="activeSign.image"
                            :src="activeSign.image"
                            alt="sign"
                        />
                    </div>
                    <h1 class="title">Описание знака: {{ props.sign }}</h1>
                    <p class="desc">{{ activeSign.description }}</p>
                </div>
                <div class="block">
                    <div class="img">
                        <img
                            v-if="activeElement.image"
                            :src="activeElement.image"
                            alt="element"
                        />
                    </div>
                    <h1 class="title">Описание стихии: {{ props.element }}</h1>
                    <p class="desc">{{ activeElement.description }}</p>
                </div>
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
.block {
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 40px;
        line-height: 110%;
        text-align: start;
        margin-bottom: 32px;
    }
}
.container {
    max-width: 720px;
    margin: 0 auto;
}
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 64px;
}
@media (max-width: 1100px) {
    .wrapper {
        gap: 20px;
    }
    .img {
        width: 64px;
        height: 64px;
        margin-bottom: 12px;
        img {
            width: max-content;
            height: max-content;
        }
    }
    .block {
        h1 {
            margin-bottom: 16px;
            font-size: 24px;
            line-height: 117%;
        }
        p {
            font-size: 15px;
            line-height: 160%;
        }
    }
}
</style>
