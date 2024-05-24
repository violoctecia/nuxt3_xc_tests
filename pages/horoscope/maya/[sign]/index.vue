<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import CheckDate from "@/components/globalHoroscopesComponent/CheckDate.vue";
import { useRoute } from "vue-router";
import { readonly, ref, watch } from "vue";
import { mayaSigns } from "@/assets/data/maya.js";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "@/components/globalHoroscopesComponent/DefaultDescSign.vue";

const signs = readonly(mayaSigns);
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
import checkSignImage from "~/assets/images/Maya_horoscope_2.svg";
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/maya">Гороскоп Майя</nuxt-link>
            <nuxt-link :to="`/horoscope/maya/${foundSign.en}`">{{
                foundSign.ru
            }}</nuxt-link>
        </template>
    </PageLinks>
    <DefaultDescSign :sign="foundSign"></DefaultDescSign>
    <CheckDate
        :horoscopeType="'maya'"
        :title="'гороскоп Майя'"
        :is-small-margin="true"
    ></CheckDate>
    <CheckSign
        :image="checkSignImage"
        :signsData="signs"
        :title="'Описание знаков в гороскопе Майя'"
        :horoscopeType="'maya'"
    ></CheckSign>
</template>
