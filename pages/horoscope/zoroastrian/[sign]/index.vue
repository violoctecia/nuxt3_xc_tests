<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import CheckDate from "@/components/globalHoroscopesComponent/CheckDate.vue";
import { useRoute } from "vue-router";
import { readonly, ref, watch } from "vue";
import { zoroastrianSigns } from "@/assets/data/zoroastrian.js";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "@/components/globalHoroscopesComponent/DefaultDescSign.vue";

const signs = readonly(zoroastrianSigns);
const route = useRoute();
const currentSign = ref(route.params.sign);

const findSignByEnglishName = (englishName) => {
    return signs.find((sign) => sign.en === englishName);
};

const foundSign = ref(findSignByEnglishName(currentSign.value));

watch(
    () => route.params.sign,
    (newSign) => {
        currentSign.value = newSign;
        foundSign.value = findSignByEnglishName(newSign);
    }
);
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/zoroastrian"
                >Зороастрийский гороскоп</nuxt-link
            >
            <nuxt-link :to="`/horoscope/zoroastrian/${foundSign.en}`">{{
                foundSign.ru
            }}</nuxt-link>
        </template>
    </PageLinks>
    <DefaultDescSign :sign="foundSign"></DefaultDescSign>
    <CheckDate
        :horoscopeType="'zoroastrian'"
        :title="'Зороастрийский гороскоп'"
        :is-small-margin="true"
    ></CheckDate>
    <CheckSign
        :signsData="signs"
        :title="'Описание знаков в Зороастрийском гороскопе'"
        :horoscopeType="'zoroastrian'"
    ></CheckSign>
</template>
