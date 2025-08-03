<template>
  <div class="mt-0 rounded-xl p-0 shadow-2xl shadow-gray-400/20 dark:shadow-gray-700  dark:bg-black max-w-7xl mx-auto"
    :style="{
      transform: `rotateX(${rotate}deg) scale(${scale})`,
      transformStyle: 'preserve-3d',
      willChange: 'transform, opacity',
      opacity: opacity,
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out',
      backfaceVisibility: 'hidden',
      transformOrigin: 'center center'
    }">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  rotate: {
    type: Number,
    default: 0
  },
  scale: {
    type: Number,
    default: 1
  },
  opacity: {
    type: Number,
    default: 1
  }
});
</script>