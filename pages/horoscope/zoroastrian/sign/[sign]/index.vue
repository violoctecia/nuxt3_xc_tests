<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import { zoroastrianSigns } from "assets/data/zoroastrian.js";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/DefaultDescSign.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
import {useRoute} from "vue-router";
import {ref} from "vue";


const route = useRoute();
const currentSign = ref(route.params.sign);
const signs = zoroastrianSigns
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/zoroastrian/"
                >Зороастрийский гороскоп</nuxt-link
            >
            <nuxt-link :to="`/horoscope/zoroastrian/sign/${ signs[currentSign].en}/`">{{
                    signs[currentSign].ru
                }}
            </nuxt-link>
        </template>
    </PageLinks>
    <DefaultDescSign :sign="signs[currentSign]"></DefaultDescSign>
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
