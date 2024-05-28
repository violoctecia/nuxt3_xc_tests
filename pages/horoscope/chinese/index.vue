<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import TitleSection from "~/components/other-horoscopes/globalHoroscopesComponent/TitleSection.vue";
import CheckDate from "~/components/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import OtherEastwTitle from "@/components/globalComponents/OtherEastwTitle.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";
import CheckSign from "~/components/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import WhatIs from "~/components/other-horoscopes/globalHoroscopesComponent/WhatIs.vue";
import { chineseElements, chineseSigns } from "@/assets/data/chinese.js";

const signs = chineseSigns;
const elements = chineseElements;

import titleImage from "@/assets/images/Chinese_horoscope_main_illustration.svg";
import checkSignImage from "@/assets/images/Chinese_horoscope_2_.svg";
import whatIsImage from "@/assets/images/Chinese_horoscope_3.svg";
import CheckElement from "~/components/other-horoscopes/chineseComponents/ChineseCheckElement.vue";
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/chinese">Китайский гороскоп</nuxt-link>
        </template>
    </PageLinks>

    <TitleSection
        :title="'Китайский гороскоп'"
        :image="titleImage"
    ></TitleSection>
    <CheckDate
        :horoscopeType="'chinese'"
        :title="'Китайский гороскоп'"
    ></CheckDate>
    <CheckSign
        :signsData="signs"
        :horoscopeType="'chinese'"
        :title="'Описание знаков в Китайском гороскопе'"
        :is-small-margin="true"
        :image="checkSignImage"
    ></CheckSign>
    <CheckElement
        :signsData="elements"
        :title="'Описание стихий в Китайском гороскопе'"
    ></CheckElement>
    <WhatIs
        :image="whatIsImage"
        :title="'Что такое Китайский гороскоп'"
        :desc="'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur autem beatae corporis, cum cumque ducimus excepturi impedit, incidunt ipsam odio officia porro quo quod rem, sint sit ut voluptatum.'"
    >
    </WhatIs>
    <CheckDate
        :horoscopeType="'chinese'"
        :title="'Китайский гороскоп'"
    ></CheckDate>
    <ZodiacListwTitle></ZodiacListwTitle>
    <OtherEastwTitle :chinese="true"></OtherEastwTitle>
    <OtherSection></OtherSection>
</template>
