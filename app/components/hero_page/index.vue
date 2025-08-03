<script setup lang="ts">
import HeroContent from './content.vue'
import ParticlesBg from './particles_bg.vue'
import { useDevicePixelRatio } from '@vueuse/core'

const { pixelRatio } = useDevicePixelRatio()

const stats = [
      {
            id: 1,
            value: '100+',
            label: 'Supported Tokens',
            icon: 'heroicons:cube',
            color: 'text-blue-500',
      },
      {
            id: 2,
            value: '1K+',
            label: 'Active Users',
            icon: 'heroicons:user-group',
            color: 'text-purple-500',
      },
      {
            id: 3,
            value: '100%',
            label: 'Security',
            icon: 'heroicons:shield-check',
            color: 'text-emerald-500',
      },
      {
            id: 4,
            value: '24/7',
            label: 'Support',
            icon: 'heroicons:chat-bubble-left-ellipsis',
            color: 'text-amber-500',
      }
]
</script>

<template>
      <div class="relative overflow-hidden">
            <div class="absolute inset-0">
                  <ParticlesBg class="absolute inset-0" :color="'var(--color-primary)'" :quantity="170" :staticity="30"
                        :ease="15" />
            </div>

            <div class="section-base-style min-h-[80vh] flex items-center">
                  <div class="w-full">
                        <!-- Hero content -->
                        <HeroContent />

                        <!-- Stats section -->
                        <div class="mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8">
                              <div class="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
                                    <div v-for="stat in stats" :key="stat.id" class="text-center p-4">
                                          <div class="flex flex-col items-center">
                                                <p class="text-2xl font-bold text-gray-900 dark:text-white">
                                                      {{ stat.value }}
                                                </p>
                                                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                      {{ stat.label }}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>