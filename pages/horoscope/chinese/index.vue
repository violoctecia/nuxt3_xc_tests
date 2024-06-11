<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import TitleSection from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/TitleSection.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import OtherEastwTitle from "@/components/globalComponents/OtherEastwTitle.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import WhatIs from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/WhatIs.vue";
import {chineseElements, chineseSigns} from "@/assets/data/chinese.js";

const signs = chineseSigns;
const elements = chineseElements;

import titleImage from "@/assets/images/Chinese_horoscope_main_illustration.svg";
import titleMobileImage from "@/assets/images/chinese/title-mobile.svg"
import whatIsMobileImage from "@/assets/images/chinese/whatis-mobile.svg"
import checkSignImage from "@/assets/images/Chinese_horoscope_2_.svg";
import whatIsImage from "@/assets/images/Chinese_horoscope_3.svg";

import CheckElement from "~/components/horoscope/other-horoscopes/chineseComponents/ChineseCheckElement.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/chinese/">Китайский гороскоп</nuxt-link>
        </template>
    </PageLinks>
    <TitleSection
        :title="'Китайский гороскоп'"
        :image="titleImage"
        :image_mobile="titleMobileImage"
        :desc="'Это древняя система астрологии, основанная на лунном календаре, включающая 12 знаков животных, повторяющихся каждые 12 лет. Определяет характер и судьбу человека по году рождения, дополнительно учитывая влияние пяти стихий китайского гороскопа'"
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
        :horoscopeType="'chinese'"
        :title="'Описание стихий в Китайском гороскопе'"
    ></CheckElement>
    <WhatIs
        :image="whatIsImage"
        :image_mobile="whatIsMobileImage"
        :title="'Что такое Китайский гороскоп'"
        :desc="'Китайский гороскоп состоит из 12 животных, каждый из которых символизирует один год в 12-летнем цикле. Эти знаки – Крыса, Бык, Тигр, Кролик, Дракон, Змея, Лошадь, Коза, Обезьяна, Петух, Собака и Свинья. Каждый знак в китайском гороскопе связан с одной из пяти стихий: дерево, огонь, земля, металл и вода, что добавляет дополнительный слой характеристик и влияний. Стихии меняются каждые два года, формируя 60-летний цикл, в котором каждый знак сочетается с каждой из этих стихий. Таким образом, китайский гороскоп учитывает как знак животного, так и стихию рождения человека, что позволяет более детально определить его характер, судьбу и совместимость с другими людьми. Он используется для предсказаний, определения совместимости в браке и бизнесе, а также для выбора удачных дат для важных событий.'"
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
