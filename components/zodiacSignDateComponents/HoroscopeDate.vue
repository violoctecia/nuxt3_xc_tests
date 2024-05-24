<script setup>
import {useRoute} from "vue-router";
import icon1 from "@/assets/svg_zodiacs/1.vue";
import icon2 from "@/assets/svg_zodiacs/2.vue";
import icon3 from "@/assets/svg_zodiacs/3.vue";
import icon4 from "@/assets/svg_zodiacs/4.vue";
import icon5 from "@/assets/svg_zodiacs/5.vue";
import icon6 from "@/assets/svg_zodiacs/6.vue";
import icon7 from "@/assets/svg_zodiacs/7.vue";
import icon8 from "@/assets/svg_zodiacs/8.vue";
import icon9 from "@/assets/svg_zodiacs/9.vue";
import icon10 from "@/assets/svg_zodiacs/10.vue";
import icon11 from "@/assets/svg_zodiacs/11.vue";
import icon12 from "@/assets/svg_zodiacs/12.vue";
import SocialLinks from "@/components/globalComponents/SocialLinks.vue";

const props = defineProps({
  dateInfo: Object,
  text: String,
});

const route = useRoute();
const sign = route.params.sign;

const zodiacInfo = {
  oven: {
    image: icon1,
  },
  taurus: {
    image: icon2,
  },
  twins: {
    image: icon3,
  },
  cancer: {
    image: icon4,
  },
  lion: {
    image: icon5,
  },
  virgo: {
    image: icon6,
  },
  scales: {
    image: icon7,
  },
  scorpion: {
    image: icon8,
  },
  sagittarius: {
    image: icon9,
  },
  capricorn: {
    image: icon10,
  },
  aquarius: {
    image: icon11,
  },
  fish: {
    image: icon12,
  },
};
</script>

<template>
  <section class="horoscope_date">
    <div class="container">
      <div class="wrapper">
        <component :is="zodiacInfo[sign].image" class="img"></component>
        <h1 class="title">
          {{ props.dateInfo.russianDate + props.dateInfo.genitiveCase }}
        </h1>

        <p class="desc">{{ props.text }}</p>
        <SocialLinks></SocialLinks>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 44px;
}
.img {
  border-radius: 49px;
  padding: 12px;
  width: 96px;
  height: 96px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-select);
}

.wrapper {
  border: 1px solid var(--dark-main-80);
  border-radius: 40px;
  padding: 40px 48px;
  background: var(--dark-main);
  position: relative;
}

h1 {
  text-align: start;
  margin-bottom: 24px;
}

@media (max-width: 1100px) {
  .wrapper {
    border-radius: 16px;
    padding: 24px;
  }

  .img {
    width: 64px;
    height: 64px;
    margin-bottom: 12px;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  h1 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
  }

}
</style>
