<template>
  <div class="max-w-5xl mx-auto text-center transition-transform duration-600 ease-out will-change-transform" :style="{
    transform: `translateY(${translate}px)`,
    opacity: 1 - Math.abs(translate) / 100
  }">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  translate: {
    type: Number,
    default: 0
  }
});
</script>