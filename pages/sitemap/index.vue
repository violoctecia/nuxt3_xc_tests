<script setup>

</script>

<template>
  <div class="container">
    <h1>Карта сайта</h1>

    <div class="block">
      <h2>Гороскопы</h2>
      <div class="inner_wrapper">
        <div class="col">
          <nuxt-link class="col_title" to="/horoscope/zodiac">Зодиакальный гороскоп</nuxt-link>
          <div class="links">
            <p class="link">?</p>
            <p class="link">?</p>
            <p class="link">?</p>
            <p class="link">?</p>
            <p class="link">?</p>
          </div>
        </div>
        <div class="col">
          <nuxt-link class="col_title" to="/horoscope/chinese">Китайский гороскоп</nuxt-link>
          <div class="links">
            <p class="link">?</p>
            <p class="link">?</p>
            <p class="link">?</p>
            <p class="link">?</p>
            <p class="link">?</p>
          </div>
        </div>
        <div class="col">
          <nuxt-link class="col_title" to="/horoscope/japanese">Японский гороскоп</nuxt-link>
          <div class="links">
            <p class="link">?</p>
            <p class="link">?</p>
            <p class="link">?</p>
            <p class="link">?</p>
            <p class="link">?</p>
          </div>
        </div>
      </div>
    </div>

    <div class="block section">
      <h2>Раздел сайта</h2>
      <div class="inner_wrapper">
        <div class="col">
          <nuxt-link class="col_title" to="/horoscope/zodiac">Зодиакальный гороскоп</nuxt-link>
        </div>
        <div class="col">
          <nuxt-link class="col_title" to="/horoscope/chinese">Китайский гороскоп</nuxt-link>
        </div>
        <div class="col">
          <nuxt-link class="col_title" to="/horoscope/japanese">Японский гороскоп</nuxt-link>
        </div>
        <div class="col">
          <nuxt-link class="col_title" to="/horoscope/zoroastrian">Зороастрийский гороскоп</nuxt-link>
        </div>
        <div class="col">
          <nuxt-link class="col_title" to="/horoscope/floral">Цветочный гороскоп</nuxt-link>
        </div>
        <div class="col">
          <nuxt-link class="col_title" to="/horoscope/druids">Гороскоп Друидов</nuxt-link>
        </div>
        <div class="col">
          <nuxt-link class="col_title" to="/horoscope/maya">Гороскоп Майя</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 64px;
}
.section {
  .col_title {
    margin-bottom: 0;
  }
}
.block:last-child {
  margin-bottom: 0;
}

.container {
  max-width: 960px;
  margin-bottom: 96px;
}

h1 {
  font-weight: 900;
  font-size: 32px;
  line-height: 112%;
  color: var(--dark-select-10);
  padding: 40px 0;
}

h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  color: var(--dark-select-60);
}

.inner_wrapper {
  display: flex;
  column-gap: 32px;
  row-gap: 24px;
  flex-wrap: wrap;
}

.col {
  display: flex;
  flex-direction: column;
  width: 216px;
}

.col_title {
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  color: var(--dark-select-10);
  margin-bottom: 12px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link {
  font-weight: 400;
  font-size: 13px;
  line-height: 154%;
  color: var(--dark-select-40);
}
</style>