<template>
      <div class="relative py-16">
            <div class="max-w-5xl mx-auto py-10">
                  <div class="py-8 solution-card-style max-w-4xl mx-auto"></div>
                  <div class="section-separator"></div>
            </div>

            <div class="py-12">
                  <div class="flex flex-col items-center text-center gap-2 px-4 max-w-4xl mx-auto mb-8">
                        <h1 class="text-2xl md:text-3xl font-semibold text-gray-900">
                              Operators <span class="text-[#F06226] font-bold">{{ countries.length }}</span> countries
                              in Africa
                        </h1>
                        <span class="text-gray-600">
                              with <span class="text-[#F06226] font-bold">{{ operators.length }}</span> operators
                        </span>
                  </div>

                  <!-- overview -->
                  <div class="relative  rounded-md border-[.5px] border-gray-200    px-6 py-8 max-w-5xl mx-auto">
                        <div class="flex items-center justify-center gap-4 flex-wrap">

                              <!-- Left side countries -->
                              <div class="flex gap-2">
                                    <div v-for="country in countries.slice(0, half_country)" :key="country.id"
                                          class="flex items-center justify-center bg-gray-50 rounded-xl p-2 shadow-sm">
                                          <NuxtImg :src="country.fly" alt="" class="w-10 h-10 object-contain" />
                                    </div>
                              </div>

                              <!-- Center logo -->
                              <div class="flex items-center justify-center bg-[#F06226]/10 rounded-xl p-3 shadow-sm">
                                    <NuxtImg src="/images/starknet.png" alt="StarkNet Logo" class="w-14 h-14" />
                              </div>

                              <!-- Right side countries -->
                              <div class="flex gap-2">
                                    <div v-for="country in countries.slice(half_country)" :key="country.id"
                                          class="flex items-center justify-center bg-gray-50 rounded-xl p-2 shadow-sm">
                                          <NuxtImg :src="country.fly" alt="" class="w-10 h-10 object-contain" />
                                    </div>
                              </div>
                        </div>

                        <!-- Text below -->
                        <div class="mt-6 text-center">
                              <p class="text-gray-800 font-medium">Based on open standards & extensible APIs</p>
                              <a href="#"
                                    class="mt-1 text-[#2563eb] text-sm hover:underline inline-flex items-center gap-1">
                                    See all operators
                                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                          <path fill-rule="evenodd"
                                                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd" />
                                    </svg>
                              </a>
                        </div>
                  </div>
            </div>

            <!-- <div class="max-w-5xl mx-auto py-16">
                  <div class="section-separator"></div>
                  <div class="py-8 solution-card-style max-w-4xl mx-auto"></div>
            </div> -->
      </div>
</template>

<script lang="ts" setup>
// gebe 10 pays d'Afrique
const countries = [
      {
            id: 1,
            name: "Nigeria",
            fly: "https://www.svgrepo.com/show/405569/flag-for-flag-nigeria.svg" // CC0 Nigeria flag icon  [oai_citation:4‡SVG Repo](https://www.svgrepo.com/svg/405569/flag-for-flag-nigeria?utm_source=chatgpt.com)
      },
      {
            id: 2,
            name: "Kenya",
            fly: "https://www.svgrepo.com/show/405523/flag-for-flag-kenya.svg" // similar trusted free SVG, adapt placeholder (replace with Kenya one)  [oai_citation:5‡UXWing](https://uxwing.com/kenya-flag-icon/?utm_source=chatgpt.com)
      },
      {
            id: 3,
            name: "Uganda",
            fly: "https://www.svgrepo.com/show/405640/flag-for-flag-uganda.svg" // CC0 Uganda flag icon  [oai_citation:6‡SVG Repo](https://www.svgrepo.com/svg/405640/flag-for-flag-uganda?utm_source=chatgpt.com)
      },
      {
            id: 4,
            name: "Tanzania",
            fly: "https://www.svgrepo.com/show/405626/flag-for-flag-tanzania.svg" // CC0 Tanzania flag icon  [oai_citation:7‡SVG Repo](https://www.svgrepo.com/svg/405626/flag-for-flag-tanzania?utm_source=chatgpt.com)
      },
      {
            id: 5,
            name: "DR Congo",
            fly: "https://www.svgrepo.com/show/248834/democratic-republic-of-congo.svg" // CC0 DRC flag icon  [oai_citation:8‡UXWing](https://uxwing.com/democratic-republic-of-the-congo-flag-round-icon/?utm_source=chatgpt.com)
      },
      {
            id: 6,
            name: "Rwanda",
            fly: "https://www.svgrepo.com/show/405591/flag-for-flag-rwanda.svg" // CC0 Rwanda flag icon  [oai_citation:9‡SVG Repo](https://www.svgrepo.com/svg/405591/flag-for-flag-rwanda?utm_source=chatgpt.com)
      }
];

const half_country = countries.length / 2;


const operators = [{
      id: 1,
      name: 'Airtel Money',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}, {
      id: 1,
      name: 'Orange Money',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}, {
      id: 1,
      name: 'MTN',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}, {
      id: 1,
      name: 'MPESA',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
]

</script>