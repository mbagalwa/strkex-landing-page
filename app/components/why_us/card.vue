<script setup lang="ts">
defineProps<{
      title: string
      description: string
      variant?: 'primary' | 'neutral'
}>()
</script>

<template>
      <div :class="[
            'w-full aspect-square rounded-xl flex flex-col justify-center items-center p-4 transition-all duration-300 transform hover:scale-105',
            variant === 'primary'
                  ? 'bg-gradient-to-br from-[#F06226]/90 to-[#F06226]/70 text-white shadow-md hover:shadow-xl'
                  : 'bg-gray-100 text-gray-800 shadow-sm hover:shadow-md'
      ]">
            <span class="text-4xl font-bold">{{ title }}</span>
            <span class="text-xs mt-2 opacity-80 text-center">{{ description }}</span>
      </div>
</template>