<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import MainSection from "~/components/zodiacs/zodiacComponents/MainSection.vue";
import WhaIsZodiac from "~/components/zodiacs/zodiacComponents/WhaIsZodiac.vue";
import AstrologyBLock from "~/components/zodiacs/zodiacComponents/AstrologyBLock.vue";
import HowDoHoroscope from "~/components/zodiacs/zodiacComponents/HowDoHoroscope.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";


</script>
<script>
export default {
    mounted() {
        this.$refs.page.classList.add('fade-enter-active');
        setTimeout(() => {
            this.$refs.page.classList.remove('fade-enter-active');
        }, 150);
    },
    beforeRouteLeave(to, from, next) {
        this.$refs.page.classList.add('fade-leave-active');
        setTimeout(() => {
            next();
        }, 150);
    },
};
</script>

<template>
    <seo-meta :url="'zodiac_main'"></seo-meta>
    <div ref="page" class="page">
        <PageLinks>
            <template #links>
                <nuxt-link to="/">Главная</nuxt-link>
                <nuxt-link to="/horoscope/zodiac">Зодиакальный гороскоп</nuxt-link>
            </template>
        </PageLinks>
        <MainSection></MainSection>
        <WhaIsZodiac></WhaIsZodiac>
        <AstrologyBLock></AstrologyBLock>
        <HowDoHoroscope></HowDoHoroscope>
    </div>
</template>
