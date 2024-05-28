<script setup>
import Navbar from '@/public/components/navbar/navbar.component.vue'
import Sidebar from '@/public/components/sidebar/sidebar.component.vue'
import HomePage from '@/public/pages/home-page.component.vue'
import PersonalCardPage from '@/securityContext/pages/PersonalSafety/PersonalCard-page.component.vue'
import SafetyDevicePage from '@/securityContext/pages/SafetyDevice/SafetyDevice-page.component.vue'
import { ref } from 'vue'

const showLogin = ref(false);
const showEmailLogin = ref(false);

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
};
const handleShowEmailLoginUpdate = (value) => {
  showEmailLogin.value = value;
};

</script>

<template>
  <Navbar :showLogin="showLogin" :showEmailLogin="showEmailLogin"
          @update:showLogin="handleShowLoginUpdate" @update:showEmailLogin="handleShowEmailLoginUpdate"/>
  <Sidebar :sidebarVisible="showLogin" />
  <section class="main-page">
    <HomePage/>
    <PersonalCardPage/>
    <SafetyDevicePage/>
  </section>
</template>

<style scoped>

</style>
