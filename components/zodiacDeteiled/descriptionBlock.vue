<script setup>
import SocialLinks from "@/components/globalComponents/SocialLinks.vue";

const props = defineProps({
  title: String,
  description: String,
  descriptionType: String
});
</script>

<template>
  <section class="description_block">
    <div class="container">
      <div class="wrapper">
       <div class="img"></div>
        <p class="desc_type">{{props.descriptionType}}</p>
        <h1 class="title">{{ props.title }}</h1>
        <p class="desc">{{ props.description }}</p>
        <SocialLinks></SocialLinks>
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
}

.wrapper {
  border: 1px solid var(--dark-main-80);
  border-radius: 40px;
  padding: 40px 48px;
  background: var(--dark-main);
  position: relative;
}
.desc_type {
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  color: var(--dark-select-10);
  margin-bottom: 16px;
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
  .desc_type {
    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
    color: var(--dark-select-10);
    margin-bottom: 8px;
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
