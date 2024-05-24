<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import CheckDate from "@/components/globalHoroscopesComponent/CheckDate.vue";
import { useRoute } from "vue-router";
import { readonly, ref, watch } from "vue";
import { druidSigns } from "@/assets/data/druids.js";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "@/components/globalHoroscopesComponent/DefaultDescSign.vue";

const signs = readonly(druidSigns);
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
import checkSignImage from "~/assets/images/Druid_horoscope_2.svg";
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/druids">Гороскоп Друидов</nuxt-link>
            <nuxt-link :to="`/horoscope/druids/${foundSign.en}`">{{
                foundSign.ru
            }}</nuxt-link>
        </template>
    </PageLinks>
    <DefaultDescSign :sign="foundSign"></DefaultDescSign>
    <CheckDate
        :horoscopeType="'druids'"
        :title="'гороскоп Друидов'"
        :is-small-margin="true"

    ></CheckDate>
    <CheckSign
        :signsData="signs"
        :title="'Описание знаков в гороскопе Друидов'"
        :horoscopeType="'druids'"
        :image="checkSignImage"
    ></CheckSign>
</template>
