<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import {useRoute} from "vue-router";
import {ref} from "vue";
import {mayaSigns} from "assets/data/maya.js";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/DefaultDescSign.vue";

const route = useRoute();
const currentSign = ref(route.params.sign);
const signs = mayaSigns

import checkSignImage from "assets/images/Maya_horoscope_2.svg";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/maya/">Гороскоп Майя</nuxt-link>
            <nuxt-link :to="`/horoscope/maya/sign/${ signs[currentSign].en}/`">{{
                    signs[currentSign].ru
                }}
            </nuxt-link>
        </template>
    </PageLinks>

    <DefaultDescSign :sign="signs[currentSign]"></DefaultDescSign>
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
