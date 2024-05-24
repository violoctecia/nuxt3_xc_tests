<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import { useRoute } from "vue-router";
import {zodiacQuality} from "assets/data/zodiac.js";
import DescriptionBlock from "~/components/zodiacDeteiled/descriptionBlock.vue";
import OthersBlock from "~/components/zodiacDeteiled/othersBlock.vue";

const route = useRoute();
const quality = route.params.param;
const currentQuality = zodiacQuality[quality]
</script>

<template>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/zodiac">Зодиакальный гороскоп</nuxt-link>
      <nuxt-link :to="`/horoscope/zodiac/quality/${currentQuality.title.en}`">Качество: {{currentQuality.title.ru}}</nuxt-link>
    </template>
  </PageLinks>
  <description-block :title="currentQuality.title.ru" :description="currentQuality.description" :description-type="'Качество'"></description-block>
  <others-block :title="'Другие качества'" :data="zodiacQuality" :block-title="'Качество'"  :navigate-to="'quality'"></others-block>
</template>