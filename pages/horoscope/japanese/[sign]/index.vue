<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import CheckDate from "~/components/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import { useRoute } from "vue-router";
import { readonly, ref, watch } from "vue";
import { japaneseSigns } from "~/assets/data/japanese.js";
import CheckSign from "~/components/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "~/components/other-horoscopes/globalHoroscopesComponent/DefaultDescSign.vue";

const signs = readonly(japaneseSigns);
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

import checkSignImage from "@/assets/images/Japanese_horoscope_2.svg";
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/japanese">Японский гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/japanese/${foundSign.en}`">{{
                foundSign.ru
            }}</nuxt-link>
        </template>
    </PageLinks>

    <DefaultDescSign :sign="foundSign"></DefaultDescSign>
    <CheckDate
        :horoscopeType="'japanese'"
        :title="'Японский гороскоп'"
        :is-small-margin="true"
    ></CheckDate>
    <CheckSign
        :signsData="signs"
        :title="'Описание знаков в Японском гороскопе'"
        :horoscopeType="'japanese'"
        :image="checkSignImage"
    ></CheckSign>
</template>
