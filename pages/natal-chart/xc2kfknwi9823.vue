<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import NatalTitle from "~/components/natal-chart/natal-title.vue";
import NatalFaq from "~/components/natal-chart/natal-faq.vue";
</script>

<script>
export default {
    mounted() {
        this.$refs.page.classList.add("fade-enter-active");
        setTimeout(() => {
            this.$refs.page.classList.remove("fade-enter-active");
        }, 300);
    },
    beforeRouteLeave(to, from, next) {
        this.$refs.page.classList.add("fade-leave-active");
        setTimeout(() => {
            next();
        }, 300);
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
        <natal-faq></natal-faq>
    </div>
</template>

<style scoped>
.page {
    transition: opacity 0.3s;
}

.fade-enter-active,
.fade-leave-active {
    opacity: 0;
}
</style>
