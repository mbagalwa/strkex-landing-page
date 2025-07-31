<script setup lang="ts">
import { useActiveSection } from '@/composables/useActiveSection'
import { cn } from '@/lib/utils'

// Menus
const menus = [
      {
            id: 0,
            href: '#home',
            label: 'Home',
            icon: ''
      },
      {
            id: 1,
            href: '#features',
            label: 'Features',
            icon: ''
      },
      {
            id: 2,
            href: '#how-it-works',
            label: 'How It Works',
            icon: ''
      },
      {
            id: 3,
            href: '#security',
            label: 'Security',
            icon: ''
      },
      {
            id: 4,
            href: '#pricing',
            label: 'Pricing',
            icon: ''
      },
      {
            id: 5,
            href: '#testimonials',
            label: 'Testimonials',
            icon: ''
      },
      {
            id: 6,
            href: '#faq',
            label: 'FAQ',
            icon: ''
      },
]

// Active section
const active_section = ref(0)
const set_active_section = (section = 0) => {
      active_section.value = section
}

</script>

<template>
      <nav class="flex justify-between bg-background/90 min-h-16 font-sans">
            <div
                  class="max-w-7xl w-full mx-2 lg:mx-auto relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:border before:border-dashed before:border-gray-200/60 after:content-[''] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:border-1 after:border-dashed after:border-gray-200/60">
                  <div
                        class="max-w-4xl  w-full mx-2 lg:mx-auto  my-3.5 md:my-5 lg:my-6 flex items-center justify-between bg-gray-100/70 border-[.5px] border-gray-200 rounded-xl px-4 py-2">
                        <div class="flex items-center gap-12">
                              <div class="flex items-center gap-2">
                                    <NuxtImg src="/logo.png" alt="Logo" width="32" height="32" quality="100" />
                                    <span class="text-[.85rem] font-bold mt-1">StarkEx</span>
                              </div>
                        </div>

                        <ul class="hidden lg:flex gap-5">
                              <li @click.prevent="set_active_section(menu.id)" v-for="menu in menus" :key="menu.id"
                                    class="flex items-center font-medium">
                                    <NuxtLink :to="menu.href"
                                          class="text-[.9rem] hover:opacity-100 hover:font-semibold transition-all duration-500 font-medium"
                                          :class="menu.id === active_section ? 'opacity-100 font-semibold' : 'opacity-70'">
                                          <div
                                                class="flex flex-col items-center  relative transition-all duration-300 space-y-0">
                                                <span> {{ menu.label }}</span>
                                                <div :class="menu.id === active_section ? 'block' : 'hidden'"
                                                      class=" size-1.5 scale-100 rounded-lg bg-primary transition-all duration-300 -mb-0.5">
                                                </div>
                                          </div>
                                    </NuxtLink>
                              </li>
                        </ul>

                        <div class="flex items-center gap-1">
                              <UiMenusNavButton text="Login">
                                    <NuxtLink to="#" class="flex items-center ml-1 space-x-0"><span>Login</span>
                                          <Icon name="solar:arrow-right-broken" class="text-xl" />
                                    </NuxtLink>
                              </UiMenusNavButton>
                        </div>




                  </div>
            </div>
      </nav>
</template>
