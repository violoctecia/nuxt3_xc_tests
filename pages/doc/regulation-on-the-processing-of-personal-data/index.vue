<script setup lang="ts">
import SeoMeta from "~/components/meta/seo-meta.vue";
import RegulationOnTheProcessingOfPersonalData
    from "~/components/docs/regulation-on-the-processing-of-personal-data.vue";


definePageMeta({
    layout: 'empty'
})
</script>

<template>
    <div class="doc">
    <regulation-on-the-processing-of-personal-data></regulation-on-the-processing-of-personal-data>
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
