<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import { useRoute } from "vue-router";
import { ref} from "vue";
import { japaneseSigns } from "assets/data/japanese.js";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/DefaultDescSign.vue";

const route = useRoute();
const currentSign = ref(route.params.sign);
const signs = japaneseSigns
import checkSignImage from "assets/images/Japanese_horoscope_2.svg";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/japanese/">Японский гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/japanese/sign/${ signs[currentSign].en}/`">{{
                    signs[currentSign].ru
                }}
            </nuxt-link>
        </template>
    </PageLinks>

    <DefaultDescSign :sign="signs[currentSign]"></DefaultDescSign>
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
