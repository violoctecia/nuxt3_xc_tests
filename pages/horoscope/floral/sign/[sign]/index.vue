<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import { useRoute } from "vue-router";
import {  ref } from "vue";
import { floralSigns } from "assets/data/floral.js";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/DefaultDescSign.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
import checkSignImage from "assets/images/floral/check-sign.svg";


const route = useRoute();
const currentSign = ref(route.params.sign);
const signs = floralSigns
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/floral/">Цветочный гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/floral/sign/${ signs[currentSign].en}/`">{{
                    signs[currentSign].ru
                }}
            </nuxt-link>
        </template>
    </PageLinks>
    <DefaultDescSign :sign="signs[currentSign]"></DefaultDescSign>
    <CheckDate
        :horoscopeType="'floral'"
        :title="'Цветочный гороскоп'"
        :is-small-margin="true"
    ></CheckDate>
    <CheckSign
        :image="checkSignImage"
        :signsData="signs"
        :title="'Описание знаков в Цветочном гороскопе'"
        :horoscopeType="'floral'"
    ></CheckSign>
</template>
