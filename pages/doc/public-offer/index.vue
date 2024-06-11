<script setup lang="ts">
import SeoMeta from "~/components/meta/seo-meta.vue";
import DocPublicOffer from "~/components/docs/doc-public-offer.vue";

definePageMeta({
    layout: 'empty'
})
</script>

<template>
    <div class="doc">
        <doc-public-offer></doc-public-offer>
    </div>
    <seo-meta></seo-meta>
</template>

<style scoped>
.doc {
    max-width: 720px;
    width: 720px;
    margin: 0 auto;
}

@media (max-width: 1100px) {
    .doc {
        width: calc(100% - 48px);
    }
}
</style>
