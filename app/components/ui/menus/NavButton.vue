<template>
      <div :class="cn(
            'group relative w-auto cursor-pointer overflow-hidden rounded-md border bg-background px-5 py-1.5 text-center font-semibold',
            props.class,
      )
            ">
            <div class="flex items-center gap-2">
                  <div
                        class="size-1.5 scale-100 rounded-lg bg-primary transition-all duration-300 group-hover:scale-[100.8]">
                  </div>
                  <span
                        class="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-[.86rem]">
                        {{ text }}
                  </span>
            </div>

            <div
                  class="absolute top-0  z-10 flex size-full translate-x-12 items-center justify-center gap-1 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 text-[.86rem] bg-primary/20">
                  <slot></slot>
            </div>
      </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";

interface Props {
      text?: string;
      class?: string;
}
const props = withDefaults(defineProps<Props>(), {
      text: "Button",
});
</script>

<style></style>