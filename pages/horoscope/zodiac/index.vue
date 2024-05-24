<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import MainSection from "@/components/zodiacComponents/MainSection.vue";
import WhaIsZodiac from "@/components/zodiacComponents/WhaIsZodiac.vue";
import AstrologyBLock from "@/components/zodiacComponents/AstrologyBLock.vue";
import HowDoHoroscope from "@/components/zodiacComponents/HowDoHoroscope.vue";
</script>
<script>
export default {
  mounted() {
    this.$refs.page.classList.add('fade-enter-active');
    setTimeout(() => {
      this.$refs.page.classList.remove('fade-enter-active');
    }, 300);
  },
  beforeRouteLeave(to, from, next) {
    this.$refs.page.classList.add('fade-leave-active');
    setTimeout(() => {
      next();
    }, 300);
  },
};
</script>
<style scoped>
.page {
  transition: opacity 0.3s;
}
.fade-enter-active, .fade-leave-active {
  opacity: 0;
}
</style>

<template>
  <div ref="page" class="page">
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/zodiac">Зодиакальный гороскоп</nuxt-link>
    </template>
  </PageLinks>
  <MainSection></MainSection>
  <WhaIsZodiac></WhaIsZodiac>
  <AstrologyBLock></AstrologyBLock>
  <HowDoHoroscope></HowDoHoroscope>
  </div>
</template>
