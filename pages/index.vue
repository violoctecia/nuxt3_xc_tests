<script setup>
import MainSection from "@/components/mainComponents/MainSection.vue";
import ZodiacSection from "@/components/mainComponents/ZodiacSection.vue";
import TelegramLink from "@/components/mainComponents/TelegramLink.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";
import SeoMeta from "@/components/meta/seo-meta.vue";
</script>

<template>
    <MainSection></MainSection>
    <ZodiacSection></ZodiacSection>
    <TelegramLink></TelegramLink>
    <EastSection></EastSection>
    <OtherSection></OtherSection>
    <seo-meta></seo-meta>
</template>
