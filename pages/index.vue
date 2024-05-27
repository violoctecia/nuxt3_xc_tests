<script setup>
import MainSection from "@/components/mainComponents/MainSection.vue";
import ZodiacSection from "@/components/mainComponents/ZodiacSection.vue";
import TelegramLink from "@/components/mainComponents/TelegramLink.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";

//meta
import { useFetch } from "#app";

const apiUrl = "https://horoscope-be.nomadicdemo.com/api/meta/main";
const { data } = await useFetch(apiUrl);
console.log(data.value);
</script>

<template>
  <Head>
    <Title>{{ data.seo_array.title }}</Title>
    <Meta
      name="description"
      v-if="data.seo_array.description"
      :content="data.seo_array.description"
    />
    <Meta
      name="og:image"
      v-if="data.seo_array.og_image"
      :content="data.seo_array.og_image"
    />
    <Meta
      name="keywords"
      v-if="data.seo_array.keywords"
      :content="data.seo_array.keywords"
    />
    <Meta
      name="author"
      v-if="data.seo_array.author"
      :content="data.seo_array.author"
    />

    <Link
      rel="canonical"
      v-if="data.seo_array.canonical"
      :href="data.seo_array.canonical"
    />
    <Meta
      property="og:title"
      v-if="data.seo_array.og_title"
      :content="data.seo_array.og_title"
    />
    <Meta
      property="og:description"
      v-if="data.seo_array.og_description"
      :content="data.seo_array.og_description"
    />
    <Meta
      property="og:url"
      v-if="data.seo_array.og_url"
      :content="data.seo_array.og_url"
    />
    <Meta
      property="og:type"
      v-if="data.seo_array.og_type"
      :content="data.seo_array.og_type"
    />
    <Meta
      property="og:site_name"
      v-if="data.seo_array.og_site_name"
      :content="data.seo_array.og_site_name"
    />
    <Meta
      name="twitter:card"
      v-if="data.seo_array.twitter_card"
      :content="data.seo_array.twitter_card"
    />
    <Meta
      name="twitter:site"
      v-if="data.seo_array.twitter_site"
      :content="data.seo_array.twitter_site"
    />
    <Meta
      name="twitter:title"
      v-if="data.seo_array.twitter_title"
      :content="data.seo_array.twitter_title"
    />
    <Meta
      name="twitter:description"
      v-if="data.seo_array.twitter_description"
      :content="data.seo_array.twitter_description"
    />
    <Meta
      name="twitter:image"
      v-if="data.seo_array.twitter_image"
      :content="data.seo_array.twitter_image"
    />
    <Meta
      name="twitter:creator"
      v-if="data.seo_array.twitter_creator"
      :content="data.seo_array.twitter_creator"
    />
    <Meta
      name="twitter:image:alt"
      v-if="data.seo_array.twitter_image_alt"
      :content="data.seo_array.twitter_image_alt"
    />
    <Meta
      property="og:locale"
      v-if="data.seo_array.og_locale"
      :content="data.seo_array.og_locale"
    />
    <Meta
      property="og:image:alt"
      v-if="data.seo_array.og_image_alt"
      :content="data.seo_array.og_image_alt"
    />
  </Head>
  <div ref="page" class="page">
    <MainSection></MainSection>
    <ZodiacSection></ZodiacSection>
    <TelegramLink></TelegramLink>
    <EastSection></EastSection>
    <OtherSection></OtherSection>
  </div>
</template>

<style scoped>
.page {
  transition: opacity 0.15s;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 0;
}
</style>
<script>
export default {
  mounted() {
    this.$refs.page.classList.add("fade-enter-active");
    setTimeout(() => {
      this.$refs.page.classList.remove("fade-enter-active");
    }, 150);
  },
  beforeRouteLeave(to, from, next) {
    this.$refs.page.classList.add("fade-leave-active");
    setTimeout(() => {
      next();
    }, 150);
  },
};
</script>
