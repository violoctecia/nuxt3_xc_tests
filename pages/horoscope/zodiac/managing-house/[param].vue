<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import {useRoute} from "vue-router";
import {zodiacManagingHouse} from "assets/data/zodiac.js";
import DescriptionBlock from "~/components/horoscope/zodiacs/zodiacDeteiled/descriptionBlock.vue";
import OthersBlock from "~/components/horoscope/zodiacs/zodiacDeteiled/othersBlock.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";

const route = useRoute();
const abc = route.params.param;
const currentRoute = zodiacManagingHouse[abc]
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/zodiac/">Зодиакальный гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/zodiac/managing-house/${currentRoute.title.en}/`">Управляющий дом:
                {{ currentRoute.title.ru }}
            </nuxt-link>
        </template>
    </PageLinks>
    <description-block :image="currentRoute.image" :title="currentRoute.title.ru"
                       :description="currentRoute.description"
                       :description-type="'Управляющий дом'"></description-block>
    <others-block :title="'Другие управляющие дома'" :data="zodiacManagingHouse" :block-title="'Управляющий дом'"
                  :navigate-to="'managing-house'"></others-block>
</template>
