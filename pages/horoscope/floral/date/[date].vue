<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import DateInfo from "@/components/globalHoroscopesComponent/DateInfo.vue";
import DateDescSign from "@/components/globalHoroscopesComponent/DateDescSign.vue";
import { floralSigns } from "@/assets/data/floral.js";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherOtherwTitle from "@/components/globalComponents/OtherOtherwTitle.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";

const signs = floralSigns;
const route = useRoute();
const rawDate = ref(route.params.date);

const extractMonthAndDayFromDate = (dateString) => {
  const [day, month] = dateString.split("-").map(Number);
  return { day, month };
};

const signDates = {
  Горечавка: [{ start: "01-01", end: "10-01" }],
  Чертополох: [{ start: "11-01", end: "20-01" }],
  Бессмертник: [{ start: "21-01", end: "31-01" }],
  Омела: [{ start: "01-02", end: "10-02" }],
  Красавка: [{ start: "11-02", end: "19-02" }],
  Мимоза: [{ start: "20-02", end: "29-02" }],
  Мак: [{ start: "01-03", end: "10-03" }],
  Лилия: [{ start: "11-03", end: "20-03" }],
  Наперстянка: [{ start: "21-03", end: "31-03" }],
  "Магнолия	": [{ start: "01-04", end: "10-04" }],
  Гортензия: [{ start: "11-04", end: "20-04" }],
  Георгин: [{ start: "21-04", end: "30-04" }],
  Ландыш: [{ start: "01-05", end: "10-05" }],
  Портулак: [{ start: "11-05", end: "21-05" }],
  Ромашка: [{ start: "22-05", end: "31-05" }],
  Колокольчик: [{ start: "01-06", end: "11-06" }],
  Маргаритка: [{ start: "12-06", end: "21-06" }],
  Тюльпан: [
    { start: "22-06", end: "31-06" },
    { start: "01-07", end: "01-07" },
  ],
  Кувшинка: [{ start: "02-07", end: "12-07" }],
  Фиалка: [{ start: "13-07", end: "23-07" }],
  Шиповник: [
    { start: "24-07", end: "31-07" },
    { start: "01-08", end: "02-08" },
  ],
  Подсолнух: [{ start: "03-08", end: "12-08" }],

  Роза: [{ start: "13-08", end: "23-08" }],
  Дельфиниум: [
    { start: "24-08", end: "31-08" },
    { start: "01-09", end: "02-09" },
  ],
  Гвоздика: [{ start: "03-09", end: "11-09" }],
  Астра: [{ start: "12-09", end: "22-09" }],
  Вереск: [
    { start: "23-09", end: "31-09" },
    { start: "01-09", end: "03-10" },
  ],
  Камелия: [{ start: "04-10", end: "13-10" }],
  Сирень: [{ start: "14-10", end: "23-10" }],
  Фрезия: [
    { start: "24-10", end: "31-10" },
    { start: "01-11", end: "02-11" },
  ],
  Орхидея: [{ start: "03-11", end: "12-11" }],
  Пион: [{ start: "13-11", end: "22-11" }],
  Гладиолус: [
    { start: "23-11", end: "31-11" },
    { start: "01-12", end: "02-12" },
  ],
  Одуванчик: [{ start: "03-12", end: "12-12" }],
  Лотос: [{ start: "13-12", end: "22-12" }],
  Эдельвейс: [{ start: "23-12", end: "31-12" }],
};

// Функция для нахождения знака по дате
function findSignByDate(date) {
  const { day, month } = extractMonthAndDayFromDate(date);

  // Поиск знака по дате
  for (const [sign, dates] of Object.entries(signDates)) {
    for (const { start, end } of dates) {
      const [startDay, startMonth] = start.split("-").map(Number);
      const [endDay, endMonth] = end.split("-").map(Number);
      if (
          month === startMonth &&
          day >= startDay &&
          month === endMonth &&
          day <= endDay
      ) {
        return sign;
      }
    }
  }
}

const dateSign = ref(findSignByDate(rawDate.value));

watchEffect(() => {
  dateSign.value = findSignByDate(rawDate.value);
});
</script>

<template>
  <PageLinks>
    <template #links>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/horoscope/floral">Цветочный гороскоп</nuxt-link>
      <nuxt-link :to="`/horoscope/floral/date/${rawDate}`"
      >Гороскоп по дате рождения: {{ rawDate }}</nuxt-link
      >
    </template>
  </PageLinks>

  <DateInfo
      :title="'Цветочный гороскоп'"
      :sign="dateSign"
      :year="rawDate"
  ></DateInfo>
  <DateDescSign :sign="dateSign" :signsData="signs"></DateDescSign>
  <CheckSign
      :signsData="floralSigns"
      :title="'Другие цветы в Цветочном гороскопе'"
      :horoscopeType="'floral'"
  ></CheckSign>
  <ZodiacListwTitle></ZodiacListwTitle>
  <EastSection></EastSection>
  <OtherOtherwTitle :floral="true"></OtherOtherwTitle>
</template>
