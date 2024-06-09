<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowLeft } from '@mdi/js';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = withDefaults(
  defineProps<{
    pageName: string;
  }>(),
  {
    pageName: '',
  }
);
</script>
<template>
  <header class="flex gap-4 items-center">
    <button @click="router.push('/')">
      <svg-icon type="mdi" :path="mdiArrowLeft"></svg-icon>
    </button>
    <h1 class="text-xl font-bold text-[#f94d3b]">{{ props.pageName }}</h1>
  </header>
</template>
