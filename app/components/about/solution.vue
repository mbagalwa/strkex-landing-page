<script lang="ts" setup>

// genere moi 6 solutions de Strkex
const solutions = [
      {
            id: 1,
            title: "Scalability without compromise",
            description: "Leverage Starknet's ZK-Rollup technology to process thousands of transactions per second.",
            badge: "ZK-Rollup",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            id: 2,
            title: "Built-in security you can trust",
            description: "Secure by design: Starknet inherits the security of Ethereum mainnet thanks to validity proofs.",
            badge: "Secure",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            id: 3,
            title: "Low fees for everyone",
            description: "Enable affordable DeFi and dApps for users worldwide.",
            badge: "Low Fees",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            id: 4,
            title: "Developer-first experience",
            description: "Harness the power of Cairo language and Starknet tooling.",
            badge: "Developer Friendly",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            id: 5,
            title: "Future-proof technology",
            description: "Stay ahead of the curve with Starknet’s roadmap towards decentralization and interoperability.",
            badge: "Innovative",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            id: 6,
            title: "Future-proof technology",
            description: "Stay ahead of the curve with Starknet’s roadmap towards decentralization and interoperability.",
            badge: "Innovative",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }
]

</script>

<template>

      <div class="">
            <div class="flex flex-col items-center text-center gap-3 px-4 py-8 max-w-4xl mx-auto">
                  <h2 class="text-3xl md:text-3xl font-semibold text-gray-900 leading-tight">
                        Our Solution
                  </h2>
                  <p class="text-gray-600 text-base max-w-md">
                        Strkex is a Web3 application that provides a secure and developer-friendly platform for
                        building and deploying smart contracts on the Starknet blockchain.
                  </p>
            </div>
            <div class="py-10 solution-card-style max-w-4xl mx-auto"></div>
            <div class="section-separator"></div>
            <div
                  class="flex flex-col items-center text-center gap-3 px-0 solution-card-style solution-card-style max-w-4xl mx-auto">

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-y-0">
                        <div v-for="(solution, i) in solutions" :key="solution.id"
                              class="flex flex-col items-center gap-4 py-4 p-4" :class="{
                                    'border-b border-dashed border-gray-200': i < solutions.length - 2,
                                    'border-r border-dashed border-gray-200': i % 2 === 0,
                                    'bg-gray-50/40': i % 4 === 0 || i === 3,
                                    'relative corner-plus': i === 0,
                                    'corner-plus-right': i === 1,
                                    'relative corner-b-plus': i === solutions.length - 2,
                                    'corner-b-plus-right': i === solutions.length - 1,
                              }">
                              <div>
                                    <NuxtImg :src="solution.image" alt="" class="w-full h-auto opacity-0" />
                              </div>
                              <div class="py-2 flex flex-col items-center gap-1.5">
                                    <h2 class="text-[1.1rem] font-medium text-gray-900 leading-tight">
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