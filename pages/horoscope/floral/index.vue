<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import TitleSection from "@/components/globalHoroscopesComponent/TitleSection.vue";
import CheckDate from "@/components/globalHoroscopesComponent/CheckDate.vue";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import { floralSigns } from "@/assets/data/floral.js";
import WhatIs from "@/components/globalHoroscopesComponent/WhatIs.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherOtherwTitle from "@/components/globalComponents/OtherOtherwTitle.vue";

const signs = floralSigns;
import titleImage from "~/assets/images/Zoro_horoscope_1.svg";
import whatIsImage from "~/assets/images/Zoro_horoscope_3.svg";
</script>

<template>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/floral">Цветочный гороскоп</nuxt-link>
    </template>
  </PageLinks>
  <TitleSection :title="'Цветочный гороскоп'" :image="titleImage"></TitleSection>
  <CheckDate
      :horoscopeType="'floral'"
      :title="'Цветочный гороскоп'"
  ></CheckDate>
  <CheckSign

      :signsData="signs"
      :title="'Описание знаков в Цветочном гороскопе'"
      :horoscopeType="'floral'"
  ></CheckSign>
  <WhatIs
      :image="whatIsImage"
      :title="'Что такое Цветочный гороскоп'"
      :desc="'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.'"
  ></WhatIs>
    <CheckDate
        :horoscopeType="'floral'"
        :title="'Цветочный гороскоп'"
    ></CheckDate>
  <ZodiacListwTitle></ZodiacListwTitle>
  <EastSection></EastSection>
  <OtherOtherwTitle :floral="true"></OtherOtherwTitle>
</template>
