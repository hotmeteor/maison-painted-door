<template>
  <dl class="space-y-6 divide-y divide-gray-900/10">
    <Disclosure
      as="div"
      v-for="faq in faqs"
      :key="faq.question"
      class="pt-6"
      v-slot="{ open }"
    >
      <dt>
        <DisclosureButton
          class="flex w-full items-start justify-between text-left text-gray-900"
        >
          <span class="text-base font-semibold leading-7">
            {{ faq.question }}
          </span>
          <span class="ml-6 flex h-7 items-center">
            <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
            <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
          </span>
        </DisclosureButton>
      </dt>
      <DisclosurePanel as="dd" class="mt-2 pr-12">
        <p class="text-base leading-7 text-gray-600" v-html="faq.answer"></p>
      </DisclosurePanel>
    </Disclosure>
  </dl>
</template>

<script is:inline setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const faqs = [
  {
    question: "How much does this cost?",
    answer:
      "Standard real estate agent pricing: 3% each from the buyer and seller. This means that you pay nothing if the deal doesn't go through.",
  },
  {
    question: "Do I have to use your management services?",
    answer:
      "Definitely not. It will make life easier but you're welcome to use whatever management company you want as owners.",
  },
  {
    question: "How can I trust the buyers?",
    answer:
      "The terms of ownership are clearly defined, and our team works to support you throughout your ownership journey.",
  },
  {
    question: "How can I trust the sellers?",
    answer:
      "Trusting an Airbnb guest or Uber driver has become the norm, but we also understand this is a bit different. With that in mind, we put a lot of effort into validating co-owners are sound using background checks, credit checks, Airbnb host reviews, independent appraiser, etc. <br /><br />Plus, you'll always have the ability to approve or deny any potential co-owner.",
  },
];
</script>
