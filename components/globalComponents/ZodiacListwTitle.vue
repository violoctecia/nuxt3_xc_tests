<script setup>

import ZodiacsList from "@/components/globalComponents/ZodiacsList.vue";
</script>

<template>
  <section>
    <div class="container">
      <h2 class="title">Зодиакальный гороскоп</h2>
      <ZodiacsList :wrap="true"></ZodiacsList>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 64px;
}
@media (max-width: 1100px) {
  h2 {
    margin-bottom: 20px;
  }
}
</style>
