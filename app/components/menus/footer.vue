<script setup lang="ts">
const currentYear = new Date().getFullYear();

const navigation = {
      main: [
            { name: 'Accueil', href: '/' },
            { name: 'Fonctionnalités', href: '#features' },
            { name: 'Tarification', href: '#pricing' },
            { name: 'À propos', href: '#about' },
            { name: 'Contact', href: '#contact' },
      ],
      social: [
            {
                  name: 'Twitter',
                  href: '#',
                  icon: 'mage:x-square',
            },
            {
                  name: 'LinkedIn',
                  href: '#',
                  icon: 'mage:linkedin',
            },
            {
                  name: 'Discord',
                  href: '#',
                  icon: 'mage:discord',
            },
            {
                  name: 'Youtube',
                  href: '#',
                  icon: 'mage:youtube',
            },
      ],
      legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookies Settings', href: '#' },
      ],
      product: [
            { name: 'Features', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Integrations', href: '#' },
            { name: 'Changelog', href: '#' },
      ],
      resources: [
            { name: 'Starknet', href: '#' },
            { name: 'Starkware', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Support', href: '#' },
      ],
      company: [
            { name: 'About', href: '#' },
            { name: 'Contact', href: '#' },
            { name: 'Partners', href: '#' },
      ],
};
</script>

<template>
      <footer class="relative bg-gray-100/70 text-gray-900 py-8 flex justify-center">
            <div class="relative max-w-7xl w-full px-4 sm:px-6">
                  <div
                        class="rounded-xl px-6 py-10 flex flex-col md:flex-row md:justify-between md:items-start gap-8 lg:grid lg:grid-cols-2">
                        <!-- Left side: Logo & text -->
                        <div class="md:w-1/3 lg:w-2/3 space-y-4">
                              <div class="flex items-center gap-2">
                                    <NuxtImg src="/logo.png" alt="Logo" width="35" height="35" quality="100" />
                                    <span class="text-lg font-semibold">Strkex</span>
                              </div>
                              <p class="text-sm text-gray-600">
                                    Strkex empowers teams to transform raw data into clear, compelling visuals — making
                                    insights easier to share, understand, and act on.
                              </p>
                              <div class="flex gap-4 mt-2">
                                    <NuxtLink v-for="social in navigation.social" :key="social.name" :to="social.href"
                                          class="hover:text-[#F06226] text-zinc-500 transition-all duration-200 ease-in-out hover:scale-125 hover:mx-1">
                                          <Icon :name="social.icon" class="text-2xl" />
                                    </NuxtLink>
                              </div>
                        </div>

                        <!-- Right side: Columns -->
                        <div class="flex flex-1 lg:flex-2 justify-between gap-0 lg:pl-8">
                              <div>
                                    <h3 class="text-sm font-semibold mb-3">Product</h3>
                                    <ul class="space-y-2 text-sm text-gray-600">
                                          <li v-for="product in navigation.product" :key="product.name">
                                                <NuxtLink :to="product.href" class="hover:text-[#F06226]">{{
                                                      product.name }}
                                                </NuxtLink>
                                          </li>
                                    </ul>
                              </div>
                              <div>
                                    <h3 class="text-sm font-semibold mb-3">Resources</h3>
                                    <ul class="space-y-2 text-sm text-gray-600">
                                          <li v-for="resource in navigation.resources" :key="resource.name">
                                                <NuxtLink :to="resource.href" class="hover:text-[#F06226]">{{
                                                      resource.name
                                                }}
                                                </NuxtLink>
                                          </li>
                                    </ul>
                              </div>
                              <div>
                                    <h3 class="text-sm font-semibold mb-3">Company</h3>
                                    <ul class="space-y-2 text-sm text-gray-600">
                                          <li v-for="company in navigation.company" :key="company.name">
                                                <NuxtLink :to="company.href" class="hover:text-[#F06226]">{{
                                                      company.name
                                                }}
                                                </NuxtLink>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </div>

                  <!-- Bottom links -->
                  <div
                        class="flex justify-between items-center text-xs text-gray-500 mt-6 flex-col md:flex-row gap-2 border-t-[.5px] border-gray-200 pt-6 ">
                        <span>© 2025 Strkex. All rights reserved.</span>
                        <div class="flex gap-4">
                              <NuxtLink v-for="legal in navigation.legal" :key="legal.name" :to="legal.href"
                                    class="hover:text-[#F06226] hover:underline underline-offset-2 transition-all duration-200 ease-in-out">
                                    {{ legal.name }}</NuxtLink>
                        </div>
                  </div>

                  <!-- Nouveau watermark -->
                  <div class="py-8 flex justify-center text-gray-900/5">
                        <span
                              class="text-7xl md:text-8xl lg:text-9xl font-extrabold  bg-gradient-to-b from-gray-900/10 to-transparent bg-clip-text text-transparent select-none pointer-events-none uppercase">
                              starkex
                        </span>
                  </div>
            </div>
      </footer>
</template>
