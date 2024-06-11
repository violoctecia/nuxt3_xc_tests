<script setup>
import SeoMeta from "~/components/meta/seo-meta.vue";
import PageLinks from "~/components/globalComponents/PageLinks.vue";
import TitleSection from "~/components/horoscope/date/title-section.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
import { isValidDate, formatDate, getZodiacSign } from "~/utils.js";
import DetailSignDesc from "~/components/horoscope/date/detail-sign-desc.vue";
import Block3 from "~/components/horoscope/zodiacs/zodiacSignComponents/Block3.vue";
import ZodiacHoroscopeBlock from "~/components/horoscope/date/zodiac-horoscope-block.vue";
import OtherHoroscopesDate from "~/components/horoscope/date/other-horoscopes-date.vue";

const route = useRoute();
const router = useRouter();
const rawDate = ref(route.params.date);
const seoDate = route.params.date;
const formattedDate = ref('');
const zodiacSign = ref('');

const { data, error } = await useAsyncData('fetchData', async () => {
    if (!isValidDate(rawDate.value)) {
        router.push('/404');
        return;
    }
    const formattedDateValue = formatDate(rawDate.value);
    const [day, month, year] = rawDate.value.split('-').map(Number);
    const zodiacSignValue = getZodiacSign(day, month);

    return { rawDate: rawDate.value, formattedDate: formattedDateValue, zodiacSign: zodiacSignValue, seoDate: route.params.date };
});

if (data.value) {
    rawDate.value = data.value.rawDate;
    formattedDate.value = data.value.formattedDate;
    zodiacSign.value = data.value.zodiacSign;
}

</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/">Гороскопы</nuxt-link>
            <nuxt-link :to="`/horoscope/zodiac/date/${seoDate}/`">Зодиакальный гороскоп на {{ formattedDate }}</nuxt-link>
        </template>
    </PageLinks>
    <title-section :title="'Зодиакальный гороскоп для рожденных'" :date="formattedDate"></title-section>
    <zodiac-horoscope-block :sign="zodiacSign"></zodiac-horoscope-block>
    <detail-sign-desc :sign="zodiacSign"></detail-sign-desc>
    <block3></block3>
    <other-horoscopes-date :date="formattedDate" :url-date="seoDate" :current-horoscope="'zodiac'"></other-horoscopes-date>
    <seo-meta></seo-meta>
</template>
