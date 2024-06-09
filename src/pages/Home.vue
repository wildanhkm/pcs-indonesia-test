<script setup>
import Header from '../components/Header.vue';
import Hero from '../components/home/Hero.vue';
import TodayActivity from '../components/home/TodayActivity.vue';
import Carousel from '../components/Carousel.vue';
import AvatarUserGroup from '../components/AvatarUserGroup.vue';
import AppNavigations from '../components/AppNavigations.vue';
import { mdiHome, mdiCalendarCheck, mdiListBox, mdiCog, mdiExitToApp } from '@mdi/js';


const navigations = [
  {
    name: 'Home',
    icon: mdiHome,
    active: true,
    isMainNavigation: false,
  },
  {
    name: 'Attendance',
    icon: mdiCalendarCheck,
    active: false,
    isMainNavigation: false,
  },
  {
    name: 'Check Out',
    icon: mdiExitToApp,
    active: false,
    isMainNavigation: true,
  },
  {
    name: 'Form',
    icon: mdiListBox,
    active: false,
    isMainNavigation: false,
  },
  {
    name: 'Setting',
    icon: mdiCog,
    active: false,
    isMainNavigation: false,
  },
];

const contents = [
  {
    author: 'Ana Riswati',
    date: '01-01-2024',
    contents: [
      'Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Kalimat 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Kalimat 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Kalimat 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    ],
  },
  {
    author: 'Ana Riswati',
    date: '01-02-2024',
    contents: [
      'Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Kalimat 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Kalimat 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Kalimat 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    ],
  },
  {
    author: 'Ana Riswati',
    date: '01-03-2024',
    contents: [
      'Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Kalimat 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Kalimat 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Kalimat 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    ],
  },
];

const users = [
  { name: 'Jefril', avatar: 'https://i.pravatar.cc/300', location: 'Sahid' },
  { name: 'Zasami', avatar: 'https://i.pravatar.cc/300', location: 'BSD' },
  { name: 'Sam', avatar: 'https://i.pravatar.cc/300', location: 'Sahid' },
  { name: 'Aldo', avatar: 'https://i.pravatar.cc/300', location: 'Sahid' },
  { name: 'Erwin', avatar: 'https://i.pravatar.cc/300', location: 'Sahid' },
  { name: 'Arye', avatar: 'https://i.pravatar.cc/300', location: 'BSD' },
  { name: 'Risya', avatar: 'https://i.pravatar.cc/300', location: 'BSD' },
  { name: 'Nesha', avatar: 'https://i.pravatar.cc/300', location: 'WFH' },
];
</script>

<template>
  <div class="flex flex-col gap-8">
    <Header />
    <Hero />
    <TodayActivity />
    <div class="flex flex-col gap-2">
      <span class="font-bold"> PCS News </span>
      <Carousel :contents="contents" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="font-bold"> Online </span>
      <AvatarUserGroup :users="users" more-text="10 more" />
    </div>
    <AppNavigations :navigations="navigations" />
  </div>
</template>
