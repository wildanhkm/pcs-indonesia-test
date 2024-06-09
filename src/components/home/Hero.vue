<script setup lang="ts">
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/id';
dayjs.extend(relativeTime);
</script>

<template>
  <div class="flex flex-col gap-2">
    <p class="font-medium">Hi, Good Morning!</p>
    <div class="rounded-xl text-white p-4 bg-gradient-to-r from-[#ef2724] to-[#c10e65]">
      <div class="flex flex-col gap-4">
        <div class="flex justify-between">
          <div class="flex gap-4">
            <img src="https://i.pravatar.cc/300" class="w-12 h-12 object-cover rounded-full" alt="profile_picture" />
            <div class="flex flex-col">
              <span class="font-bold">Tabay</span>
              <span class="italic">UI/UX Designer</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="italic">Member Since</span>
            <span class="font-bold">
              {{ dayjs('06-01-2021').locale('id').format('DD MMMM YYYY') }}
            </span>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <span class="italic">Location</span>
            <span class="font-bold"> Kantor Sahid </span>
          </div>
          <span class="italic self-end">ICO</span>
        </div>
      </div>
    </div>
  </div>
</template>
