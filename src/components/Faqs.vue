<template>
  <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
    <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
      <dt>
        <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
          <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
          <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true"/>
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true"/>
                </span>
        </DisclosureButton>
      </dt>
      <DisclosurePanel as="dd" class="mt-2 pr-12">
        <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
      </DisclosurePanel>
    </Disclosure>
  </dl>
</template>

<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import {MinusSmallIcon, PlusSmallIcon} from '@heroicons/vue/24/outline'

const faqs = [
  {
    question: "How much does this cost?",
    answer: "Standard real estate agent pricing: 3% each from the buyer and seller. This means that you pay nothing if the deal doesn't go through.",
  },
  {
    question: 'Do I have to use your management services?',
    answer: 'Definitely not. It will make life easier but you\'re welcome to use whatever management company you want as owners.',
  },
  {
    question: 'How can I trust the buyers?',
    answer: 'How do you trust Airbnb guests? Of course, we understand this is a bit different so we put a lot of effort into validating they\'re good people (background checks, credit checks, net worth check, past tenant complaints, etc).',
  },
  {
    question: 'How can I trust the sellers?',
    answer: 'How do you trust Airbnb guests or Uber drivers? Of course, we understand this is a bit different so we put a lot of effort into validating they\'re good people (background checks, credit checks, Airbnb host reviews, independent appraiser, etc).',
  }
]
</script>