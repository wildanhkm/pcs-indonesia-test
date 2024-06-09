<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiPill,
  mdiClockTimeEight,
  mdiCash,
  mdiArrowRightBoldCircle,
  mdiCheckCircle,
  mdiCloseCircle,
} from '@mdi/js';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const description = 'Test';
const stepStatus = ['Approved', 'Rejected', 'processed'];
const data = [
  {
    title: 'Reimbursement',
    icon: mdiCash,
    description: `Your submission '${description}' with a total cost of 50,000 has been ${stepStatus[0]}, please check your BRIMO application, thank you.`,
    date: '2024-06-07',
    iconStatus: mdiCheckCircle,
    isRead: false,
    stepStatus: stepStatus[0],
  },
  {
    title: 'Reimbursement',
    icon: mdiCash,
    description: `Your submission '${description}' with a total cost of 50,000 has been ${stepStatus[1]}, please click for details.`,
    date: '2024-06-06',
    iconStatus: mdiCloseCircle,
    isRead: true,
    stepStatus: stepStatus[1],
  },
  {
    title: 'Reimbursement',
    icon: mdiCash,
    description: `Your submission will be ${stepStatus[2]} according to the reimbursement schedule. Please wait.`,
    date: '2024-06-05',
    iconStatus: mdiArrowRightBoldCircle,
    isRead: true,
    stepStatus: stepStatus[2],
  },
  {
    title: 'Sickness',
    icon: mdiPill,
    description: `Your submission has been ${stepStatus[0]} by the Superior.`,
    date: '2024-06-05',
    iconStatus: mdiCheckCircle,
    isRead: false,
    stepStatus: stepStatus[0],
  },
  {
    title: 'Sickness',
    icon: mdiPill,
    description: `Your submission has been ${stepStatus[1]} please confirm with your Superior.`,
    date: '2024-06-05',
    iconStatus: mdiCloseCircle,
    isRead: false,
    stepStatus: stepStatus[1],
  },
  {
    title: 'Sickness',
    icon: mdiPill,
    description: `Your submission is being ${stepStatus[2]} to the Superior for the approval process, please wait.`,
    date: '2024-06-05',
    iconStatus: mdiArrowRightBoldCircle,
    isRead: true,
    stepStatus: stepStatus[2],
  },
  {
    title: 'Overtime',
    icon: mdiClockTimeEight,
    description: `Your submission has been ${stepStatus[0]} by the Superior.`,
    date: '2024-06-05',
    iconStatus: mdiCheckCircle,
    isRead: true,
    stepStatus: stepStatus[0],
  },
  {
    title: 'Overtime',
    icon: mdiClockTimeEight,
    description: `Your submission has been ${stepStatus[1]} please confirm with your Superior.`,
    date: '2024-06-05',
    iconStatus: mdiCloseCircle,
    isRead: false,
    stepStatus: stepStatus[1],
  },
  {
    title: 'Overtime',
    icon: mdiClockTimeEight,
    description: `Your submission is being ${stepStatus[2]} to the Superior for the approval process, please wait.`,
    date: '2024-06-05',
    iconStatus: mdiArrowRightBoldCircle,
    isRead: false,
    stepStatus: stepStatus[2],
  },
];

const iconStatusClass = (status: string) => {
  if (status === 'Approved') return 'icon-success';
  if (status === 'Rejected') return 'icon-failed';
  if (status === 'processed') return 'icon-process';
  return '';
};
</script>
<template>
  <div class="flex flex-col gap-8">
    <AppHeader page-name="Notification" />
    <div class="flex flex-col" v-for="(item, idx) in data">
      <div class="flex gap-4 rounded-xl" :class="{'bg-white': !item.isRead, 'bg-blue-200': item.isRead}">
        <div class="relative border rounded-xl bg-gradient-to-r from-[#ef2724] to-[#c10e65] p-2">
          <svg-icon class="text-slate-200" type="mdi" size="64" :path="item.icon"></svg-icon>
          <svg-icon
            class="absolute self-end right-[-12px] bottom-[-6px]"
            :class="iconStatusClass(item.stepStatus)"
            type="mdi"
            size="24"
            :path="item.iconStatus"
          ></svg-icon>
        </div>
        <div class="flex flex-col w-full p-2">  
          <div class="flex justify-between">
            <span>
              {{ item.title }}
            </span>
            <span>
              {{ dayjs(item.date).fromNow() }}
            </span>
          </div>
          <span>
            {{ item.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.icon {
  &-success {
    color: green;
  }
  &-process {
    color: blue;
  }
  &-failed {
    color: red;
  }
}
</style>
