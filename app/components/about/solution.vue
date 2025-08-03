<script lang="ts" setup>

// genere moi 6 solutions de Strkex
const solutions: T_SOLUTION[] = [
      {
            id: 1,
            title: "Scalability without compromise",
            description: "Leverage Starknet's ZK-Rollup technology to process thousands of transactions per second.",
            badge: "ZK-Rollup",
            image: "/images/solution/u12.png",
      },
      {
            id: 2,
            title: "Built-in security you can trust",
            description: "Secure by design: Starknet inherits the security of Ethereum mainnet thanks to validity proofs.",
            badge: "Secure",
            image: "/images/solution/u11.png",
            size: "w-[95%]"

      },
      {

            id: 3,
            title: "Low fees for everyone",
            description: "Enable affordable DeFi and dApps for users worldwide.",
            badge: "Low Fees",
            image: "/images/solution/u9.png",
            size: "w-[95%]"
      },
      {
            id: 4,
            title: "Developer-first experience",
            description: "Harness the power of Cairo language and Starknet tooling.",
            badge: "Developer Friendly",
            image: "/images/solution/u1.png",
      },
      {
            id: 5,
            title: "Future-proof technology",
            description: "Stay ahead of the curve with Starknet’s roadmap towards decentralization and interoperability.",
            badge: "Innovative",
            image: "/images/solution/u5.png",
            size: "w-[95%]"
      },
      {
            id: 6,
            title: "Future-proof technology",
            description: "Stay ahead of the curve with Starknet’s roadmap towards decentralization and interoperability.",
            badge: "Innovative",
            image: "https://i.pinimg.com/736x/98/d0/48/98d048ff7350c0b44c7f712896f5d33c.jpg",
      }
]

</script>

<template>

      <div class="">
            <div class="flex flex-col items-center text-center gap-1 px-4  max-w-4xl mx-auto">
                  <h2 class="section-title">
                        Our Solution
                  </h2>
                  <p class="section-description w-[60%]">
                        Starkex makes it simple to swap your STARK tokens into local African currencies.
                        Powered by Starknet for security and speed, built to bring DeFi closer to real life.
                  </p>
            </div>
            <div class="px-0 py-10 solution-card-style max-w-4xl mx-auto"></div>
            <div class="section-separator"></div>
            <div
                  class="flex flex-col items-center text-center gap-3 px-0 solution-card-style solution-card-style max-w-4xl mx-auto">

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-y-0">
                        <div v-for="(solution, i) in solutions" :key="solution.id"
                              class="flex flex-col items-center gap-4 py-4 p-4 group h-[460px] cursor-pointer" :class="{
                                    'border-b border-dashed border-gray-200': i < solutions.length - 2,
                                    'border-r border-dashed border-gray-200': i % 2 === 0,
                                    'bg-gray-100/50': i % 4 === 0 || i === 3,
                                    'relative corner-plus': i === 0,
                                    'corner-plus-right': i === 1,
                                    'relative corner-b-plus': i === solutions.length - 2,
                                    'corner-b-plus-right': i === solutions.length - 1,
                              }">
                              <div class=" inline-flex items-center flex-1 ">
                                    <NuxtImg :src="solution.image" alt=""
                                          class=" h-auto  transition-all duration-300 ease-in-out group-hover:scale-105 mx-auto rounded group-hover:blur-sm group-hover:grayscale"
                                          :class="solution.size ? solution.size : 'w-[70%]'" />
                              </div>
                              <div
                                    class="py-2 flex flex-col items-center gap-1.5 h-28 group-hover:scale-95 transition-all duration-300">
                                    <h2
                                          class="text-[1.1rem] font-medium text-gray-900 leading-tight group-hover:font-semibold transition-all duration-500">
                                          {{ solution.title }}
                                    </h2>
                                    <p class="text-sm max-w-md w-[80%] text-foreground/55 text-center">
                                          {{ solution.description }}
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
            <div class="section-separator"></div>
            <div class="py-10 solution-card-style max-w-4xl mx-auto"></div>
      </div>
</template>