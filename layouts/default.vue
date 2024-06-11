<script setup lang="ts">
import MainHeader from "~/components/globalComponents/MainHeader.vue";
import MainFooter from "~/components/globalComponents/MainFooter.vue";
</script>

<template>
    <MainHeader />
    <slot />
    <MainFooter />
</template>

<style scoped>

</style>
