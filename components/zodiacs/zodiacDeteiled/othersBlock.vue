<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
const param = route.params.param;

const props = defineProps({
  title: String,
  data: Object,
  blockTitle: String,
  navigateTo: String
});

const otherQualities = Object.entries(props.data).reduce((acc, [key, value]) => {
  if (key !== param) {
    acc[key] = value;
  }
  return acc;
}, {});
</script>

<template>
  <section>
    <div class="container">
      <div class="text">
        <h1 class="title">{{ props.title }}</h1>
      </div>
      <div class="wrapper">

          <div class="block" v-for="item in otherQualities">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="#111010"/>
              </svg>

              <h2>{{ props.blockTitle }}</h2>
              <nuxt-link :to="`/horoscope/zodiac/${props.navigateTo}/${item.title.en}`">{{ item.title.ru }}</nuxt-link>
          </div>
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

  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 133%;
    text-align: center;
  }
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.block {
  padding: 49px 30px;
  background: var(--dark-select);
  height: 234px;
  width: 252px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 16px;
  }

  h2 {
    font-weight: 400;
    font-size: 17px;
    line-height: 165%;
    text-align: center;
    color: var(--dark-select-20);
    margin-bottom: 4px;
  }

  a {
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    color: var(--dark-select-10);
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


  .block {
    padding: 16px;
    flex-basis: calc(33% - 8px);
    height: auto;
    max-width: none;
    min-width: 175px;
    border-radius: 16px;

    svg {
      margin-bottom: 8px;
      width: 48px;
    }

    h2 {
      font-size: 13px;
      line-height: 169%;
      margin-bottom: 2px;
    }

    a {
      font-weight: 500;
      font-size: 15px;
      line-height: 160%;
    }
  }
}

@media (max-width: 840px) {
  .wrapper {
    gap: 8px;
  }

  .block {
    flex-basis: calc(50% - 4px);
    min-width: auto;
  }
}
</style>
