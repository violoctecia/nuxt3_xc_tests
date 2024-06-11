<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import MainSection from "~/components/horoscope/zodiacs/zodiacComponents/MainSection.vue";
import WhaIsZodiac from "~/components/horoscope/zodiacs/zodiacComponents/WhaIsZodiac.vue";
import AstrologyBLock from "~/components/horoscope/zodiacs/zodiacComponents/AstrologyBLock.vue";
import HowDoHoroscope from "~/components/horoscope/zodiacs/zodiacComponents/HowDoHoroscope.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/zodiac/">Зодиакальный гороскоп</nuxt-link>
        </template>
    </PageLinks>
    <MainSection></MainSection>
    <WhaIsZodiac></WhaIsZodiac>
    <AstrologyBLock></AstrologyBLock>
    <HowDoHoroscope></HowDoHoroscope>
</template>
