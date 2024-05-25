<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import MainBlockLinks from "~/components/natal-chart/main-block-links.vue";
import TelegramLink from "~/components/mainComponents/TelegramLink.vue";
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
            </template>
        </PageLinks>
        <main-block-links></main-block-links>
        <div class="mb96">
            <telegram-link></telegram-link>
        </div>
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
