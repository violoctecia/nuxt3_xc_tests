<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import {chineseElements} from "assets/data/chinese.js";
import DefaultDescSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/DefaultDescSign.vue";
import CheckElement from "~/components/horoscope/other-horoscopes/chineseComponents/ChineseCheckElement.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";

const route = useRoute();
const currentSign = ref(route.params.element);
const signs = chineseElements

</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/chinese/">Китайский гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/chinese/element/${ signs[currentSign].en}/`">{{
                    signs[currentSign].ru
                }}
            </nuxt-link>
        </template>
    </PageLinks>
    <DefaultDescSign :is-element="true" :sign="signs[currentSign]"></DefaultDescSign>
    <CheckDate
        :horoscopeType="'chinese'"
        :title="'Китайский гороскоп'"
        :is-small-margin="true"
    ></CheckDate>
    <CheckElement
        :signsData="signs"
        :horoscopeType="'chinese'"
        :title="'Описание стихий в Китайском гороскопе'"
    ></CheckElement>
</template>
