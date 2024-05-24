<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import DescriptionDate from "@/components/chineseComponents/ChineseDescDate.vue";
import HoroscopePageDescSign from "@/components/chineseComponents/ChineseDescSignElement.vue";
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import OtherEastwTitle from "@/components/globalComponents/OtherEastwTitle.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";
import checkSignImage from "@/assets/images/Chinese_horoscope_2_.svg";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import CheckElement from "@/components/chineseComponents/ChineseCheckElement.vue";
import { chineseElements } from "@/assets/data/chinese.js";
const elements = chineseElements;

const route = useRoute();
const rawDate = ref(route.params.date);

const determineElement = (year) => {
    const lastDigit = year % 10;

    if (lastDigit === 0 || lastDigit === 1) {
        return "Вода";
    } else if (lastDigit === 2 || lastDigit === 3) {
        return "Железо";
    } else if (lastDigit === 4 || lastDigit === 5) {
        return "Дерево";
    } else if (lastDigit === 6 || lastDigit === 7) {
        return "Огонь";
    } else {
        return "Земля";
    }
};

const determineSignAndElement = (year) => {
    const startYearOfCycle = 1984;
    const yearsInCycle = 28;
    const currentYearInCycle = (year - startYearOfCycle) % yearsInCycle;

    const elements = ["Дерево", "Огонь", "Земля", "Железо", "Вода"];
    const currentElementIndex = Math.floor(currentYearInCycle / 2) % 5;
    const currentElement = elements[currentElementIndex];

    const signs = [
        "Крыса",
        "Бык",
        "Тигр",
        "Кролик",
        "Дракон",
        "Змея",
        "Лошадь",
        "Коза",
        "Обезьяна",
        "Петух",
        "Собака",
        "Свинья",
    ];
    const signIndex = (year - 1900) % 12;
    const sign = signs[signIndex];
    const element = determineElement(year);

    return { sign, element };
};

const extractYearFromDate = (dateString) => {
    const [, , year] = dateString.split("-").map(Number);
    return year;
};

const date = ref({ year: null, sign: null, element: null });

const year = extractYearFromDate(rawDate.value);
const { sign, element } = determineSignAndElement(year);
date.value = { year, sign, element };

const signButtons = ref([
    { ru: "Крыса", en: "rat" },
    { ru: "Бык", en: "ox" },
    { ru: "Тигр", en: "tiger" },
    { ru: "Кролик", en: "rabbit" },
    { ru: "Дракон", en: "dragon" },
    { ru: "Змея", en: "snake" },
    { ru: "Лошадь", en: "horse" },
    { ru: "Коза", en: "goat" },
    { ru: "Обезьяна", en: "monkey" },
    { ru: "Петух", en: "rooster" },
    { ru: "Собака", en: "dog" },
    { ru: "Свинья", en: "pig" },
]);
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/chinese">Китайский гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/chinese/date/${rawDate}`"
                >Гороскоп по дате рождения: {{ rawDate }}</nuxt-link
            >
        </template>
    </PageLinks>
    <DescriptionDate
        :sign="date.sign"
        :year="rawDate"
        :element="date.element"
    ></DescriptionDate>
    <HoroscopePageDescSign
        :sign="date.sign"
        :element="date.element"
    ></HoroscopePageDescSign>
    <CheckSign
        :signsData="signButtons"
        :horoscopeType="'chinese'"
        :title="'Описание знаков в Китайском гороскопе'"
        :is-small-margin="true"
        :image="checkSignImage"
    ></CheckSign>
    <CheckElement
        :signsData="elements"
        :title="'Другие стихии в Китайском гороскопе'"
    ></CheckElement>
    <ZodiacListwTitle></ZodiacListwTitle>
    <OtherEastwTitle :chinese="true"></OtherEastwTitle>
    <OtherSection></OtherSection>
</template>
