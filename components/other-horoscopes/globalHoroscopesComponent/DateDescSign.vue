<script setup>
import {ref} from 'vue';

const props = defineProps({
  sign: String,
  signsData: Array,
});


const signsData = ref(props.signsData);


const findSignByRussianName = (signName) => {
  return signsData.value.find(sign => sign.ru === signName);
};

// Найденный объект знака
const foundSign = ref(findSignByRussianName(props.sign));
</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <div class="block">
          <div class="img">
            <img v-if="foundSign.image" :src="foundSign.image" alt="sign"/>
          </div>
          <h1 class="title">Описание знака: {{ foundSign.ru }}</h1>
          <p class="desc">{{ foundSign.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  img {
    width: 72px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.block {
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
    line-height: 110%;
    text-align: start;
    margin-bottom: 32px;
  }
}

.container {
  max-width: 720px;
  margin: 0 auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

@media (max-width: 1100px) {
  .wrapper {
    gap: 20px;
  }

  .img {
    width: 64px;
    height: 64px;
    margin-bottom: 12px;

    img {
      width: max-content;
      height: max-content;
    }
  }
  .block {
    h1 {
      margin-bottom: 16px;
      font-size: 24px;
      line-height: 117%;
    }

    p {
      font-size: 15px;
      line-height: 160%;
    }
  }

}
</style>