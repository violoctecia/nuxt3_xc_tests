<script setup>
const props = defineProps({
    natal: {
        type: Boolean,
        default: false
    },
    maxwidth: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
  <button class="btn_hover" :class="{ natal: props.natal, 'max-width': props.maxwidth }"><slot></slot></button>
</template>

<style scoped>
button {
  border-radius: 20px;
  padding: 14px 24px;
  width: 238px;
  background: var(--yellow);
  font-weight: 500;
  font-size: 19px;
  line-height: 147%;
  text-align: center;
  color: var(--dark-select);
}
.natal {
    width: 309px;
}
@media (max-width: 1100px) {
  button, .natal {
    width: 100%;
  }
}
</style>
