<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import Block1 from "~/components/horoscope/zodiacs/zodiacSignComponents/Block1.vue";
import DescBLocks from "~/components/horoscope/zodiacs/zodiacSignComponents/DescBLocks.vue";
import Block3 from "~/components/horoscope/zodiacs/zodiacSignComponents/Block3.vue";
import EastSection from "~/components/mainComponents/EastSection.vue";
import OtherSection from "~/components/mainComponents/OtherSection.vue";

import { useRoute } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import SeoMeta from "~/components/meta/seo-meta.vue";

const route = useRoute();
const sign = route.params.sign;

const signNames = {
    oven: "Овен",
    taurus: "Телец",
    twins: "Близнецы",
    cancer: "Рак",
    lion: "Лев",
    virgo: "Дева",
    scales: "Весы",
    scorpion: "Скорпион",
    sagittarius: "Стрелец",
    capricorn: "Козерог",
    aquarius: "Водолей",
    fish: "Рыбы",
};

const russianSign = signNames[sign] || sign;
const popupVisible = ref(true);
const router = useRouter();
const selectedDate = ref("");

const checkScrollPosition = () => {
    popupVisible.value =
        window.pageYOffset <
        document.documentElement.scrollHeight - window.innerHeight - 200;
};

onMounted(() => {
    window.addEventListener("scroll", checkScrollPosition);

    checkScrollPosition();
});

onUnmounted(() => {
    window.removeEventListener("scroll", checkScrollPosition);
});

</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/zodiac/">Зодиакальный гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/zodiac/sign/${sign}/`">{{
                russianSign
            }}</nuxt-link>
        </template>
    </PageLinks>

    <Block1></Block1>
    <DescBLocks></DescBLocks>
    <Block3></Block3>
    <EastSection></EastSection>
    <OtherSection></OtherSection>

    <div class="popup" :class="{ show: popupVisible }">
        <p>Выберите период:</p>
        <div class="select">
            <nuxt-link class="btn" :to="`/horoscope/zodiac/sign/${sign}/today/`">Сегодня</nuxt-link>
            <nuxt-link class="btn" :to="`/horoscope/zodiac/sign/${sign}/tomorrow/`">Завтра</nuxt-link>
            <nuxt-link class="btn" :to="`/horoscope/zodiac/sign/${sign}/weekly/`">Неделя</nuxt-link>
            <nuxt-link class="btn" :to="`/horoscope/zodiac/sign/${sign}/monthly/`">Месяц</nuxt-link>
        </div>
    </div>
</template>

<style scoped>
.popup.show {
    opacity: 1;
    z-index: 50;
}

.popup {
    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);

    width: 672px;
    padding: 32px;
    border: 1px solid var(--dark-select);
    border-radius: 24px;
    backdrop-filter: blur(24px);
    background: linear-gradient(
        71deg,
        rgba(130, 130, 131, 0.2) 0%,
        rgba(232, 232, 233, 0.2) 100%
    );

    display: flex;
    justify-content: space-between;
    align-items: center;

    opacity: 0;
    z-index: -1;
    transition: opacity 0.5s ease-in-out;

    p {
        font-weight: 500;
        font-size: 17px;
        line-height: 165%;
        color: #fff;
    }

    .select {
        width: 425px;
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: space-between;

        .btn {
            border: 1px solid var(--dark-select-40);
            border-radius: 26px;
            padding: 8px 20px;
            background: none;
            font-weight: 500;
            font-size: 17px;
            line-height: 165%;
            color: var(--dark-select-10);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .btn:hover {
            border: 1px solid var(--yellow);
            background: var(--yellow);
            color: var(--dark-select) !important;
        }
    }
}

@media (max-width: 700px) {
    .popup {
        width: calc(100vw - 48px);
        padding: 16px;
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: center;
        flex-direction: column;
        backdrop-filter: blur(112px);
        box-shadow: 0 8px 24px 0 #000;
        background: linear-gradient(
            71deg,
            rgba(130, 130, 131, 0.2) 0%,
            rgba(232, 232, 233, 0.2) 100%
        );
        p {
            font-size: 15px;
            line-height: 160%;
        }

        .select {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 8px;
            align-items: center;

            .btn {
                border: 1px solid var(--dark-select-40);
                border-radius: 26px;
                padding: 8px 12px;
                background: none;
                width: calc(25% - 4px);
                font-weight: 500;
                font-size: 13px;
                line-height: 169%;
                color: var(--dark-select-10);
            }
        }
    }
}

@media (max-width: 380px) {
    .popup {
        .select {
            flex-wrap: wrap;

            .btn {
                width: calc(50% - 4px);
            }

            .btn:first-child {
                width: calc(50% - 4px);
            }
        }
    }
}

@media (max-width: 1100px) and (max-height: 700px) {
    .popup {
        bottom: 10px;
    }
}
</style>
