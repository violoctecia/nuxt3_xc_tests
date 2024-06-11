<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import SeoMeta from "~/components/meta/seo-meta.vue";
import HoroscopeBlock from "~/components/horoscope/date/horoscope-block.vue";
import OtherHoroscopesDate from "~/components/horoscope/date/other-horoscopes-date.vue";
import TitleSection from "~/components/horoscope/date/title-section.vue";
import {useRoute} from "vue-router";
import {ref} from "vue";
import {formatDate, getMayaSign, isValidDate} from "~/utils.js";
import {mayaSigns} from "assets/data/maya.js";

const router = useRouter();
const route = useRoute();
const rawDate = ref(route.params.date);
const formattedDate = ref('');
const sign = ref('');

const {data, error} = await useAsyncData('fetchData', async () => {
    if (!isValidDate(rawDate.value)) {
        router.push('/404');
        return;
    }
    const formattedDateValue = formatDate(rawDate.value);
    const [day, month, year] = rawDate.value.split('-').map(Number);
    const signValue = getMayaSign(day, month, year);
    return {rawDate: rawDate.value, formattedDate: formattedDateValue, sign: signValue};
});

if (data.value) {
    rawDate.value = data.value.rawDate;
    formattedDate.value = data.value.formattedDate;
    sign.value = data.value;
}

const currentSign = ref(mayaSigns[sign.value.sign])
</script>

<template>
    <PageLinks>
        <template #links>
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/horoscope/">Гороскопы</nuxt-link>
            <nuxt-link :to="`/horoscope/maya/date/${rawDate}/`"
            >Ггороскоп Майя на {{ formattedDate }}
            </nuxt-link
            >
        </template>
    </PageLinks>
    <title-section :title="'Гороскоп Майя для рожденных'" :date="formattedDate"></title-section>
    <horoscope-block :sign="currentSign" :horoscope-type="'гороскопу майя'"></horoscope-block>
    <other-horoscopes-date :date="formattedDate" :url-date="rawDate"
                           :current-horoscope="'maya'"></other-horoscopes-date>
    <seo-meta></seo-meta>
</template>
