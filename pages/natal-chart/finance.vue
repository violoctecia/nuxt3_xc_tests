<script setup>
import NatalForm from "~/components/natal-chart/natal-form.vue";
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
import NatalTitle from "~/components/natal-chart/natal-paid-page/natal-title.vue";
import FirstBlock from "~/components/natal-chart/finance/first-block.vue";
import HowItsWorks from "~/components/natal-chart/finance/how-its-works.vue";
import ThirdBlock from "~/components/natal-chart/finance/third-block.vue";
import FourthBlock from "~/components/natal-chart/finance/fourth-block.vue";
</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/natal-chart/">Натальные карты</nuxt-link>
            <nuxt-link to="/natal-chart/finance/">Финансы</nuxt-link>
        </template>
    </PageLinks>
    <natal-title
        :title="'Бесплатно составьте натальную карту: Финансы'"
        :desc="'Как подружиться с деньгами и вывести материальный достаток на новый уровень: расскажет ваша натальная карта'">
    </natal-title>
    <first-block></first-block>
    <how-its-works></how-its-works>
    <third-block></third-block>
    <fourth-block></fourth-block>
    <natal-form></natal-form>
</template>

<style scoped>

</style>
