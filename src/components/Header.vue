<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiBellBadgeOutline } from '@mdi/js'
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<template>
  <header class="flex justify-between items-center w-full">
    <h1 class="text-xl font-bold text-[#f94d3b]">KerjaYuk!</h1>
    <button @click="router.push('notifications')">
      <svg-icon type="mdi" :path="mdiBellBadgeOutline"></svg-icon>
    </button>
  </header>
</template>
