<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import TitleSection from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/TitleSection.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import { mayaSigns } from "@/assets/data/maya.js";
import WhatIs from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/WhatIs.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherOtherwTitle from "@/components/globalComponents/OtherOtherwTitle.vue";

const signs = mayaSigns;
import titleImage from "~/assets/images/Maya_horoscope_1.svg";
import checkSignImage from "~/assets/images/Maya_horoscope_2.svg";
import whatIsImage from "~/assets/images/Maya horoscope_3.svg";
import titleMobileImage from "~/assets/images/maya/title-mobile.svg";
import whatIsMobileImage from "~/assets/images/maya/whatis-mobile.svg";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/maya/">Гороскоп Майя</nuxt-link>
    </template>
  </PageLinks>
  <TitleSection :desc="'Основан на древнем календаре Майя и включает 20 знаков, каждый из которых несет в себе уникальные энергии и задачи. Отражает философию Майя о гармонии человека с Вселенной и его предназначении в жизни'" :title="'Гороскоп Майя'" :image="titleImage" :image_mobile="titleMobileImage"></TitleSection>
  <CheckDate :horoscopeType="'maya'" :title="'гороскоп Майя'"></CheckDate>
  <CheckSign
      :signsData="signs"
      :title="'Описание знаков в гороскопе Майя'"
      :horoscopeType="'maya'"
      :image="checkSignImage"
  ></CheckSign>
  <WhatIs
      :image="whatIsImage"
      :image_mobile="whatIsMobileImage"
      :title="'Что такое гороскоп Майя'"
      :desc="'Гороскоп Майя основан на одной из самых сложных и точных астрологических систем в мире – древнем календаре Майя. Включает 20 знаков, каждый из которых символизирует определенные силы природы и космоса. Эти знаки распределены по 13-дневным циклам, образуя 260-дневный священный календарь Цолькин. В отличие от других астрологических систем, гороскоп Майя акцентирует внимание на личной миссии и предназначении человека. Данная система астрологии помогает людям понять свои внутренние качества, духовные цели и жизненные задачи. Этот гороскоп помогает людям найти гармонию с окружающим миром и Вселенной, направляя их на путь самосовершенствования и духовного роста. Это делает гороскоп Майя уникальным инструментом для самопознания и духовного развития.'"
  ></WhatIs>
    <CheckDate :horoscopeType="'maya'" :title="'гороскоп Майя'"></CheckDate>
  <ZodiacListwTitle></ZodiacListwTitle>
  <EastSection></EastSection>
  <OtherOtherwTitle :maya="true"></OtherOtherwTitle>
</template>
