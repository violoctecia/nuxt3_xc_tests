<script setup>
import SeoMeta from "~/components/meta/seo-meta.vue";
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import NatalTitle from "~/components/natal-chart/natal-paid-page/natal-title.vue";
import FirstBlock from "~/components/natal-chart/love/first-block.vue";
import HowItsWorks from "~/components/natal-chart/love/how-its-works.vue";
import ThirdBlock from "~/components/natal-chart/love/third-block.vue";
import NatalForm from "~/components/natal-chart/natal-form.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/natal-chart/">Натальные карты</nuxt-link>
            <nuxt-link to="/natal-chart/love/">Любовь</nuxt-link>
        </template>
    </PageLinks>
    <natal-title
        :title="'Бесплатно составьте натальную карту: Любовь и отношения'"
        :desc="'Получите индивидуальный гороскоп отношений и найдите истинное счастье в любви с помощью гороскопов прямо сейчас!'">
    </natal-title>
    <first-block></first-block>
    <how-its-works></how-its-works>
    <third-block></third-block>
    <natal-form></natal-form>
</template>

<style scoped>

</style>
