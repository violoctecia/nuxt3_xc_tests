<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    signsData: Array,
    title: String,
    mb: Number,
});

const router = useRouter();
const activeSign = ref(null);


watch(
    () => router.currentRoute.value.params.sign,
    (newSign) => {
        activeSign.value = newSign;
    }
);

const handleButtonClick = (sign) => {
    const path = `/horoscope/chinese/element/${sign}`;
    router.push(path);
};

</script>

<template>
    <section class="check_element">
        <div class="container">
            <div class="wrapper">
                <div class="text">
                    <h1>{{ props.title }}</h1>
                    <p>Выберите знак и узнайте сакральный смысл</p>
                </div>
                <div class="buttons">
                    <div class="inner_wrapper">
                        <button
                            v-for="sign in props.signsData"
                            :key="sign.en"
                            @click="handleButtonClick(sign.en)"
                            :class="{ active: sign.en === activeSign }"
                        >
                            {{ sign.ru }}
                        </button>
                    </div>
                </div>
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

    button {
        background: none;
        border: 1px solid rgba(255, 255, 255, 0.87);
        border-radius: 26px;
        padding: 8px 20px;
        font-weight: 700;
        font-size: 15px;

        color: rgba(255, 255, 255, 0.87);
    }
    button:hover {
        background: var(--yellow);
        color: var(--dark-select);
        border: 1px solid var(--yellow);
    }
    button.active {
        background: var(--yellow);
        color: var(--dark-select);
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
        max-width: 100%;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
}

.text {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h1 {
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
    }

    .text {
        h1 {
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
