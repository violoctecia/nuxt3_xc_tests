<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import TitleSection from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/TitleSection.vue";
import CheckDate from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckDate.vue";
import CheckSign from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/CheckSign.vue";
import { zoroastrianSigns } from "@/assets/data/zoroastrian.js";
import WhatIs from "~/components/horoscope/other-horoscopes/globalHoroscopesComponent/WhatIs.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import OtherEastwTitle from "@/components/globalComponents/OtherEastwTitle.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";

const signs = zoroastrianSigns;
import titleImage from "~/assets/images/Zoro_horoscope_1.svg";
import whatIsImage from "~/assets/images/Zoro_horoscope_3.svg";
import titleMobileImage from "~/assets/images/Zoro_horoscope_1.svg";
import whatIsMobileImage from "~/assets/images/Zoro_horoscope_3.svg";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/zoroastrian/"
                >Зороастрийский гороскоп</nuxt-link
            >
        </template>
    </PageLinks>
    <TitleSection :desc="'Основан на древнеперсидской астрологии и представляет собой уникальную систему, включающую 32 знака животных, каждый из которых соответствует определенному году в 32-летнем цикле'" :title="'Зороастрийский гороскоп'"
                  :image="titleImage"
                  :image_mobile="titleMobileImage"></TitleSection>
    <CheckDate
        :horoscopeType="'zoroastrian'"
        :title="'Зороастрийский гороскоп'"
    ></CheckDate>
    <CheckSign
        :signsData="signs"
        :title="'Описание знаков в Зароастрийском гороскопе'"
        :horoscopeType="'zoroastrian'"
    ></CheckSign>
    <WhatIs
        :image="whatIsImage"
        :image_mobile="whatIsMobileImage"
        :title="'Что такое зароастрийский гороскоп'"
        :desc="'Уникальность зороастрийского гороскопа – в сочетании астрологических знаний и философии и выведении на первый план моральных и духовных аспектов личности. Каждый знак в этой системе не только описывает характер и судьбу человека, но и акцентирует внимание на его духовных задачах и моральных принципах. Эта система астрологии помогает определить сильные и слабые стороны личности, а также дает советы по достижению внутреннего равновесия, духовного роста и гармонии с миром. В зороастрийском гороскопе особое внимание уделяется взаимоотношениям между знаками, что помогает понять, как лучше взаимодействовать с окружающими, находить общий язык и решать конфликты. Это делает зороастрийский гороскоп не только инструментом самопознания, но и полезным руководством для улучшения социальных связей и межличностных отношений.'"
    ></WhatIs>
    <CheckDate
        :horoscopeType="'zoroastrian'"
        :title="'Зороастрийский гороскоп'"
    ></CheckDate>
    <ZodiacListwTitle></ZodiacListwTitle>
    <OtherEastwTitle :zaroastrian="true"></OtherEastwTitle>
    <OtherSection></OtherSection>
</template>
