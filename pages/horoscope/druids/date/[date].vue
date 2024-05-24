<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import DateInfo from "@/components/globalHoroscopesComponent/DateInfo.vue";
import DateDescSign from "@/components/globalHoroscopesComponent/DateDescSign.vue";
import { druidSigns } from "@/assets/data/druids.js";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherOtherwTitle from "@/components/globalComponents/OtherOtherwTitle.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";

const signs = druidSigns;
const route = useRoute();
const rawDate = ref(route.params.date);

// Функция для извлечения дня и месяца из даты
const extractMonthAndDayFromDate = (dateString) => {
    const [day, month] = dateString.split("-").map(Number);
    return { day, month };
};

const signDates = {
    Яблоня: [
        { start: "23-12", end: "31-12" },
        { start: "01-01", end: "01-01" },
        { start: "25-06", end: "31-06" },
        { start: "01-07", end: "04-07" },
    ],
    Пихта: [
        { start: "02-01", end: "11-01" },
        { start: "05-07", end: "14-07" },
    ],
    Вяз: [
        { start: "12-01", end: "24-01" },
        { start: "15-07", end: "25-07" },
    ],
    Кипарис: [
        { start: "25-01", end: "31-01" },
        { start: "01-02", end: "03-02" },
        { start: "26-07", end: "31-07" },
        { start: "01-08", end: "04-08" },
    ],
    Тополь: [
        { start: "04-02", end: "08-02" },
        { start: "05-08", end: "13-08" },
    ],
    Кедр: [
        { start: "09-02", end: "18-02" },
        { start: "14-08", end: "23-08" },
    ],
    Сосна: [
        { start: "19-02", end: "29-02" },
        { start: "24-08", end: "31-08" },
        { start: "01-09", end: "02-09" },
    ],
    Ива: [
        { start: "01-03", end: "10-03" },
        { start: "03-09", end: "12-09" },
    ],
    Липа: [
        { start: "11-03", end: "20-03" },
        { start: "13-09", end: "22-09" },
    ],
    Дуб: [{ start: "21-03", end: "21-03" }],
    Орешник: [
        { start: "22-03", end: "31-03" },
        { start: "24-09", end: "31-09" },
        { start: "01-10", end: "03-10" },
    ],
    Рябина: [
        { start: "01-04", end: "10-04" },
        { start: "04-10", end: "13-10" },
    ],
    Клен: [
        { start: "11-04", end: "20-04" },
        { start: "14-10", end: "23-10" },
    ],
    Орех: [
        { start: "21-04", end: "30-04" },
        { start: "24-10", end: "31-10" },
        { start: "01-11", end: "02-11" },
    ],
    Жасмин: [
        { start: "01-05", end: "14-05" },
        { start: "03-11", end: "11-11" },
    ],
    Каштан: [
        { start: "15-05", end: "24-05" },
        { start: "12-11", end: "21-11" },
    ],
    Ясень: [
        { start: "25-05", end: "31-05" },
        { start: "01-06", end: "03-06" },
        { start: "22-11", end: "31-11" },
        { start: "01-12", end: "01-12" },
    ],
    Граб: [
        { start: "04-06", end: "13-06" },
        { start: "02-12", end: "11-12" },
    ],
    Инжир: [
        { start: "14-06", end: "23-06" },
        { start: "12-12", end: "20-12" },
    ],
    Береза: [{ start: "24-06", end: "24-06" }],
    Маслина: [{ start: "23-09", end: "23-09" }],
    Бук: [{ start: "21-12", end: "22-12" }],
};

function findSignByDate(date) {
    const { day, month } = extractMonthAndDayFromDate(date);

    for (const [sign, dates] of Object.entries(signDates)) {
        for (const { start, end } of dates) {
            const [startDay, startMonth] = start.split("-").map(Number);
            const [endDay, endMonth] = end.split("-").map(Number);
            if (
                month === startMonth &&
                day >= startDay &&
                month === endMonth &&
                day <= endDay
            ) {
                return sign;
            }
        }
    }
}
const dateSign = ref(findSignByDate(rawDate.value));
watchEffect(() => {
    dateSign.value = findSignByDate(rawDate.value);
});
import checkSignImage from "~/assets/images/Druid_horoscope_2.svg";
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/druids">Гороскоп Друидов</nuxt-link>
            <nuxt-link :to="`/horoscope/druids/date/${rawDate}`"
                >Гороскоп по дате рождения: {{ rawDate }}</nuxt-link
            >
        </template>
    </PageLinks>

    <DateInfo
        :title="'Гороскоп друидов'"
        :sign="dateSign"
        :year="rawDate"
    ></DateInfo>
    <DateDescSign :sign="dateSign" :signsData="signs"></DateDescSign>
    <CheckSign
        :image="checkSignImage"
        :signsData="druidSigns.filter((sign) => sign.ru !== dateSign)"
        :title="'Другие знаки в гороскопе друидов'"
        :horoscopeType="'druids'"></CheckSign>
    <ZodiacListwTitle></ZodiacListwTitle>
    <EastSection></EastSection>
    <OtherOtherwTitle :druids="true"></OtherOtherwTitle>
</template>
