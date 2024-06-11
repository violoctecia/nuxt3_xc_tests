<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import NatalTitle from "~/components/natal-chart/natal-paid-page/natal-title.vue";
import NatalFaq from "~/components/natal-chart/natal-paid-page/natal-faq.vue";
import NatalCardHelps from "~/components/natal-chart/natal-paid-page/natal-card-helps.vue";
import NatalThanks from "~/components/natal-chart/natal-paid-page/natal-thanks.vue";
import NatalCardInfluence from "~/components/natal-chart/natal-paid-page/natal-card-influence.vue";
import NatalAdvantages from "~/components/natal-chart/natal-paid-page/natal-advantages.vue";
import NatalSelectTariff from "~/components/natal-chart/natal-paid-page/natal-select-tariff.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>


<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/natal-chart">Натальные карты</nuxt-link>
            <nuxt-link to="/natal-chart/xc2kfknwi9823">xc2kfknwi9823</nuxt-link>
        </template>
    </PageLinks>
    <natal-title
        :title="'Получите персональный звездный путеводитель по Вашей жизни'"
        :desc="'Закажите натальные карты на нашем сервисе, и звезды укажут путь'">
    </natal-title>
    <natal-card-helps></natal-card-helps>
    <natal-thanks></natal-thanks>
    <natal-card-influence></natal-card-influence>
    <natal-advantages></natal-advantages>
    <natal-select-tariff></natal-select-tariff>
    <natal-faq></natal-faq>
</template>


