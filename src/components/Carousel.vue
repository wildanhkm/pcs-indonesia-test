<script setup lang="ts">
import { defineProps, ref, withDefaults, onMounted, onUnmounted } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type KeyValueType = {
  [k: string]: string | number
}

const props = withDefaults(
  defineProps<{
    contents: KeyValueType[];
  }>(),
  {
    contents: () => {
      return [] as KeyValueType[];
    },
  }
);

const currentSlide = ref(0);
const slideInterval = ref<ReturnType<typeof setInterval> | null>(null);
const slideCount = props.contents.length;

const goToSlide = (index: number) => {
  currentSlide.value = index;
  resetSlideInterval();
};

const resetSlideInterval = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value);
  }
  slideInterval.value = setInterval(nextSlide, 5000);
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slideCount;
};

onMounted(() => {
  resetSlideInterval();
});

onUnmounted(() => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value);
  }
});
</script>

<template>
  <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-48 overflow-hidden rounded-lg md:h-48">
      <div
        v-for="(item, index) in contents"
        :key="index"
        :class="[
          'absolute inset-0 transition-transform duration-700 ease-in-out',
          currentSlide === index ? 'translate-x-0' : 'translate-x-full',
          currentSlide === (index + 1) % slideCount ? '-translate-x-full' : '',
        ]"
        data-carousel-item
      >
        <div class="rounded-lg shadow shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-40 w-[95%] mx-auto p-4">
          <div class="flex flex-col gap-4">
            <div class="flex justify-between">
              <span class="font-bold text-[#ef2724]">{{ item.author }}</span>
              <span>
                {{ dayjs(item.date).locale('id').format('dddd, DD MMMM YYYY') }}
              </span>
            </div>
            <div class="flex flex-col">
              <span v-for="(content, idx) in item.contents" :key="idx">
                {{ content }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-0 left-1/2 space-x-3 rtl:space-x-reverse"
    >
      <button
        v-for="(item, index) in contents"
        :key="index"
        :class="['w-3 h-3 rounded-full', currentSlide === index ? 'bg-[#ef2724]' : 'bg-slate-300']"
        :aria-current="currentSlide === index"
        :aria-label="'Slide ' + (index + 1)"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<style scoped></style>
