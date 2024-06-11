<script setup>
import NatalForm from "~/components/natal-chart/natal-form.vue";
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
import NatalTitle from "~/components/natal-chart/natal-paid-page/natal-title.vue";
import FirstBlock from "~/components/natal-chart/prof/first-block.vue";
import HowItsWorks from "~/components/natal-chart/prof/how-its-works.vue";
import ThirdBlock from "~/components/natal-chart/prof/third-block.vue";
import FourthBlock from "~/components/natal-chart/prof/fourth-block.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/natal-chart/">Натальные карты</nuxt-link>
            <nuxt-link to="/natal-chart/prof/">Проффесия</nuxt-link>
        </template>
    </PageLinks>
    <natal-title
        :title="'Бесплатно составьте натальную карту: Профориентация'"
        :desc="'Как по карьерной лестнице подняться до самой высокой звезды: ответ в вашей натальной карте'">
    </natal-title>
    <first-block></first-block>
    <how-its-works></how-its-works>
    <third-block></third-block>
    <fourth-block></fourth-block>
    <natal-form></natal-form>
</template>

<style scoped>

</style>
