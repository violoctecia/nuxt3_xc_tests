<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import CheckDate from "~/components/globalHoroscopesComponent/CheckDate.vue";
import { useRoute } from "vue-router";
import { readonly, ref, watch } from "vue";
import { chineseElements } from "assets/data/chinese.js";
import DefaultDescSign from "~/components/globalHoroscopesComponent/DefaultDescSign.vue";
import CheckElement from "~/components/chineseComponents/ChineseCheckElement.vue";

const signs = readonly(chineseElements);
const route = useRoute();
const currentSign = ref(route.params.element);

const findSignByEnglishName = (englishName) => {
    return signs.find((sign) => sign.en === englishName);
};

const foundSign = ref(findSignByEnglishName(currentSign.value));

watch(
    () => route.params.element,
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
            <nuxt-link to="/horoscope/chinese">Китайский гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/chinese/element/${foundSign.en}`">{{
                foundSign.ru
            }}</nuxt-link>
        </template>
    </PageLinks>
    <DefaultDescSign :sign="foundSign" :is-element="true"></DefaultDescSign>
    <CheckDate
        :horoscopeType="'chinese'"
        :title="'Китайский гороскоп'"
        :is-small-margin="true"
    ></CheckDate>
    <CheckElement
        :signsData="signs"
        :title="'Описание стихий в Китайском гороскопе'"
    ></CheckElement>
</template>
