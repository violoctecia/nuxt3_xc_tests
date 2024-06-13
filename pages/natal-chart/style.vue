<script setup>
import SeoMeta from "~/components/meta/seo-meta.vue";
import NatalTitle from "~/components/natal-chart/natal-paid-page/natal-title.vue";
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import NatalForm from "~/components/natal-chart/natal-form.vue";
import FirstBlock from "~/components/natal-chart/style/first-block.vue";
import SecondBlock from "~/components/natal-chart/style/second-block.vue";
import ThirdBlock from "~/components/natal-chart/style/third-block.vue";

</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/natal-chart/">Натальные карты</nuxt-link>
            <nuxt-link to="/natal-chart/style/">Стиль</nuxt-link>
        </template>
    </PageLinks>
    <natal-title
        :title="'Бесплатно составьте натальную карту: Стиль'"
        :desc="'Учимся подбирать индивидуальный стиль в одежде с помощью астрологии и создавать гармоничные образы с помощью натальной карты'">
    </natal-title>
    <first-block></first-block>
    <second-block></second-block>
    <third-block></third-block>
    <natal-form></natal-form>
</template>
