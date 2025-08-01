<template>
  <div :class="cn(
    'relative w-full text-center font-sans leading-none',
    props.class,
  )">
    <span ref="text1Ref" :class="cn(TEXT_CLASSES, 'inline-flex items-center gap-2')">
      <span v-if="currentText1.flag" class="shrink-0">{{ currentText1.flag }}</span>
      <span>{{ currentText1.text }}</span>
    </span>
    <span ref="text2Ref" :class="cn(TEXT_CLASSES, 'inline-flex items-center gap-2')">
      <span v-if="currentText2.flag" class="shrink-0">{{ currentText2.flag }}</span>
      <span>{{ currentText2.text }}</span>
    </span>

    <svg id="filters" class="fixed size-0" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="threshold">
          <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";

const TEXT_CLASSES = "absolute inset-x-0 top-0 m-auto inline-block w-full";

interface TextItem {
  text: string;
  flag?: string;
}

type TextInput = string | TextItem;

interface Props {
  class?: string;
  texts: TextInput[];
  morphTime?: number;
  coolDownTime?: number;
}
const props = withDefaults(defineProps<Props>(), {
  morphTime: 1.5,
  coolDownTime: 3,
});

const textIndex = ref(0);
const morph = ref(0);
const coolDown = ref(0);
const time = ref(new Date());

const text1Ref = ref<HTMLSpanElement>();
const text2Ref = ref<HTMLSpanElement>();

const currentText1 = ref<TextItem>({ text: '' });
const currentText2 = ref<TextItem>({ text: '' });

const normalizedTexts = computed(() => {
  return props.texts.map(item =>
    typeof item === 'string' ? { text: item } : item
  ) as TextItem[];
});

function setStyles(fraction: number) {
  if (!text1Ref.value || !text2Ref.value) return;

  text2Ref.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  text2Ref.value.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  const invertedFraction = 1 - fraction;
  text1Ref.value.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
  text1Ref.value.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

  currentText1.value = normalizedTexts.value[textIndex.value % normalizedTexts.value.length]!;
  currentText2.value = normalizedTexts.value[(textIndex.value + 1) % normalizedTexts.value.length]!;
}

function doMorph() {
  morph.value -= coolDown.value;
  coolDown.value = 0;

  let fraction = morph.value / props.morphTime;

  if (fraction > 1) {
    coolDown.value = props.coolDownTime;
    fraction = 1;
  }

  setStyles(fraction);

  if (fraction === 1) {
    textIndex.value++;
  }
}

function doCoolDown() {
  morph.value = 0;

  if (text1Ref.value && text2Ref.value) {
    text2Ref.value.style.filter = "none";
    text2Ref.value.style.opacity = "100%";
    text1Ref.value.style.filter = "none";
    text1Ref.value.style.opacity = "0%";
  }
}

let animationFrameId: number = 0;
function animate() {
  animationFrameId = requestAnimationFrame(animate);

  const newTime = new Date();
  const dt = (newTime.getTime() - time.value.getTime()) / 1000;
  time.value = newTime;

  coolDown.value -= dt;

  if (coolDown.value <= 0) {
    doMorph();
  } else {
    doCoolDown();
  }
}

onMounted(() => {
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>
