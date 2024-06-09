<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiClockTimeSixOutline, mdiClockTimeNineOutline, mdiProgressClock } from '@mdi/js';
</script>

<template>
  <div class="p-4">
    <span class="font-bold">Today's activity</span>
    <div class="flex justify-between items-center p-4">
      <div class="flex items-center flex-col gap-1">
        <svg-icon class="text-[#ef2724]" type="mdi" :path="mdiClockTimeNineOutline"></svg-icon>
        <span class="font-bold">08:30</span>
        <span>Check In</span>
      </div>
      <div class="flex items-center flex-col gap-1">
        <svg-icon class="text-[#ef2724]" type="mdi" :path="mdiProgressClock"></svg-icon>
        <span class="font-bold">03:00:00</span>
        <span>Working Hours</span>
      </div>
      <div class="flex items-center flex-col gap-1">
        <svg-icon class="text-[#ef2724]" type="mdi" :path="mdiClockTimeSixOutline"></svg-icon>
        <span class="font-bold">--:--</span>
        <span>Check Out</span>
      </div>
    </div>
  </div>
</template>
