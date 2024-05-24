<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import { useRoute } from "vue-router";
import {zodiacColor} from "assets/data/zodiac.js";
import DescriptionBlock from "~/components/zodiacDeteiled/descriptionBlock.vue";
import OthersBlock from "~/components/zodiacDeteiled/othersBlock.vue";

const route = useRoute();
const abc = route.params.param;
const currentRoute = zodiacColor[abc]
</script>

<template>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/zodiac">Зодиакальный гороскоп</nuxt-link>
      <nuxt-link :to="`/horoscope/zodiac/color/${currentRoute.title.en}`">Цвет: {{currentRoute.title.ru}}</nuxt-link>
    </template>
  </PageLinks>
  <description-block :title="currentRoute.title.ru" :description="currentRoute.description" :description-type="'Цвет'"></description-block>
  <others-block :title="'Другие цвета'" :data="zodiacColor" :block-title="'Цвет'" :navigate-to="'color'"></others-block>
</template>