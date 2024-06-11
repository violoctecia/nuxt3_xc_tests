<script setup >
import SeoMeta from "~/components/meta/seo-meta.vue";
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import HoroscopeMain from "~/components/horoscope/horoscope-main.vue";
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/">Гороскопы</nuxt-link>
        </template>
    </PageLinks>
    <horoscope-main></horoscope-main>
    <seo-meta></seo-meta>
</template>

