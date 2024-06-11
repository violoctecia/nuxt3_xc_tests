<script setup lang="ts">
import DocPoliticKonf from "~/components/docs/doc-politic-konf.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";

definePageMeta({
    layout: 'empty'
})
</script>

<template>
    <div class="doc">
        <doc-politic-konf></doc-politic-konf>
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
