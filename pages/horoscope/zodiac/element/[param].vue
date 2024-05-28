<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import { useRoute } from "vue-router";
import {zodiacElements} from "assets/data/zodiac.js";
import DescriptionBlock from "~/components/zodiacs/zodiacDeteiled/descriptionBlock.vue";
import OthersBlock from "~/components/zodiacs/zodiacDeteiled/othersBlock.vue";

const route = useRoute();
const abc = route.params.param;
const currentRoute = zodiacElements[abc]
</script>

<template>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/zodiac">Зодиакальный гороскоп</nuxt-link>
      <nuxt-link :to="`/horoscope/zodiac/element/${currentRoute.title.en}`">Стихия: {{currentRoute.title.ru}}</nuxt-link>
    </template>
  </PageLinks>
  <description-block :title="currentRoute.title.ru" :description="currentRoute.description" :description-type="'Стихия'"></description-block>
  <others-block :title="'Другие стихии'" :data="zodiacElements" :block-title="'Стихия'" :navigate-to="'element'"></others-block>
</template>
