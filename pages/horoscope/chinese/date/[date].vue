<script setup>
import { ref } from "vue";
import {useRoute} from "vue-router";
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
import TitleSection from "~/components/horoscope/date/title-section.vue";
import {formatDate, getChineseSign, isValidDate} from "~/utils.js";

const router = useRouter();
const route = useRoute();
const rawDate = ref(route.params.date);
const formattedDate = ref('');
const sign = ref('');

const { data, error } = await useAsyncData('fetchData', async () => {
    if (!isValidDate(rawDate.value)) {
        router.push('/404');
        return;
    }
    const formattedDateValue = formatDate(rawDate.value);
    const [day, month, year] = rawDate.value.split('-').map(Number);
    const signValue = getChineseSign(year);
    return { rawDate: rawDate.value, formattedDate: formattedDateValue, sign: signValue, seoDate: route.params.date };
});

if (data.value) {
    rawDate.value = data.value.rawDate;
    formattedDate.value = data.value.formattedDate;
    sign.value = data.value.sign;
}
import {chineseSigns, chineseElements} from "assets/data/chinese.js";
import HoroscopeBlock from "~/components/horoscope/date/horoscope-block.vue";
import OtherHoroscopesDate from "~/components/horoscope/date/other-horoscopes-date.vue";

const currentSign = ref(chineseSigns[sign.value.sign])
const currentElement = ref(chineseElements[sign.value.element])
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/">Гороскопы</nuxt-link>
            <nuxt-link :to="`/horoscope/chinese/date/${rawDate}/`"
                >Китайский гороскоп на {{ formattedDate }}</nuxt-link
            >
        </template>
    </PageLinks>
    <title-section :title="'Китайский гороскоп для рожденных'" :date="formattedDate"></title-section>
    <horoscope-block :sign="currentSign" :element="currentElement" :horoscope-type="'китайскому гороскопу'"></horoscope-block>
    <other-horoscopes-date :date="formattedDate" :url-date="rawDate" :current-horoscope="'chinese'"></other-horoscopes-date>
    <seo-meta></seo-meta>
</template>
