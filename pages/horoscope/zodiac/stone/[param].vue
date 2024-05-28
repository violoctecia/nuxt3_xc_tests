<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import { useRoute } from "vue-router";
import {zodiacStones} from "assets/data/zodiac.js";
import DescriptionBlock from "~/components/zodiacs/zodiacDeteiled/descriptionBlock.vue";
import OthersBlock from "~/components/zodiacs/zodiacDeteiled/othersBlock.vue";

const route = useRoute();
const abc = route.params.param;
const currentRoute = zodiacStones[abc]
</script>

<template>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/zodiac">Зодиакальный гороскоп</nuxt-link>
      <nuxt-link :to="`/horoscope/zodiac/stone/${currentRoute.title.en}`">Камень удачи: {{currentRoute.title.ru}}</nuxt-link>
    </template>
  </PageLinks>
  <description-block :title="currentRoute.title.ru" :description="currentRoute.description" :description-type="'Камень удачи'"></description-block>
  <others-block :title="'Другие камни удачи'" :data="zodiacStones" :block-title="'Камень удачи'" :navigate-to="'stone'"></others-block>
</template>
