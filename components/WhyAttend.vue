<template>
  <Test name="Why Attend Photo Location Test" component-name="Why Attend" :variations="variations">
    <template #loading>
      <div class="container mx-auto flex flex-wrap pt-4 pb-12" :style="{ minHeight: '515px' }"></div>
    </template>
    <template #default="{ variant }">
      <section class="bg-white border-b py-8">
        <div
          class="container mx-auto flex flex-wrap pt-4 pb-12"
          :style="variant.id === 'left' ? 'flex-direction: row' : 'flex-direction: row-reverse'"
        >
          <div class="w-1/2">
            <img v-if="imageUrl" :src="imageUrl" class="p-10" />
          </div>
          <div class="w-1/2">
            <div class="p-10">
              <h2 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
                {{ fields.title }}
              </h2>
              <hr />
              <p class="text-gray-800 p-10 whitespace-pre-line">{{ fields.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </template>
  </Test>
</template>

<script>
import { Test } from '@uniformdev/optimize-tracker-vue';
export default {
  name: 'WhyAttend',
  components: {
    Test,
  },
  props: {
    fields: {
      type: Object,
      default() {
        return {
          image: {},
          title: '',
          description: '',
        };
      },
    },
    sys: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    variations() {
      return [{ id: 'left' }, { id: 'right' }];
    },
    imageUrl() {
      return this.fields.image?.fields?.file?.url;
    },
  },
};
</script>
