<script setup>
import SeoMeta from "~/components/meta/seo-meta.vue";
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import TitleSection from "~/components/horoscope/date/title-section.vue";
import AllHoroscopes from "~/components/horoscope/date/all-horoscopes.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
import { isValidDate, formatDate } from "~/utils.js";

const route = useRoute();
const router = useRouter();
const rawDate = ref(route.params.date);

const { data, error } = await useAsyncData('fetchData', async () => {
    if (!isValidDate(route.params.date)) {
        router.push('/404');
        return {};
    }
    const formattedDate = formatDate(route.params.date);
    return { formattedDate, rawDate: route.params.date };
});

if (error.value) {
    router.push('/404');
}

const formattedDate = computed(() => data.value?.formattedDate || '');
const rawDateValue = computed(() => data.value?.rawDate || '');
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/">Гороскопы</nuxt-link>
            <nuxt-link :to="`/horoscope/date/${rawDateValue}/`">Гороскоп на {{ formattedDate }}</nuxt-link>
        </template>
    </PageLinks>
    <title-section :title="'Все гороскопы для рождённых на'" :date="formattedDate"></title-section>
    <all-horoscopes :date="formattedDate" :linkDate="rawDateValue"></all-horoscopes>
    <seo-meta></seo-meta>
</template>
