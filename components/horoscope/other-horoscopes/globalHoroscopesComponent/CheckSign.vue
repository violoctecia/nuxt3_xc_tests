<script setup>
const props = defineProps({
    signsData: Object,
    title: String,
    horoscopeType: String,
    image: String,
    isSmallMargin: Boolean,
});

const signs = computed(() => Object.keys(props.signsData));
</script>

<template>
    <section class="check_sign" :class="{ small_mb: props.isSmallMargin }">
        <div class="container">
            <div class="wrapper">
                <div class="text">
                    <h2>{{ props.title }}</h2>
                    <p>Выберите знак и узнайте сакральный смысл</p>
                </div>
                <div class="buttons">
                    <div class="inner_wrapper">
                        <nuxt-link
                            v-for="sign in signs"
                            :key="sign"
                            :to="`/horoscope/${props.horoscopeType}/sign/${sign}/`"
                            class="btn"
                        >
                            {{ props.signsData[sign].ru }}
                        </nuxt-link>
                    </div>
                </div>
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
.inner_wrapper {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 12px;
    max-width: 700px;

    .btn {
        background: none;
        border: 1px solid rgba(255, 255, 255, 0.87);
        border-radius: 26px;
        padding: 8px 20px;
        font-weight: 700;
        font-size: 15px;
        font-family: Muller, sans-serif;
        cursor: pointer;

        color: rgba(255, 255, 255, 0.87);
    }

    .btn:hover {
        background: var(--yellow);
        color: var(--dark-select) !important;
        border: 1px solid var(--yellow);
    }
}

.wrapper {
    border: 1px solid var(--dark-main-80);
    border-radius: 40px;
    padding: 40px 48px;
    background: var(--dark-main);
    display: flex;
    flex-direction: column;
    gap: 32px;
    position: relative;
    z-index: 2;
    overflow: hidden;

    img {
        position: absolute;
        z-index: -1;
        bottom: 0;
        right: 0;
    }
}

.text {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h2 {
        font-weight: 900;
        font-size: 40px;
        line-height: 110%;
        color: var(--dark-select-10);
        max-width: 700px;
    }

    p {
        font-weight: 400;
        font-size: 19px;
        line-height: 147%;
        color: var(--dark-select-20);
    }
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
        border: 1px solid rgba(255, 255, 255, 0.87);
        border-radius: 20px;
        padding: 14px 24px;
        width: 312px;
        background: none;
        font-weight: 500;
        font-size: 19px;
        line-height: 147%;
        color: rgba(255, 255, 255, 0.87);
        opacity: 0.87;
    }
}

@media (max-width: 1100px) {
    .wrapper {
        border-radius: 16px;
        padding: 24px;
        gap: 16px;

        img {
            display: none;
        }
    }

    .text {
        h2 {
            font-size: 24px;
            line-height: 117%;
        }

        p {
            font-size: 15px;
            line-height: 160%;
        }
    }

    .buttons {
        flex-direction: column;
        gap: 20px;

        input {
            width: 100%;
            font-size: 13px;
            line-height: 169%;
        }
    }
}
</style>
