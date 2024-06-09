<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';

type KeyValueType = {
  name: string;
  active: boolean;
  icon: string;
  isMainNavigation: boolean;
};

const props = withDefaults(
  defineProps<{
    navigations: KeyValueType[];
  }>(),
  {
    navigations: () => {
      return [] as KeyValueType[];
    },
  }
);
</script>

<template>
  <div
    class="fixed bottom-0 w-[600px] bg-white flex justify-between items-end rounded-lg shadow shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2"
  >
    <div
      v-for="(item, index) in props.navigations"
      :key="index"
      :class="{ 'w-16': !item.isMainNavigation, 'w-20': item.isMainNavigation }"
    >
      <button class="flex flex-col items-center relative">
        <svg-icon
          type="mdi"
          :class="{
            'text-[#ef2724]': item.active,
            'text-slate-400': !item.active,
            'absolute bottom-10 w-16 h-16 rounded-full bg-[#ef2724] p-2 shadow shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white font-bold':
              item.isMainNavigation,
          }"
          :path="item.icon"
        ></svg-icon>
        <span
          :class="{ 'text-[#ef2724] font-bold': item.active, 'text-slate-400': !item.active }"
          >{{ item.name }}</span
        >
      </button>
    </div>
  </div>
</template>
