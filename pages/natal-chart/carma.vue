<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
import NatalTitle from "~/components/natal-chart/natal-paid-page/natal-title.vue";
import NatalForm from "~/components/natal-chart/natal-form.vue";
import FirstBlock from "~/components/natal-chart/carma/first-block.vue";
import SecondBlock from "~/components/natal-chart/carma/second-block.vue";
import ThirdBlock from "~/components/natal-chart/carma/third-block.vue";

</script>

<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/natal-chart/">Натальные карты</nuxt-link>
            <nuxt-link to="/natal-chart/carma/">Карма</nuxt-link>
        </template>
    </PageLinks>
    <natal-title
        :title="'Бесплатно составьте натальную карту: Карма'"
        :desc="'Узнайте с помощью вашей натальной карты опыт вашей души из прошлой жизни и ваши задачи на текущее воплощение'">
    </natal-title>
    <first-block></first-block>
    <second-block></second-block>
    <third-block></third-block>
    <natal-form></natal-form>
</template>


