<script setup lang="ts">
// Dummy content data
const dummyContent = [
      {
            id: 1,
            title: "Scalability without compromise",
            description: [
                  "Leverage Starknet's ZK-Rollup technology to process thousands of transactions per second.",
                  "Keep gas costs low and benefit from Ethereum-level security."
            ],
            badge: "ZK-Rollup",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            id: 2,
            title: "Built-in security you can trust",
            description: [
                  "Secure by design: Starknet inherits the security of Ethereum mainnet thanks to validity proofs.",
                  "This ensures your assets and contracts remain safe."
            ],
            badge: "Secure",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            id: 3,
            title: "Low fees for everyone",
            description: [
                  "Enable affordable DeFi and dApps for users worldwide.",
                  "Thanks to Starknet's Layer 2 architecture, enjoy drastically reduced transaction costs."
            ],
            badge: "Low Fees",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            id: 4,
            title: "Developer-first experience",
            description: [
                  "Harness the power of Cairo language and Starknet tooling.",
                  "Build highly scalable smart contracts faster and with more flexibility."
            ],
            badge: "Developer Friendly",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            id: 5,
            title: "Future-proof technology",
            description: [
                  "Stay ahead of the curve with Starknet’s roadmap towards decentralization and interoperability.",
                  "Benefit from native account abstraction for better UX."
            ],
            badge: "Innovative",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }
];
</script>

<template>
      <div class="py-16">
            <div class="max-w-5xl mx-auto flex flex-col  items-center gap-10 py-8">
                  <!-- Header -->
                  <div class="flex flex-col items-center text-center gap-3 px-4">
                        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                              Why Starknet ?
                        </h2>
                        <p class="text-gray-600 text-base max-w-md">
                              Discover why Starknet is the go-to solution for scalable, secure and developer-friendly
                              Web3 applications.
                        </p>
                  </div>

                  <!-- Content -->
                  <div class="px-4 max-w-5xl w-full space-y-3">
                        <div class="w-full grid grid-cols-5 grid-flow-row-dense  gap-3">
                              <div class="bg-gray-100/70 h-80 rounded-md col-span-2 border-[.5px] border-gray-200">01
                              </div>
                              <div class="bg-gray-100/70 h-80 rounded-md col-span-3 border-[.5px] border-gray-200">02
                              </div>
                        </div>
                        <div class="w-full grid grid-cols-11 grid-flow-row-dense  gap-3">
                              <div class="bg-gray-100/70 h-80 rounded-md col-span-3 border-[.5px] border-gray-200">05
                              </div>
                              <div class="bg-gray-100/70 h-80 rounded-md col-span-4 border-[.5px] border-gray-200">06
                              </div>
                              <div class=" bg-gray-100/70 h-80 rounded-md col-span-4 border-[.5px] border-gray-200">07
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>
