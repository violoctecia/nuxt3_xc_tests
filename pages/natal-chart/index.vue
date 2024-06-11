<script setup>
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import MainBlockLinks from "~/components/natal-chart/main-block-links.vue";
import TelegramLink from "~/components/mainComponents/TelegramLink.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>


<template>
    <seo-meta></seo-meta>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/natal-chart/">Натальные карты</nuxt-link>
        </template>
    </PageLinks>

    <div class="container">
        <div class="natal-main-title">
            <h1>Натальные карты</h1>
            <h2>Натальная карта используется для анализа личности, характера и судьбы человека и позволяет
                разобраться в разных сферах жизни</h2>
        </div>
    </div>
    <main-block-links></main-block-links>
    <div class="mb96">
        <telegram-link></telegram-link>
    </div>
</template>

<style scoped>
.natal-main-title {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 724px;
    margin: auto;
    margin-bottom: 48px;

    h1 {
        font-weight: 900;
        font-size: 56px;
        line-height: 107%;
        text-align: center;
        color: var(--dark-select-10);
    }

    h2 {
        font-weight: 400;
        font-size: 17px;
        line-height: 165%;
        text-align: center;
        color: var(--dark-select-10);
    }
}

@media (max-width: 1100px) {
    .natal-main-title {
        gap: 8px;
        margin-bottom: 40px;
        max-width: 500px;

        h1 {
            font-weight: 900;
            font-size: 32px;
            line-height: 119%;
            text-align: center;
            color: var(--dark-select-10);
        }

        h2 {
            font-weight: 400;
            font-size: 17px;
            line-height: 153%;
            text-align: center;
            color: var(--dark-select-10);
        }
    }
}


</style>
