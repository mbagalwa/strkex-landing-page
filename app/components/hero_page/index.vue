<script setup lang="ts">
import HeroContent from './content.vue'
import ParticlesBg from '@/components/ui/utils/particles_bg.vue'
import { useDevicePixelRatio } from '@vueuse/core'

const { pixelRatio } = useDevicePixelRatio()
const stats = [
      {
            id: 1,
            value: '100+',
            label: 'Supported Tokens'
      },
      {
            id: 2,
            value: '1000+',
            label: 'Active Users'
      },
      {
            id: 3,
            value: '100%',
            label: 'Security Guarantee'
      },
      {
            id: 4,
            value: '24/7',
            label: 'Customer Support'
      }
]


</script>

<template>
      <div class="relative overflow-hidden">
            <div class="absolute inset-0">
                  <ParticlesBg class="absolute inset-0 animate-particles" :color="'var(--color-primary)'"
                        :quantity="150" :staticity="40" :ease="25" />
            </div>

            <div class="section-base-style min-h-[calc(80vh-64px)]">
                  <div class="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
                        <div class="relative">
                              <!-- Hero content -->
                              <HeroContent />

                              <!-- Stats section -->
                              <div class="mt-16 sm:mt-24 lg:mt-32 flex items-center justify-center">
                                    <div
                                          class="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:flex lg:justify-around lg:w-full">
                                          <div v-for="stat in stats" :key="stat.id" class="flex flex-col">
                                                <div class="text-4xl font-bold text-primary">
                                                      {{ stat.value }}
                                                </div>
                                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
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