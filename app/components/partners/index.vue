<script setup lang="ts">
interface Partner {
      id: number;
      name: string;
      logo: string;
      description: string;
}

interface Country {
      id: number;
      name: string;
      flag: string;
      partners: Partner[];
}

const countries: Country[] = [
      {
            id: 1,
            name: 'Kenya',
            flag: 'ke',
            partners: [
                  {
                        id: 1,
                        name: 'M-pesa',
                        logo: 'https://adminsite.adaex.app/uploads/Photopea_3_d22b525311.png',
                        description: 'Leading mobile money service in Kenya'
                  },
                  {
                        id: 2,
                        name: 'Pawapay',
                        logo: 'https://adminsite.adaex.app/uploads/Photopea_4_4809352c24.png',
                        description: 'Digital payment solution'
                  }
            ]
      },
      {
            id: 2,
            name: 'Côte d\'Ivoire',
            flag: 'ci',
            partners: [
                  {
                        id: 1,
                        name: 'Orange Money',
                        logo: 'https://adminsite.adaex.app/uploads/9_1_1bdbe3ebcd.png',
                        description: 'Leading mobile money service'
                  },
                  {
                        id: 2,
                        name: 'Airtel Money',
                        logo: 'https://adminsite.adaex.app/uploads/6_png_from_photopea_5d1e368edd.png',
                        description: 'Mobile money service'
                  }
            ]
      }
]
</script>

<template>
      <div class="relative overflow-hidden">
            <div class="relative max-w-7xl w-full mx-2 lg:mx-auto">
                  <!-- Background Gradient -->
                  <div class="absolute inset-0 bg-gradient-to-br from-starknet-ex/5 to-starknet-ex/10 opacity-30"></div>

                  <!-- Partners Section -->
                  <div class="relative py-24 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-7xl mx-auto">
                              <!-- Title with Animation -->
                              <div class="text-center mb-16">
                                    <h2
                                          class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-starknet-ex to-starknet-ex/80 mb-4">
                                          Our Trusted Network</h2>
                                    <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Joining forces with
                                          leading payment providers to revolutionize the African currency market</p>
                              </div>

                              <!-- Countries Grid -->
                              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                                    <div v-for="country in countries" :key="country.id"
                                          class="relative group aspect-square rounded-2xl overflow-hidden border-2 border-starknet-ex/10 hover:border-starknet-ex/20 transition-all duration-300 ease-in-out">
                                          <!-- Card Background -->
                                          <div
                                                class="absolute inset-0 bg-starknet-ex/5 rounded-2xl transform-gpu transition-transform duration-300 ease-in-out group-hover:scale-110">
                                          </div>

                                          <!-- Country Header -->
                                          <div class="absolute top-4 left-4 z-10">
                                                <div
                                                      class="flex items-center gap-2 bg-white/90 dark:bg-gray-900/90 px-3 py-1.5 rounded-full">
                                                      <Icon name="flagpack:{{country.flag}}"
                                                            class="text-starknet-ex/80" />
                                                      <span class="text-starknet-ex/80 font-semibold">{{ country.name
                                                            }}</span>
                                                </div>
                                          </div>

                                          <!-- Partners Grid -->
                                          <div class="relative p-8">
                                                <div class="grid grid-cols-2 gap-4">
                                                      <div v-for="(partner, index) in country.partners"
                                                            :key="partner.id" class="relative group">
                                                            <!-- Partner Card -->
                                                            <div
                                                                  class="relative p-4 bg-white/80 dark:bg-gray-900/80 rounded-xl">
                                                                  <div
                                                                        class="w-20 h-20 rounded-full border-2 border-starknet-ex/20 overflow-hidden mx-auto">
                                                                        <img :src="partner.logo" :alt="partner.name"
                                                                              class="w-full h-full object-contain grayscale-25 transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105" />
                                                                  </div>
                                                                  <p
                                                                        class="mt-2 text-center text-starknet-ex/80 font-medium">
                                                                        {{ partner.name }}</p>
                                                                  <p
                                                                        class="text-sm text-gray-600 dark:text-gray-400 text-center">
                                                                        {{ partner.description }}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <!-- Card Content -->
                                          <div class="relative p-8 flex flex-col items-center justify-center gap-4">
                                                <!-- Partner Logo -->
                                                <div class="relative group">
                                                      <div
                                                            class="w-32 h-32 rounded-full border-2 border-starknet-ex/20 overflow-hidden">
                                                            <img :src="countries[0]?.partners[0]?.logo"
                                                                  class="w-full h-full object-contain grayscale-25 transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105" />
                                                      </div>
                                                      <div
                                                            class="absolute inset-0 bg-starknet-ex/5 rounded-full transform-gpu transition-transform duration-300 ease-in-out group-hover:scale-110">
                                                      </div>
                                                </div>

                                                <!-- Partner Name -->
                                                <p class="text-starknet-ex/80 font-semibold text-lg">
                                                      {{ countries[0]?.partners[0]?.name }}
                                                </p>

                                                <!-- Partner Stats -->
                                                <div class="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                                                      <span class="flex items-center gap-1">
                                                            <Icon name="solar:clock-broken"
                                                                  class="text-starknet-ex/60" />
                                                            <span>24/7 Support</span>
                                                      </span>
                                                      <span class="flex items-center gap-1">
                                                            <Icon name="solar:shield-check-broken"
                                                                  class="text-starknet-ex/60" />
                                                            <span>Secure</span>
                                                      </span>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <!-- Interactive Timeline -->
                              <div class="mt-16 relative">
                                    <!-- Timeline Line -->
                                    <div class="absolute inset-x-0 top-1/2 h-0.5 bg-starknet-ex/20"></div>

                                    <!-- Timeline Points -->
                                    <div class="flex justify-between">
                                          <div class="relative z-10">
                                                <div
                                                      class="w-12 h-12 rounded-full bg-starknet-ex/20 flex items-center justify-center">
                                                      <Icon name="solar:clock-broken"
                                                            class="text-starknet-ex/80 text-2xl" />
                                                </div>
                                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Instant
                                                      Processing</p>
                                          </div>

                                          <div class="relative z-10">
                                                <div
                                                      class="w-12 h-12 rounded-full bg-starknet-ex/20 flex items-center justify-center">
                                                      <Icon name="solar:wallet-broken"
                                                            class="text-starknet-ex/80 text-2xl" />
                                                </div>
                                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Multiple
                                                      Payment Options</p>
                                          </div>

                                          <div class="relative z-10">
                                                <div
                                                      class="w-12 h-12 rounded-full bg-starknet-ex/20 flex items-center justify-center">
                                                      <Icon name="solar:shield-check-broken"
                                                            class="text-starknet-ex/80 text-2xl" />
                                                </div>
                                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Secure
                                                      Transactions</p>
                                          </div>
                                    </div>
                              </div>

                              <!-- CTA Button -->
                              <div class="mt-16 text-center">
                                    <button
                                          class="inline-flex items-center px-8 py-4 rounded-full bg-starknet-ex/80 text-white font-semibold hover:bg-starknet-ex transition-all duration-300 ease-in-out group">
                                          <span class="relative z-10">Join Our Network</span>
                                          <Icon name="solar:arrow-right-broken"
                                                class="ml-2 relative z-10 text-starknet-ex/90" />
                                          <div
                                                class="absolute inset-0 bg-starknet-ex/5 rounded-full transform-gpu transition-transform duration-300 ease-in-out group-hover:scale-110">
                                          </div>
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>
