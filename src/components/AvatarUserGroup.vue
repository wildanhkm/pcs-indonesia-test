<script setup lang="ts">
import { ref, withDefaults } from 'vue';

type User = {
  name: string;
  avatar: string;
  location: string;
};

const props = withDefaults(
  defineProps<{
    users: User[];
    moreText?: string;
  }>(),
  {
    users: () => {
      return [] as User[];
    },
    moreText: '',
  }
);
</script>

<template>
  <div class="w-full mx-auto rounded-[20px] shadow shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-8 py-4">
    <div class="flex items-start gap-2">
      <div v-for="(user, index) in users" :key="index" class="relative w-12 rounded-full">
        <img :src="user.avatar" alt="Avatar" class="w-full h-full object-cover rounded-full" />
        <div class="text-black px-2 py-1">
          <p class="text-sm font-bold">{{ user.name }}</p>
          <p class="text-xs">{{ user.location }}</p>
        </div>
      </div>
      <div
        class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#ef2724] to-[#c10e65] text-white"
      >
        <span class="text-sm text-center font-bold">{{ moreText }}</span>
      </div>
    </div>
  </div>
</template>
