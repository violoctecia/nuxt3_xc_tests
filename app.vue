<template>
    <MainHeader />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <MainFooter />
</template>
<script setup>
import MainFooter from "~/components/globalComponents/MainFooter.vue";
import MainHeader from "~/components/globalComponents/MainHeader.vue";
</script>
