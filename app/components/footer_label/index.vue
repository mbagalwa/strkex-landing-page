<script setup lang="ts">
// import { useColorMode } from '@vueuse/core';


// const isDark = computed(() => useColorMode().value == "dark");
const dots = [
      {
            start: {
                  lat: 64.2008,
                  lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
                  lat: 34.0522,
                  lng: -118.2437,
            }, // Los Angeles
      },
      {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
      },
      {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
      },
      {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
      },
      {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
      },
      {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
      },
];

</script>
<template>

      <div class="max-w-5xl mx-auto px-5 lg:px-0">
            <div
                  class="relative bg-gray-50/70 rounded-xl px-6 py-20 flex flex-col md:flex-row items-center justify-between overflow-hidden primary-border-style">
                  <!-- Left -->
                  <div class="md:w-1/2 space-y-8 mb-8 md:mb-0">
                        <div class="flex items-center justify-center w-12 h-12 bg-[#F06226] rounded-full">
                              <!-- Exemple d'icône transfert, remplace par ton icône -->
                              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3 10h18M3 6h18M4 14h16M4 18h16" />
                              </svg>
                        </div>
                        <h3 class="section-title w-[60%]">Échanges crypto partout en Afrique
                        </h3>
                        <p class="section-description">
                              Enjoy fast, secure and fee-free transactions worldwide with Starkex. Leverage cutting-edge
                              blockchain technology to transfer assets across borders in seconds.
                        </p>
                  </div>

                  <!-- Right -->
                  <div class="relative w-full md:w-1/2 flex justify-center items-center">
                        <!-- Carte du monde en fond -->
                        <div class="absolute inset-0 flex justify-center items-center">
                              <!-- <ClientOnly>
                                    <WorldMap :dots="dots" map-color="#00000040" map-bg-color="transparent" />
                              </ClientOnly> -->

                              <NuxtImg src="https://simplemaps.com/static/demos/resources/svg-library/svgs/world.svg"
                                    alt="World Map" class="w-full h-full object-contain" />
                        </div>

                        <!-- Card transfert -->
                        <div class="relative bg-white rounded-xl shadow-lg w-64 p-4 z-10">
                              <div class="flex items-center gap-2 mb-4">
                                    <div class="w-8 h-8 bg-[#F06226] rounded-full flex items-center justify-center">
                                          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                stroke-width="2" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M3 10h18M3 6h18M4 14h16M4 18h16" />
                                          </svg>
                                    </div>

                                    <div class="flex flex-col">
                                          <span class="text-gray-400 mr-auto text-xs">Fast transfer</span>
                                          <span class="mr-auto text-xs font-medium">STRK → Local Currency</span>
                                    </div>
                              </div>
                              <div class="flex items-center  mb-2 gap-1">
                                    <span class="flex items-center gap-1 text-sm">
                                          <span class="text-gray-700 flex items-center gap-1 font-medium">
                                                <NuxtImg src="/images/starknet.png" alt="Logo" width="18" height="18"
                                                      quality="100" /> STRK
                                          </span>
                                    </span>
                                    <Icon name="mage:arrow-right" class="text-gray-400" />
                                    <div class="w-24 p-1 relative flex items-center">
                                          <ClientOnly class="absolute -top-1.5">
                                                <UiMorphingText
                                                      :texts="['🇺🇸 USD', '🇺🇬 UGX', '🇷🇼 RWF', '🇨🇩 CDF', '🇰🇪 KES']"
                                                      class="text-sm font-medium" />
                                          </ClientOnly>
                                    </div>
                              </div>
                              <div class="text-lg font-semibold text-gray-900 mb-1">0.5%</div>
                              <div class="text-xs text-gray-400">Instant settlement</div>

                              <div class="mt-6">
                                    <button
                                          class="bg-starknet-ex/70 text-white px-4 py-2 rounded w-full text-sm font-semibold cursor-pointer hover:bg-starknet-ex/90 transition-all duration-500 ease-in-out flex items-center justify-center gap-2 group">
                                          <Icon name="solar:ghost-smile-bold"
                                                class="text-xl group-hover:rotate-180 transition-all duration-500 ease-in-out" />
                                          Try it now
                                    </button>
                              </div>
                        </div>

                        <!-- Drapeaux flottants -->
                        <div
                              class="absolute -right-6 -top-6 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
                              🇷🇺
                        </div>
                        <div
                              class="absolute -left-6 top-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
                              🇪🇬
                        </div>
                        <div
                              class="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
                              🇦🇺
                        </div>
                  </div>
            </div>
      </div>
</template>