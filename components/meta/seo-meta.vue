<script setup>
import {useFetch} from '#app'
import {API_KEY} from "~/config.js";
import { useRoute } from 'vue-router';

const route = useRoute();
const url = route.path;

const apiUrl = `${API_KEY}/meta?slug=${url}`;
console.log(apiUrl)
const { data } = await useFetch(apiUrl);
</script>

<template>
    <Head v-if="data">
        <Title v-if="data.seo_array.title">{{ data.seo_array.title }}</Title>
        <Meta name="description" v-if="data.seo_array.description" :content="data.seo_array.description"/>
        <Meta name="og:image" v-if="data.seo_array.og_image" :content="data.seo_array.og_image"/>
        <Meta name="keywords" v-if="data.seo_array.keywords" :content="data.seo_array.keywords"/>
        <Meta name="author" v-if="data.seo_array.author" :content="data.seo_array.author"/>
        <Meta name="robots" v-if="data.seo_array.robots" :content="data.seo_array.robots"/>
        <Link rel="canonical" v-if="data.seo_array.canonical" :href="data.seo_array.canonical"/>
        <Meta property="og:title" v-if="data.seo_array.og_title" :content="data.seo_array.og_title"/>
        <Meta property="og:description" v-if="data.seo_array.og_description" :content="data.seo_array.og_description"/>
        <Meta property="og:url" v-if="data.seo_array.og_url" :content="data.seo_array.og_url"/>
        <Meta property="og:type" v-if="data.seo_array.og_type" :content="data.seo_array.og_type"/>
        <Meta property="og:site_name" v-if="data.seo_array.og_site_name" :content="data.seo_array.og_site_name"/>
        <Meta name="twitter:card" v-if="data.seo_array.twitter_card" :content="data.seo_array.twitter_card"/>
        <Meta name="twitter:site" v-if="data.seo_array.twitter_site" :content="data.seo_array.twitter_site"/>
        <Meta name="twitter:title" v-if="data.seo_array.twitter_title" :content="data.seo_array.twitter_title"/>
        <Meta name="twitter:description" v-if="data.seo_array.twitter_description" :content="data.seo_array.twitter_description"/>
        <Meta name="twitter:image" v-if="data.seo_array.twitter_image" :content="data.seo_array.twitter_image"/>
        <Meta name="twitter:creator" v-if="data.seo_array.twitter_creator" :content="data.seo_array.twitter_creator"/>
        <Meta name="twitter:image:alt" v-if="data.seo_array.twitter_image_alt" :content="data.seo_array.twitter_image_alt"/>
        <Meta property="og:locale" v-if="data.seo_array.og_locale" :content="data.seo_array.og_locale"/>
        <Meta property="og:image:alt" v-if="data.seo_array.og_image_alt" :content="data.seo_array.og_image_alt"/>
    </Head>
</template>
