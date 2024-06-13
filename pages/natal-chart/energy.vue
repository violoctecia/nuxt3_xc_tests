<script setup>
import SeoMeta from "~/components/meta/seo-meta.vue";
import NatalTitle from "~/components/natal-chart/natal-paid-page/natal-title.vue";
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import FirstBlock from "~/components/natal-chart/energy/first-block.vue";
import SecondBlock from "~/components/natal-chart/energy/second-block.vue";
import NatalForm from "~/components/natal-chart/natal-form.vue";
import ThirdBlock from "~/components/natal-chart/energy/third-block.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/natal-chart/">Натальные карты</nuxt-link>
            <nuxt-link to="/natal-chart/energy/">Энергия</nuxt-link>
        </template>
    </PageLinks>
    <natal-title
        :title="'Бесплатно составьте натальную карту: Энергия и вдохновение'"
        :desc="'Разбираемся, как с помощью астрологии войти в ресурс, и учимся правильно отдыхать'">
    </natal-title>
    <first-block></first-block>
    <second-block></second-block>
    <third-block></third-block>
    <natal-form></natal-form>
</template>
