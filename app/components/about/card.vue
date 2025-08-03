<script lang="ts" setup>
import { type T_ABOUT_CARD } from '@/utils/types'

defineProps<{ input: T_ABOUT_CARD }>()

</script>
<template>
      <div
            class="bg-gray-100/70 rounded-md p-6 flex flex-col gap-4  min-h-80 primary-border-style cursor-pointer hover:scale-105 transition-all duration-500 transform group">
            <div>
                  <span class="text-xs mt-2 opacity-80 text-center font-medium text-gray-500">{{ input.badge }}</span>
                  <h3 class="text-lg font-semibold text-gray-900">{{ input.title }}</h3>
            </div>
            <div class="flex-1 opacity-70 group-hover:opacity-100 transition-all duration-500">
                  <NuxtImg :src="input.image" alt="Statistics" class="rounded-lg object-cover w-[70%] mx-auto"
                        height="400" width="400" />
            </div>

            <span v-if="!input.caracteristics" class="list-disc list-inside text-gray-600 text-sm space-y-1">{{
                  input.description }}</span>
            <ul v-else class="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li class="list-none  flex items-center gap-2" v-for="caracteristic in input.caracteristics"
                        :key="caracteristic">
                        <Icon name="mage:check" class="text-md" />
                        {{ caracteristic }}
                  </li>
            </ul>
      </div>

</template>
