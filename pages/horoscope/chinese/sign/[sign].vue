<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import {useRoute} from "vue-router";
import {ref} from "vue";
import {chineseSigns} from "assets/data/chinese.js";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/DefaultDescSign.vue";

const route = useRoute();
const currentSign = ref(route.params.sign);
const signs = chineseSigns

import checkSignImage from "assets/images/Chinese_horoscope_2_.svg";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/chinese/">Китайский гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/chinese/sign/${ signs[currentSign].en}/`">{{
                    signs[currentSign].ru
                }}
            </nuxt-link>
        </template>
    </PageLinks>
        <DefaultDescSign :sign="signs[currentSign]"></DefaultDescSign>
    <CheckDate
        :horoscopeType="'chinese'"
        :title="'Китайский гороскоп'"
        :is-small-margin="true"
    ></CheckDate>
    <CheckSign
        :signsData="signs"
        :horoscopeType="'chinese'"
        :title="'Описание знаков в Китайском гороскопе'"
        :image="checkSignImage"
    ></CheckSign>
</template>
