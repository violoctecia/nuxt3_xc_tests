<script setup>
import OvenSvg from "@/assets/svg_zodiacs/1.vue";
import TaurusSvg from "@/assets/svg_zodiacs/2.vue";
import GeminiSvg from "@/assets/svg_zodiacs/3.vue";
import CancerSvg from "@/assets/svg_zodiacs/4.vue";
import LeoSvg from "@/assets/svg_zodiacs/5.vue";
import VirgoSvg from "@/assets/svg_zodiacs/6.vue";
import LibraSvg from "@/assets/svg_zodiacs/7.vue";
import ScorpioSvg from "@/assets/svg_zodiacs/8.vue";
import SagittariusSvg from "@/assets/svg_zodiacs/9.vue";
import CapricornSvg from "@/assets/svg_zodiacs/10.vue";
import AquariusSvg from "@/assets/svg_zodiacs/11.vue";
import PiscesSvg from "@/assets/svg_zodiacs/12.vue";

const props = defineProps({
  scroll: Boolean,
  wrap: Boolean,
});

const wrapperClass = props.scroll
    ? "scroll_wrapper"
    : props.wrap
        ? "flex_wrapper"
        : "";

import {useRoute} from "vue-router";

const route = useRoute();
const abc = route.params.param;
</script>

<template>
  <section class="compatibility">
    <div class="container">
      <div class="text">
        <h1 class="title">Совместимость других знаков</h1>
      </div>
      <div :class="['flex', wrapperClass]">
        <!-- Овен -->
        <nuxt-link to="/horoscope/zodiac/compatibility/oven" class="zodiac_block" v-if="abc != 'oven'">
          <div class="img">
            <OvenSvg></OvenSvg>
          </div>
          <div class="zodiac_text">
            <p>Овен</p>
            <span>21 марта - 19 апреля</span>
          </div>
        </nuxt-link>

        <!-- Телец -->
        <nuxt-link to="/horoscope/zodiac/compatibility/taurus" class="zodiac_block" v-if="abc != 'taurus'">
          <div class="img">
            <TaurusSvg></TaurusSvg>
          </div>
          <div class="zodiac_text">
            <p>Телец</p>
            <span>21 апреля - 20 мая</span>
          </div>
        </nuxt-link>

        <!-- Близнецы -->
        <nuxt-link to="/horoscope/zodiac/compatibility/gemini" class="zodiac_block" v-if="abc != 'gemini'">
          <div class="img">
            <GeminiSvg></GeminiSvg>
          </div>
          <div class="zodiac_text">
            <p>Близнецы</p>
            <span>21 мая - 20 июня</span>
          </div>
        </nuxt-link>

        <!-- Рак -->
        <nuxt-link to="/horoscope/zodiac/compatibility/cancer" class="zodiac_block" v-if="abc != 'cancer'">
          <div class="img">
            <CancerSvg></CancerSvg>
          </div>
          <div class="zodiac_text">
            <p>Рак</p>
            <span>21 июня - 22 июля</span>
          </div>
        </nuxt-link>

        <!-- Лев -->
        <nuxt-link to="/horoscope/zodiac/compatibility/leo" class="zodiac_block" v-if="abc != 'leo'">
          <div class="img">
            <LeoSvg></LeoSvg>
          </div>
          <div class="zodiac_text">
            <p>Лев</p>
            <span>23 июля - 22 августа</span>
          </div>
        </nuxt-link>

        <!-- Дева -->
        <nuxt-link to="/horoscope/zodiac/compatibility/virgo" class="zodiac_block" v-if="abc != 'virgo'">
          <div class="img">
            <VirgoSvg></VirgoSvg>
          </div>
          <div class="zodiac_text">
            <p>Дева</p>
            <span>23 августа - 22 сентября</span>
          </div>
        </nuxt-link>

        <!-- Весы -->
        <nuxt-link to="/horoscope/zodiac/compatibility/libra" class="zodiac_block" v-if="abc != 'libra'">
          <div class="img">
            <LibraSvg></LibraSvg>
          </div>
          <div class="zodiac_text">
            <p>Весы</p>
            <span>23 сентября - 22 октября</span>
          </div>
        </nuxt-link>

        <!-- Скорпион -->
        <nuxt-link to="/horoscope/zodiac/compatibility/scorpio" class="zodiac_block" v-if="abc != 'scorpio'">
          <div class="img">
            <ScorpioSvg></ScorpioSvg>
          </div>
          <div class="zodiac_text">
            <p>Скорпион</p>
            <span>23 октября - 21 ноября</span>
          </div>
        </nuxt-link>

        <!-- Стрелец -->
        <nuxt-link to="/horoscope/zodiac/compatibility/sagittarius" class="zodiac_block" v-if="abc != 'sagittarius'">
          <div class="img">
            <SagittariusSvg></SagittariusSvg>
          </div>
          <div class="zodiac_text">
            <p>Стрелец</p>
            <span>22 ноября - 21 декабря</span>
          </div>
        </nuxt-link>

        <!-- Козерог -->
        <nuxt-link to="/horoscope/zodiac/compatibility/capricorn" class="zodiac_block" v-if="abc != 'capricorn'">
          <div class="img">
            <CapricornSvg></CapricornSvg>
          </div>
          <div class="zodiac_text">
            <p>Козерог</p>
            <span>22 декабря - 19 января</span>
          </div>
        </nuxt-link>

        <!-- Водолей -->
        <nuxt-link to="/horoscope/zodiac/compatibility/aquarius" class="zodiac_block" v-if="abc != 'aquarius'">
          <div class="img">
            <AquariusSvg></AquariusSvg>
          </div>
          <div class="zodiac_text">
            <p>Водолей</p>
            <span>20 января - 18 февраля</span>
          </div>
        </nuxt-link>

        <!-- Рыбы -->
        <nuxt-link to="/horoscope/zodiac/compatibility/pisces" class="zodiac_block" v-if="abc != 'pisces'">
          <div class="img">
            <PiscesSvg></PiscesSvg>
          </div>
          <div class="zodiac_text">
            <p>Рыбы</p>
            <span>19 февраля - 20 марта</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>

</template>

<style scoped>
.text {
  margin-bottom: 64px;

  h1 {
    margin-bottom: 16px;
  }
}

.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: start;
}

.zodiac_block {
  padding: 43px 24px;
  background: var(--dark-select);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  min-width: 252px;

  .img {
    height: 80px;
    width: 80px;
    border-radius: 49px;
    background: var(--dark-main);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 56px;
      width: 56px;
    }
  }

  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    color: var(--dark-select-10);
    margin-bottom: 4px;
  }

  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 160%;
    text-align: center;
    color: var(--dark-select-20);
  }
}


.zodiac_text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.zodiac_block:hover {
  .img {
    background: var(--yellow);

    fill: var(--dark-main) !important;

    .svg_zodiac path {
      fill: var(--dark-main) !important;
    }

    .svg_zodiac path d {
      fill: var(--dark-main) !important;
    }
  }

  p {
    color: var(--yellow-80);
  }
}

@media (max-width: 1100px) {
  .text {
    margin-bottom: 20px;

    p {
      font-weight: 400;
      font-size: 17px;
      line-height: 153%;
      text-align: start;
    }
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .zodiac_block {
    padding: 16px;
    border-radius: 16px;
    gap: 24px;
    min-width: 50px;
    flex-basis: calc(33% - 8px) !important;

    p {
      font-size: 16px;
      line-height: 125%;
      margin-bottom: 8px;
    }

    span {
      font-size: 15px;
      line-height: 160%;
    }
  }
}


@media (max-width: 860px) {
  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .zodiac_block {
    flex-basis: calc(50% - 4px) !important;
  }
}


</style>
