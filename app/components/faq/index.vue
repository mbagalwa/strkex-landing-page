<script setup lang="ts">
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
const defaultValue = 'item-1'

const accordionItems = [
      {
            value: 'item-1',
            title: 'How does StarkEx ensure fast and low-cost transactions ?',
            content: 'StarkEx leverages STARK proofs, a type of zero-knowledge proof, to bundle thousands of transactions into a single proof. This allows for high throughput and significantly reduces gas fees while maintaining security and decentralization.'
      },
      {
            value: 'item-2',
            title: 'What cryptocurrencies does StarkEx support ?',
            content: 'StarkEx supports a wide range of cryptocurrencies including ETH, USDC, USDT, DAI, and many ERC-20 tokens. Our platform is constantly expanding to include more assets based on community demand.'
      },
      {
            value: 'item-3',
            title: 'Is StarkEx secure ?',
            content: 'Absolutely. StarkEx uses state-of-the-art cryptographic proofs and has undergone multiple security audits by leading blockchain security firms. Our technology is battle-tested with billions of dollars in secured assets.'
      },
      {
            value: 'item-4',
            title: 'How do I get started with StarkEx ?',
            content: 'Getting started is simple! Just connect your Web3 wallet, deposit funds into your StarkEx account, and you\'re ready to trade with near-instant confirmations and minimal fees.'
      },
      {
            value: 'item-5',
            title: 'What are the fees for using StarkEx ?',
            content: 'StarkEx offers highly competitive fees, typically 10-100x lower than Layer 1 transactions. The exact fee depends on network conditions and transaction type, but you\'ll always see the fee estimate before confirming any transaction.'
      },
      {
            value: 'item-6',
            title: 'What are the benefits of using StarkEx ?',
            content: 'StarkEx provides a range of benefits, including fast and low-cost transactions, high throughput, and improved security. It also offers a developer-friendly experience and is built on top of the Starknet platform, which provides a secure and decentralized environment for DeFi and dApps.'
      },
      {
            value: 'item-7',
            title: 'Country availability ?',
            content: 'StarkEx is available in many countries, including the United States, Canada, and the United Kingdom. Our platform is constantly expanding to include more countries based on community demand.'
      },
]

</script>
<template>

      <div>
            <div class="max-w-5xl mx-auto px-5 lg:px-0">
                  <div class="flex gap-14 flex-col md:flex-row">
                        <div class="w-full md:w-2/5">
                              <div class="flex flex-col gap-8">
                                    <!-- Title & description -->
                                    <div>
                                          <h2 class="section-title">
                                                Frequently Asked <br /> Questions
                                          </h2>
                                          <p class="section-description w-[78%]">
                                                Find answers to common questions about Starkex and how it can help you.
                                          </p>
                                    </div>

                                    <!-- Call to action box -->
                                    <div
                                          class="flex flex-col gap-3 bg-gray-100/50 px-5 py-8 rounded-md primary-border-style min-h-52 lg:w-96">
                                          <span class="text-gray-700 text-md font-medium w-2/3">Didn't find what you're
                                                looking
                                                for?</span>
                                          <span class="text-gray-600 text-sm">Our team is ready to help you with any
                                                questions you may have. Quick and friendly support guaranteed.</span>

                                          <button
                                                class="inline-flex items-center justify-center gap-2 bg-starknet-ex/70 text-white px-7 py-2.5 rounded text-sm font-bold hover:bg-starknet-ex/90 hover:text-white transition-all duration-200 cursor-pointer w-full ">
                                                <Icon name="mage:phone-outgoing-fill" class="text-xl" />
                                                Contact our team
                                          </button>

                                    </div>
                              </div>
                        </div>

                        <div class="flex-1">
                              <UiAccordion type="single" class="w-full" collapsible :default-value="defaultValue">
                                    <UiAccordionItem v-for="item in accordionItems" :key="item.value"
                                          :value="item.value">
                                          <UiAccordionTrigger
                                                class="text-md font-semibold text-gray-700 cursor-pointer">
                                                {{ item.title }}
                                          </UiAccordionTrigger>
                                          <UiAccordionContent class="text-sm">{{ item.content }}</UiAccordionContent>
                                    </UiAccordionItem>
                              </UiAccordion>
                        </div>
                  </div>
            </div>
      </div>
</template>