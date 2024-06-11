<script setup>
const props = defineProps({
    sign: Object,
    element: Object,
    horoscopeType: String,
});
</script>

<template>
    <div class="container">
        <section class="horoscope-block">
            <div class="wrapper">
                <div class="img">
                    <img :src="props.sign.image" alt="sign" />
                </div>
                <h3 class="title">Ваш знак по {{props.horoscopeType}} {{ props.sign.ru }}</h3>
                <p>{{ props.sign.description }}</p>
            </div>
            <div class="wrapper" v-if="props.element">
                <div class="img">
                    <img :src="props.element.image" alt="sign" />
                </div>
                <h3 class="title">Ваша стихия по {{props.horoscopeType}} {{ props.element.ru }}</h3>
                <p>{{ props.element.description }}</p>
            </div>
        </section>
    </div>
</template>


<style scoped>
.horoscope-block {
    border: 1px solid var(--dark-main-80);
    border-radius: 40px;
    background: var(--dark-main);
    padding: 40px 48px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
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
h3 {
    font-weight: 900;
    font-size: 40px;
    line-height: 110%;
    color: var(--dark-select-10);
    text-align: start;
    margin-bottom: 24px;
}
p {
    font-weight: 400;
    font-size: 19px;
    line-height: 147%;
    color: var(--dark-select-20);
}



@media (max-width: 1100px) {
    .horoscope-block {
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
    h3 {
        font-size: 26px;
        line-height: 115%;
        margin-bottom: 16px;
    }
    p {
        font-size: 15px;
        line-height: 160%;
    }
}
</style>
