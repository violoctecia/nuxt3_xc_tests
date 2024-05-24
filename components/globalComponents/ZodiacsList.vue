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
</script>

<template>
  <div :class="['flex', wrapperClass]">
    <!-- Овен -->
    <nuxt-link to="/horoscope/zodiac/oven" class="zodiac_block">
      <div class="img">
        <OvenSvg></OvenSvg>
      </div>
      <div class="zodiac_text">
        <p>Овен</p>
        <span>21 марта - 19 апреля</span>
      </div>
    </nuxt-link>

    <!-- Телец -->
    <nuxt-link to="/horoscope/zodiac/taurus" class="zodiac_block">
      <div class="img">
        <TaurusSvg></TaurusSvg>
      </div>
      <div class="zodiac_text">
        <p>Телец</p>
        <span>21 апреля - 20 мая</span>
      </div>
    </nuxt-link>

    <!-- Близнецы -->
    <nuxt-link to="/horoscope/zodiac/twins" class="zodiac_block">
      <div class="img">
        <GeminiSvg></GeminiSvg>
      </div>
      <div class="zodiac_text">
        <p>Близнецы</p>
        <span>21 мая - 20 июня</span>
      </div>
    </nuxt-link>

    <!-- Рак -->
    <nuxt-link to="/horoscope/zodiac/cancer" class="zodiac_block">
      <div class="img">
        <CancerSvg></CancerSvg>
      </div>
      <div class="zodiac_text">
        <p>Рак</p>
        <span>21 июня - 22 июля</span>
      </div>
    </nuxt-link>

    <!-- Лев -->
    <nuxt-link to="/horoscope/zodiac/lion" class="zodiac_block">
      <div class="img">
        <LeoSvg></LeoSvg>
      </div>
      <div class="zodiac_text">
        <p>Лев</p>
        <span>23 июля - 22 августа</span>
      </div>
    </nuxt-link>

    <!-- Дева -->
    <nuxt-link to="/horoscope/zodiac/virgo" class="zodiac_block">
      <div class="img">
        <VirgoSvg></VirgoSvg>
      </div>
      <div class="zodiac_text">
        <p>Дева</p>
        <span>23 августа - 22 сентября</span>
      </div>
    </nuxt-link>

    <!-- Весы -->
    <nuxt-link to="/horoscope/zodiac/scales" class="zodiac_block">
      <div class="img">
        <LibraSvg></LibraSvg>
      </div>
      <div class="zodiac_text">
        <p>Весы</p>
        <span>23 сентября - 22 октября</span>
      </div>
    </nuxt-link>

    <!-- Скорпион -->
    <nuxt-link to="/horoscope/zodiac/scorpion" class="zodiac_block">
      <div class="img">
        <ScorpioSvg></ScorpioSvg>
      </div>
      <div class="zodiac_text">
        <p>Скорпион</p>
        <span>23 октября - 21 ноября</span>
      </div>
    </nuxt-link>

    <!-- Стрелец -->
    <nuxt-link to="/horoscope/zodiac/sagittarius" class="zodiac_block">
      <div class="img">
        <SagittariusSvg></SagittariusSvg>
      </div>
      <div class="zodiac_text">
        <p>Стрелец</p>
        <span>22 ноября - 21 декабря</span>
      </div>
    </nuxt-link>

    <!-- Козерог -->
    <nuxt-link to="/horoscope/zodiac/capricorn" class="zodiac_block">
      <div class="img">
        <CapricornSvg></CapricornSvg>
      </div>
      <div class="zodiac_text">
        <p>Козерог</p>
        <span>22 декабря - 19 января</span>
      </div>
    </nuxt-link>

    <!-- Водолей -->
    <nuxt-link to="/horoscope/zodiac/aquarius" class="zodiac_block">
      <div class="img">
        <AquariusSvg></AquariusSvg>
      </div>
      <div class="zodiac_text">
        <p>Водолей</p>
        <span>20 января - 18 февраля</span>
      </div>
    </nuxt-link>

    <!-- Рыбы -->
    <nuxt-link to="/horoscope/zodiac/fish" class="zodiac_block">
      <div class="img">
        <PiscesSvg></PiscesSvg>
      </div>
      <div class="zodiac_text">
        <p>Рыбы</p>
        <span>19 февраля - 20 марта</span>
      </div>
    </nuxt-link>
  </div>
</template>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;

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
      stroke: var(--dark-main) !important;
      stroke-width: 0.1;
      stroke-miterlimit: 10;
    }
  }

  p {
    color: var(--yellow-80);
  }
}

@media (max-width: 1100px) {
  .scroll_wrapper {
    overflow-x: scroll;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;
    justify-content: start;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 20px;
  }

  .flex_wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .flex_wrapper.flex {
    .zodiac_block {
      padding: 16px;
      border-radius: 16px;
      gap: 24px;
      min-width: 50px;
      flex-basis: calc(25% - 8px);

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
}

@media (max-width: 750px) {
  .flex_wrapper.flex {
    .zodiac_block {
      flex-basis: calc(33% - 8px);
    }
  }
}
@media (max-width: 500px) {
  .flex_wrapper.flex {
    .zodiac_block {
      flex-basis: calc(50% - 8px);
    }
  }
}
</style>
