<script setup lang="ts">
import { ref } from 'vue'
import { LinkPreview } from '@/components/ui/link-preview'

const isMobile = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const handleResize = () => {
      isMobile.value = window.innerWidth < 768
}

onMounted(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
})
</script>

<template>
      <div ref="containerRef" class="relative z-10 pt-4 sm:pt-8 md:pt-12 lg:pt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="text-center">
                        <h1
                              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white space-y-2 md:space-y-4 animate-fade-in">
                              <span class="block">
                                    Exchange your
                                    <LinkPreview url="https://starknet.io"
                                          class="text-starknet-ex/80 font-semibold hover:underline inline-flex items-center"
                                          showPreview="false">
                                          <div
                                                class="relative z-10 bg-starknet-ex/20 px-2 py-1 md:py-0.5 rounded-xl space-x-1 inline-flex items-center">
                                                <NuxtImg src="/images/starknet.png" alt="StarkNet Logo" width="28"
                                                      height="28" class="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
                                                <span class="text-base md:text-lg text-starknet-ex/70">StarkNet</span>
                                          </div>
                                    </LinkPreview>
                              </span>
                              <span
                                    class="block px-2 sm:px-4 md:px-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-300">
                                    tokens into African local currencies
                              </span>
                        </h1>
                        <p
                              class="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed sm:leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in">
                              A secure and fast platform to convert your
                              <span class="text-starknet-ex/80 font-semibold hover:underline">
                                    StarkNet
                              </span>
                              tokens into African local currencies.
                              Competitive fees and intuitive interface for a smooth experience.
                        </p>

                        <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0">
                              <button
                                    class="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 ease-in-out relative overflow-hidden group cursor-pointer">
                                    <Icon name="hugeicons:ai-magic" class="text-lg sm:text-xl mr-1.5" />
                                    <span>Get Started</span>
                              </button>

                              <button
                                    class="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium bg-white/95 text-gray-900 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 ease-in-out relative overflow-hidden group cursor-pointer">
                                    <Icon name="solar:info-circle-broken" class="mr-1.5" />
                                    <span>Learn More</span>
                                    <span
                                          class="absolute inset-0 bg-starknet-ex/5 rounded-lg transform-gpu transition-transform duration-300 ease-in-out group-hover:scale-110"></span>
                              </button>
                        </div>
                  </div>
            </div>
      </div>
</template>
