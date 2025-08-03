<template>
  <div ref="containerRef"
    class="relative flex  items-center justify-center  md:max-h-[80rem] px-5 max-w-7xl mx-auto pb-5 mb-3">
    <div class="relative w-full py-0" style="perspective: 1000px">
      <ContainerScrollTitle :translate="translateY">
        <slot name="title"></slot>
      </ContainerScrollTitle>
      <ContainerScrollCard :rotate="rotate" :scale="scale" :opacity="opacity">
        <slot name="card" />
      </ContainerScrollCard>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useWindowSize, useScroll, useElementBounding } from '@vueuse/core';
import ContainerScrollTitle from './ContainerScrollTitle.vue';
import ContainerScrollCard from './ContainerScrollCard.vue';

const containerRef = ref(null);
const isMobile = ref(false);

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});

const { height } = useWindowSize();
const { y: scrollY } = useScroll(window, { throttle: 16 });
const { bottom } = useElementBounding(containerRef);

const scrollYProgress = computed(() => {
  if (!bottom.value) return 0;
  const progress = 1 - Math.max(0, bottom.value - scrollY.value) / height.value;
  return Math.min(1, Math.max(0, progress));
});

const scaleDimensions = computed(() => (isMobile.value ? [0.8, 1] : [0.9, 1]));

const rotate = computed(() => {
  return 15 * (1 - Math.pow(scrollYProgress.value, 0.8));
});

const scale = computed(() => {
  const [start, end] = scaleDimensions.value;
  const easedProgress = 1 - Math.pow(1 - scrollYProgress.value, 2);
  return start + (end - start) * easedProgress;
});

const opacity = computed(() => {
  return 0.2 + 0.8 * scrollYProgress.value;
});

const translateY = computed(() => {
  return -80 * (1 - Math.pow(1 - scrollYProgress.value, 2));
});
</script>