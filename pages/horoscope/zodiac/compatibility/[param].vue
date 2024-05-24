<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import { useRoute } from "vue-router";
import {zodiacCompatibility} from "assets/data/zodiac.js";
import DescriptionBlock from "~/components/zodiacDeteiled/descriptionBlock.vue";
import OthersSignsBlock from "~/components/zodiacDeteiled/othersSignsBlock.vue";

const route = useRoute();
const abc = route.params.param;
const currentRoute = zodiacCompatibility[abc]
</script>

<template>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/zodiac">Зодиакальный гороскоп</nuxt-link>
      <nuxt-link :to="`/horoscope/zodiac/compatibility/${currentRoute.title.en}`">Совместимость: {{currentRoute.title.ru}}</nuxt-link>
    </template>
  </PageLinks>
  <description-block :title="currentRoute.title.ru" :description="currentRoute.description" :description-type="'Совместимость'"></description-block>
  <others-signs-block :wrap="true"></others-signs-block>
</template>