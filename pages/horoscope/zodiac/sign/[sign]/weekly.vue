<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import HoroscopeDate from "~/components/horoscope/zodiacs/zodiacSignDateComponents/HoroscopeDate.vue";
import EastSection from "~/components/mainComponents/EastSection.vue";
import OtherSection from "~/components/mainComponents/OtherSection.vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { computed } from "vue";

const route = useRoute();
const props = defineProps({
    timePeriod: {
        type: String,
        default: "weekly",
    },
});

const sign = route.params.sign;

const signNames = {
    oven: ["Овен", "Овна"],
    taurus: ["Телец", "Тельца"],
    twins: ["Близнецы", "Близнецов"],
    cancer: ["Рак", "Рака"],
    lion: ["Лев", "Льва"],
    virgo: ["Дева", "Девы"],
    scales: ["Весы", "Весов"],
    scorpion: ["Скорпион", "Скорпиона"],
    sagittarius: ["Стрелец", "Стрельца"],
    capricorn: ["Козерог", "Козерога"],
    aquarius: ["Водолей", "Водолея"],
    fish: ["Рыбы", "Рыб"],
};
const dateNames = {
    today: "Гороскоп на сегодня для ",
    tomorrow: "Гороскоп на завтра для ",
    weekly: "Гороскоп на неделю для ",
    monthly: "Гороскоп на месяц для ",
    yearly: "Гороскоп на год для ",
};
const selectedDate = ref(props.timePeriod);
const signName = signNames[sign];
const nominativeCase = signName[0];
const genitiveCase = signName[1];
const russianDate = computed(() => dateNames[selectedDate.value]);



import {API_KEY} from "~/config.js";
//get
const apiUrl = `${API_KEY}/horoscope/zodiac/${sign}/weekly`;
import { useFetch } from '#app'
import SeoMeta from "~/components/meta/seo-meta.vue";
const { data } = await useFetch(apiUrl)
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/zodiac/">Зодиакальный гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/zodiac/sign/${sign}/`">{{
                    nominativeCase
                }}</nuxt-link>
            <nuxt-link :to="`/horoscope/zodiac/sign/${sign}/${selectedDate}/`">{{
                    russianDate + genitiveCase
                }}</nuxt-link>
        </template>
    </PageLinks>

    <HoroscopeDate
        :dateInfo="{ russianDate: russianDate, genitiveCase: genitiveCase }"
        :text="data.text"
    ></HoroscopeDate>

    <div class="choose_date">
        <div class="container">
            <div class="popup">
                <p>Гороскопы на другие дни:</p>
                <div class="select">
                    <nuxt-link class="btn" :to="`/horoscope/zodiac/sign/${sign}/today/`">Сегодня</nuxt-link>
                    <nuxt-link class="btn" :to="`/horoscope/zodiac/sign/${sign}/tomorrow/`">Завтра</nuxt-link>
                    <nuxt-link class="btn" :to="`/horoscope/zodiac/sign/${sign}/monthly/`">Месяц</nuxt-link>
                    <nuxt-link class="btn" :to="`/horoscope/zodiac/sign/${sign}/yearly/`">Год</nuxt-link>
                </div>
            </div>
        </div>
    </div>


    <EastSection></EastSection>
    <OtherSection></OtherSection>
</template>
<style scoped>
.choose_date {
    margin-bottom: 32px;
}
.container {
    display: flex;
    justify-content: center;
}
.popup {
    border: 1px solid var(--dark-select);
    border-radius: 24px;
    padding: 32px;
    backdrop-filter: blur(24px);
    background: linear-gradient(
        71deg,
        rgba(130, 130, 131, 0.2) 0%,
        rgba(232, 232, 233, 0.2) 100%
    );
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 719px;
    p {
        font-weight: 500;
        font-size: 17px;
        line-height: 165%;
        color: #fff;
    }

    .select {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: space-between;
        width: 415px;

        .btn {
            border: 1px solid var(--dark-select-40);
            border-radius: 26px;
            padding: 8px 20px;
            background: none;
            width: 95px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            font-size: 17px;
            line-height: 165%;
            color: var(--dark-select-10);
        }
        .btn:first-child {
            width: 105px;
        }
        .btn:hover {
            border: 1px solid var(--yellow);
            background: var(--yellow);
            color: var(--dark-select) !important;
        }
    }
}

@media (max-width: 800px) {
    .popup {
        width: calc(100vw - 48px);
        padding: 16px;
        gap: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        backdrop-filter: blur(112px);
        box-shadow: 0 8px 24px 0 #000;
        background: linear-gradient(
            71deg,
            rgba(130, 130, 131, 0.2) 0%,
            rgba(232, 232, 233, 0.2) 100%
        );
        p {
            font-weight: 500;
            font-size: 15px;
            line-height: 160%;
            text-align: center;
            color: #fff;
        }

        .select {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .btn {
                border: 1px solid var(--dark-select-40);
                border-radius: 123px;
                padding: 8px 12px;
                background: none;
                width: calc(25% - 4px);

                font-weight: 500;
                font-size: 13px;
                line-height: 169%;
            }
            .btn:first-child {
                width: calc(25% - 4px);
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
}
</style>
