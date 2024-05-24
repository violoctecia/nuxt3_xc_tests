<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import DateInfo from "@/components/globalHoroscopesComponent/DateInfo.vue";
import DateDescSign from "@/components/globalHoroscopesComponent/DateDescSign.vue";
import { mayaSigns } from "@/assets/data/maya.js";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherOtherwTitle from "@/components/globalComponents/OtherOtherwTitle.vue";

const route = useRoute();
const rawDate = ref(route.params.date);

function findMayaSignByDate(date) {
  if (!date) return "Дата не определена";

  const [day, month, year] = date.split("-").map(Number);

  const startDate = new Date(Date.UTC(1930, 0, 1));

  const currentDate = new Date(Date.UTC(year, month - 1, day));

  const differenceInDays = Math.floor(
      (currentDate - startDate) / (1000 * 60 * 60 * 24)
  );

  const mayaSigns = [
    "Орел (Мен)",
    "Гриф (Киб)",
    "Земля (Кабан)",
    "Кремень (Эцнаб)",
    "Буря (Кауак)",
    "Солнце (Ахау)",
    "Крокодил (Имиш)",
    "Ветер (Ик)",
    "Ночь (Акбаль)",
    "Зерно (Кан)",
    "Змей (Чик-Чан)",
    "Череп (Кими)",
    "Олень (Маник)",
    "Звезда (Ламат)",
    "Вода (Мулук)",
    "Собака (Ок)",
    "Обезьяна (Чуэн)",
    "Лестница (Эб)",
    "Тростник (Бен)",
    "Ягуар (Иш)",
  ];

  let signIndex = differenceInDays % mayaSigns.length;
  if (signIndex < 0) {
    signIndex += mayaSigns.length;
  }
  return mayaSigns[signIndex];
}
const mayaSign = ref(findMayaSignByDate(rawDate.value));
watchEffect(() => {
  mayaSign.value = findMayaSignByDate(rawDate.value);
});
</script>

<template>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/maya">Гороскоп Майя</nuxt-link>
      <nuxt-link :to="`/horoscope/maya/date/${rawDate}`"
      >Гороскоп по дате рождения: {{ rawDate }}</nuxt-link
      >
    </template>
  </PageLinks>

  <DateInfo
      :title="'Гороскоп Майя'"
      :sign="mayaSign"
      :year="rawDate"
  ></DateInfo>
  <DateDescSign :sign="mayaSign" :signsData="mayaSigns"></DateDescSign>
  <CheckSign
      :signsData="mayaSigns"
      :title="'Другие знаки в гороскопе Майя'"
      :horoscopeType="'maya'"
  ></CheckSign>
  <ZodiacListwTitle></ZodiacListwTitle>
  <EastSection></EastSection>
  <OtherOtherwTitle :maya="true"></OtherOtherwTitle>
</template>
