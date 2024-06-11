<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import { useRoute } from "vue-router";
import {zodiacCompatibility} from "assets/data/zodiac.js";
import DescriptionBlock from "~/components/horoscope/zodiacs/zodiacDeteiled/descriptionBlock.vue";
import OthersSignsBlock from "~/components/horoscope/zodiacs/zodiacDeteiled/othersSignsBlock.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";

const route = useRoute();
const abc = route.params.param;
const currentRoute = zodiacCompatibility[abc]
</script>

<template>
    <seo-meta></seo-meta>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/zodiac/">Зодиакальный гороскоп</nuxt-link>
      <nuxt-link :to="`/horoscope/zodiac/compatibility/${currentRoute.title.en}/`">Совместимость: {{currentRoute.title.ru}}</nuxt-link>
    </template>
  </PageLinks>
  <description-block :image="currentRoute.image" :title="currentRoute.title.ru" :description="currentRoute.description" :description-type="'Совместимость'"></description-block>
  <others-signs-block :wrap="true"></others-signs-block>
</template>
