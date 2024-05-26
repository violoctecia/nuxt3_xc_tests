<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import NatalTitle from "~/components/natal-chart/natal-paid-page/natal-title.vue";
import NatalFaq from "~/components/natal-chart/natal-paid-page/natal-faq.vue";
import NatalCardHelps from "~/components/natal-chart/natal-paid-page/natal-card-helps.vue";
import NatalThanks from "~/components/natal-chart/natal-paid-page/natal-thanks.vue";
import NatalCardInfluence from "~/components/natal-chart/natal-paid-page/natal-card-influence.vue";
</script>

<script>
export default {
    mounted() {
        this.$refs.page.classList.add("fade-enter-active");
        setTimeout(() => {
            this.$refs.page.classList.remove("fade-enter-active");
        }, 150);
    },
    beforeRouteLeave(to, from, next) {
        this.$refs.page.classList.add("fade-leave-active");
        setTimeout(() => {
            next();
        }, 150);
    },
};
</script>


<template>
    <div ref="page" class="page">
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
        <natal-faq></natal-faq>
    </div>
</template>

<style scoped>

</style>
