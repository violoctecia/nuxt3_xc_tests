<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import {useRoute} from "vue-router";
import {zodiacArchetype} from "assets/data/zodiac.js";
import DescriptionBlock from "~/components/horoscope/zodiacs/zodiacDeteiled/descriptionBlock.vue";
import OthersBlock from "~/components/horoscope/zodiacs/zodiacDeteiled/othersBlock.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";

const route = useRoute();
const abc = route.params.param;
const currentRoute = zodiacArchetype[abc]
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/zodiac/">Зодиакальный гороскоп</nuxt-link>
            <nuxt-link :to="`/horoscope/zodiac/archetype/${currentRoute.title.en}/`">Архетип:
                {{ currentRoute.title.ru }}
            </nuxt-link>
        </template>
    </PageLinks>
    <description-block :title="currentRoute.title.ru" :description="currentRoute.description"
                       :description-type="'Архетип'"></description-block>
    <others-block :title="'Другие архетипы'" :data="zodiacArchetype" :block-title="'Архетип'"
                  :navigate-to="'archetype'"></others-block>
</template>
