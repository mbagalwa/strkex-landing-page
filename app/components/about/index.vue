<script lang="ts" setup>
import Solution from './solution.vue'
import StarkEx from './starkex.vue'
import Card from './card.vue'
const features = [
      {
            id: 1,
            title: "Instant Global Transfers",
            badge: "Fast & Low Fees",
            image: "https://deepnote.com/_next/static/media/illustration-collaboration-1.ede7b8e7.png",
            description: "Transfer crypto assets anywhere in seconds with Starkex’s high-performance infrastructure.",
            caracteristics: [
                  "Near-instant settlement",
                  "Minimal transaction fees",
                  "Supports multiple assets"
            ]
      },
      {
            id: 2,
            title: "Secure by Design",
            badge: "Zero-Knowledge",
            image: "https://deepnote.com/_next/static/media/illustration-collaboration-2.5c94f9f9.png",
            description: "Built on zero-knowledge proofs, Starkex keeps your assets and data secure at scale."
            // ⚠ no caracteristique for this item
      },
      {
            id: 3,
            title: "User-Friendly Experience",
            badge: "Intuitive UI",
            image: "https://deepnote.com/_next/static/media/illustration-collaboration-3.ebdb92d5.png",
            description: "An intuitive, modern interface to easily manage your assets and explore dApps.",
            caracteristics: [
                  "Simple wallet management",
                  "Real-time transfer tracking",
                  "dApp integration"
            ]
      }
]

</script>
<template>
      <div class="relative space-y-20">
            <div class="flex flex-col  max-w-5xl mx-auto w-full px-6 lg:px-0">
                  <div class="mb-12 flex flex-col items-left w-full">
                        <h2 class=" section-title">
                              Your local markets matter, Stark Exchange connects them seamlessly
                        </h2>
                        <p class="mt-4 text-left section-description w-75 lg:w-1/2">
                              Seamlessly bridge STARK and local money.
                              Stark Exchange makes DeFi useful, local and accessible.
                        </p>
                  </div>


                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <Card v-for="feature in features" :key="feature.id" :input="feature" />
                  </div>
            </div>
            <StarkEx />
            <Solution />
      </div>
</template>