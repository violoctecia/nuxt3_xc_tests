<script setup>
import MainSection from "@/components/mainComponents/MainSection.vue";
import ZodiacSection from "@/components/mainComponents/ZodiacSection.vue";
import TelegramLink from "@/components/mainComponents/TelegramLink.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
</script>

<template>
    <seo-meta :url="'main'"></seo-meta>
    <div ref="page" class="page">
        <MainSection></MainSection>
        <ZodiacSection></ZodiacSection>
        <TelegramLink></TelegramLink>
        <EastSection></EastSection>
        <OtherSection></OtherSection>
    </div>
</template>

<style scoped>
.page {
    transition: opacity 0.15s;
}

.fade-enter-active,
.fade-leave-active {
    opacity: 0;
}
</style>
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



