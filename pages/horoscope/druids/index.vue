<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import TitleSection from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/TitleSection.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import { druidsSigns } from "@/assets/data/druids.js";
import WhatIs from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/WhatIs.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherOtherwTitle from "@/components/globalComponents/OtherOtherwTitle.vue";

const signs = druidsSigns;
import titleImage from "~/assets/images/Druid_horoscope_1.svg";
import checkSignImage from "~/assets/images/Druid_horoscope_2.svg";
import whatIsImage from "~/assets/images/Druid_horoscope_3.svg";
import titleMobileImage from "~/assets/images/druids/title-mobile.svg";
import whatIsMobileImage from "~/assets/images/druids/whatis-mobile.svg";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/druids/">Гороскоп Друидов</nuxt-link>
    </template>
  </PageLinks>
  <TitleSection :desc="'Основан на древних кельтских традициях и делит год на 22 знака деревьев, каждое из которых символизирует определенные черты характера. Особое внимание уделяет гармонии и балансу между человеком и природой'" :title="'Гороскоп Друидов'" :image="titleImage" :image_mobile="titleMobileImage"></TitleSection>
  <CheckDate
      :horoscopeType="'druids'"
      :title="'гороскоп Друидов'"
  ></CheckDate>
  <CheckSign
      :signsData="signs"
      :title="'Описание знаков в гороскопе Друидов'"
      :horoscopeType="'druids'"
      :image="checkSignImage"
  ></CheckSign>
  <WhatIs
      :image="whatIsImage"
      :image_mobile="whatIsMobileImage"
      :title="'Что такое гороскоп Друидов'"
      :desc="'Эта система астрологии уходит корнями в философию друидов, которые верили в тесную связь между человеком и окружающей средой. Гороскоп Друидов рассматривает деревья как живых существ, обладающих своими энергиями и влияниями. Эта астрологическая система помогает лучше понять свои внутренние качества, особенности характера и жизненные задачи. Гороскоп Друидов также подчеркивает важность взаимодействия с природными силами, считая, что гармония с окружающей средой способствует личностному росту и духовному развитию. Кроме того, гороскоп Друидов учитывает сезонные изменения и их влияние на человека, что позволяет глубже понять свои эмоции и поведение в разные времена года. Эта уникальная астрологическая система вдохновляет на поиски баланса и гармонии в жизни, обращая внимание на мудрость природы.'"
  ></WhatIs>
    <CheckDate
        :horoscopeType="'druids'"
        :title="'гороскоп Друидов'"
    ></CheckDate>
  <ZodiacListwTitle></ZodiacListwTitle>
  <EastSection></EastSection>
  <OtherOtherwTitle :druids="true"></OtherOtherwTitle>
</template>
