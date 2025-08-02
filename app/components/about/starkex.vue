<script lang="ts" setup></script>

<template>
      <div>
            <div class="flex flex-col overflow-hidden">
                  <UiContainerScroll>
                        <template #title>
                              <div class="flex flex-col items-center text-center gap-3 px-4 py-8 max-w-4xl mx-auto">
                                    <h2 class="text-3xl md:text-3xl font-semibold text-gray-900 leading-tight">
                                          About StarkEx
                                    </h2>
                                    <p class="text-gray-600 text-base max-w-md">
                                          StarkEx is a Web3 application that provides a secure and
                                          developer-friendly
                                          platform for
                                          building and deploying smart contracts on the Starknet blockchain.
                                    </p>
                              </div>

                        </template>
                        <template #card>
                              <NuxtImg src="https://cdn.inspira-ui.com/images/linear.webp"
                                    class="mx-auto h-full rounded-2xl object-cover object-left-top" alt="hero"
                                    height="720" width="1400" />
                        </template>
                  </UiContainerScroll>
            </div>
      </div>
</template>