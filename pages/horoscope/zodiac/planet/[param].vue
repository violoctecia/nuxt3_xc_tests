<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import { useRoute } from "vue-router";
import {zodiacPlanet} from "assets/data/zodiac.js";
import DescriptionBlock from "~/components/zodiacDeteiled/descriptionBlock.vue";
import OthersBlock from "~/components/zodiacDeteiled/othersBlock.vue";

const route = useRoute();
const abc = route.params.param;
const currentRoute = zodiacPlanet[abc]
</script>

<template>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/zodiac">Зодиакальный гороскоп</nuxt-link>
      <nuxt-link :to="`/horoscope/zodiac/planet/${currentRoute.title.en}`">Управляющая планета: {{currentRoute.title.ru}}</nuxt-link>
    </template>
  </PageLinks>
  <description-block :title="currentRoute.title.ru" :description="currentRoute.description" :description-type="'Управляющая планета'"></description-block>
  <others-block :title="'Другие управляющие планеты'" :data="zodiacPlanet" :block-title="'Управляющая планета'" :navigate-to="'planet'"></others-block>
</template>