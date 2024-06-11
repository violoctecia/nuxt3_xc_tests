<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import TitleSection from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/TitleSection.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import {japaneseSigns} from "~/assets/data/japanese.js";
import WhatIs from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/WhatIs.vue";
import ZodiacListwTitle from "~/components/globalComponents/ZodiacListwTitle.vue";
import OtherEastwTitle from "~/components/globalComponents/OtherEastwTitle.vue";
import OtherSection from "~/components/mainComponents/OtherSection.vue";

const signs = japaneseSigns;
import titleImage from "~/assets/images/Japanese_horoscope_main_illustration.svg";
import titleMobileImage from "@/assets/images/japanese/title-mobile.svg"
import whatIsMobileImage from "@/assets/images/japanese/whatis-mobile.svg"
import checkSignImage from "~/assets/images/Japanese_horoscope_2.svg";
import whatIsImage from "~/assets/images/Japanese_horoscope_3.svg";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/japanese/">Японский гороскоп</nuxt-link>
        </template>
    </PageLinks>
    <TitleSection :desc="'Это система астрологии, основанная на древних японских верованиях и традициях, которая отражает личность и судьбу человека через 12 знаков животных, соответствующих году рождения'" :title="'Японский гороскоп'" :image="titleImage" :image_mobile="titleMobileImage"></TitleSection>
    <CheckDate
        :horoscopeType="'japanese'"
        :title="'Японский гороскоп'"
    ></CheckDate>
    <CheckSign
        :signsData="signs"
        :title="'Описание знаков в Японском гороскопе'"
        :horoscopeType="'japanese'"
        :image="checkSignImage"
    ></CheckSign>
    <WhatIs
        :image="whatIsImage"
        :image_mobile="whatIsMobileImage"
        :title="'Что такое японский гороскоп'"
        :desc="'Японский гороскоп был заимствован из Китая более тысячи лет назад. Знаки японского гороскопа повторяют знаки китайского, за исключением Свиньи, вместо которой в японской астрологии используется Кабан. Вместе с тем японцы внесли свои интерпретации в характеристику каждого знака. Это позволяет рассматривать японский гороскоп как отдельную систему, описывающую характер человека в зависимости от года его рождения. Знак животного, в год которого родился человек, по традициям синтоизма считается духом-покровителем. Празднование Нового года в Японии тесно связано с символикой японского гороскопа. Существует традиция отправлять новогодние открытки и письма, в оформлении которых используются знаки зодиака. Изображения зодиакальных животных также применяются в дизайне новогодних почтовых марок.'"
    ></WhatIs>
    <CheckDate
        :horoscopeType="'japanese'"
        :title="'Японский гороскоп'"
    ></CheckDate>
    <ZodiacListwTitle></ZodiacListwTitle>
    <OtherEastwTitle :japanese="true"></OtherEastwTitle>
    <OtherSection></OtherSection>
</template>
