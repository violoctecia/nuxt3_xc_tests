<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import TitleSection from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/TitleSection.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import { floralSigns } from "@/assets/data/floral.js";
import WhatIs from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/WhatIs.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherOtherwTitle from "@/components/globalComponents/OtherOtherwTitle.vue";

const signs = floralSigns;
import titleImage from "~/assets/images/floral/title.svg";
import titleMobileImage from "@/assets/images/floral/title-mobile.svg"
import whatIsMobileImage from "@/assets/images/floral/what-is-mobile.svg";
import checkSignImage from "~/assets/images/floral/check-sign.svg";
import whatIsImage from "~/assets/images/floral/what-is.svg";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/floral/">Цветочный гороскоп</nuxt-link>
    </template>
  </PageLinks>
  <TitleSection :desc="'Цветочный гороскоп, основанный на древних традициях, делит год на периоды, каждый из которых связан с определенным цветком. Предлагает особый взгляд на роль цветочных символов в формировании характера и судьбы человека'" :title="'Цветочный гороскоп'" :image="titleImage" :image_mobile="titleMobileImage"></TitleSection>
  <CheckDate
      :horoscopeType="'floral'"
      :title="'Цветочный гороскоп'"
  ></CheckDate>
  <CheckSign
      :image="checkSignImage"
      :signsData="signs"
      :title="'Описание знаков в Цветочном гороскопе'"
      :horoscopeType="'floral'"
  ></CheckSign>
  <WhatIs
      :image="whatIsImage"
      :image_mobile="whatIsMobileImage"
      :title="'Что такое Цветочный гороскоп'"
      :desc="'Цветочный гороскоп использует образы растений, чтобы раскрыть индивидуальные качества и потенциал людей. Каждый цветок представляет собой символ, олицетворяющий уникальные черты характера, судьбу и жизненный путь человека. Эти символы помогают лучше понять свои особенности, способны направлять и вдохновлять человека. Цветочный гороскоп сочетает в себе древнюю мудрость и любовь к природе, позволяя людям лучше понимать себя и находить гармонию в жизни. Он подчеркивает влияние растений на личность и жизненные события, предлагая особый взгляд на взаимодействие человека с окружающим миром, а также напоминает о важности естественного баланса и взаимосвязи всех живых существ на планете. Этот гороскоп может быть полезен для самопознания, улучшения взаимоотношений и достижения внутреннего спокойствия.'"
  ></WhatIs>
    <CheckDate
        :horoscopeType="'floral'"
        :title="'Цветочный гороскоп'"
    ></CheckDate>
  <ZodiacListwTitle></ZodiacListwTitle>
  <EastSection></EastSection>
  <OtherOtherwTitle :floral="true"></OtherOtherwTitle>
</template>
