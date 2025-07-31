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
      <div ref="containerRef" class="relative z-10 pt-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="text-center">
                        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl space-y-2 animate-fade-in">
                              <span class="block text-gray-900 dark:text-white">
                                    Exchange your
                                    <LinkPreview url="https://starknet.io"
                                          class="text-starknet-ex/80 font-semibold hover:underline" showPreview="false">
                                          <div class="relative z-10 bg-starknet-ex/20 px-2 py-0.5 rounded-xl space-x-1">
                                                <NuxtImg src="/images/starknet.png" alt="StarkNet Logo" width="32"
                                                      height="32" quality="100" class="inline-block" />
                                                <span class="inline-block text-starknet-ex/70">StarkNet</span>
                                          </div>
                                    </LinkPreview>
                              </span>
                              <span class="block px-20">
                                    tokens into African local currencies
                              </span>
                        </h1>
                        <p
                              class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in">
                              A secure and fast platform to convert your <LinkPreview url="https://starknet.io"
                                    class="text-starknet-ex/80 font-semibold hover:underline" showPreview="false">
                                    StarkNet
                              </LinkPreview>
                              tokens into African local
                              currencies.
                              Competitive fees and intuitive interface for a smooth experience.
                        </p>

                        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                              <button
                                    class="inline-flex items-center px-6 py-3.5 rounded-xl text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 ease-in-out relative overflow-hidden group">
                                    <span class="relative z-10">Get Started</span>
                                    <span class="absolute inset-0 bg-starknet-ex/5 rounded-xl transform-gpu transition-transform duration-300 ease-in-out group-hover:scale-110"></span>
                                    <Icon name="solar:arrow-right-broken" class="ml-2 relative z-10" />
                              </button>

                              <button
                                    class="inline-flex items-center px-6 py-3.5 rounded-xl text-lg font-semibold bg-white/95 text-gray-900 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 ease-in-out relative overflow-hidden group">
                                    <Icon name="solar:info-circle-broken" class="mr-2 relative z-10" />
                                    <span class="relative z-10">Learn More</span>
                                    <span class="absolute inset-0 bg-starknet-ex/5 rounded-xl transform-gpu transition-transform duration-300 ease-in-out group-hover:scale-110"></span>
                              </button>
                        </div>
                  </div>
            </div>
      </div>
</template>
