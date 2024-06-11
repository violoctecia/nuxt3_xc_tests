<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import { useRoute } from "vue-router";
import {  ref } from "vue";
import { druidsSigns } from "assets/data/druids.js";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/DefaultDescSign.vue";

const route = useRoute();
const currentSign = ref(route.params.sign);
const signs = druidsSigns


import checkSignImage from "assets/images/Druid_horoscope_2.svg";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/druids/">Гороскоп Друидов</nuxt-link>
            <nuxt-link :to="`/horoscope/druids/sign/${ signs[currentSign].en}/`">{{
                    signs[currentSign].ru
                }}
            </nuxt-link>
        </template>
    </PageLinks>
    <DefaultDescSign :sign="signs[currentSign]"></DefaultDescSign>
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
