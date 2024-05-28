<script>
import { mapState } from "vuex";

export default {
  name: "toolbar",
  computed: {
    ...mapState(['user'])
  },
  methods: {
    handleToggle() {
      this.$emit('toggleNav');
    },
    navigateToHome() {
      this.$router.push('/home');
    },
    navigateToPersonalCard() {
      this.$router.push('/personalpage');
    },
    navigateToSafetyDevice() {
      this.$router.push('/safetydevice');
    },
    navigateToLogin() {
      this.$store.commit('removeUser');
      this.$router.push('/login');
    }
  }
}
</script>

<template>
  <pv-toolbar class="header h-7rem px-4 w-full">

    <template #start>
      <div class=" flex flex-row align-items-center gap-4">
        <i class="pi pi-bars" @click="handleToggle" style="color: slateblue; font-size: 1.5rem; cursor: pointer"></i>
        <div class="flex flex-row align-items-center gap-3">
          <img src="https://pageguardianiq.vercel.app/img/Glogo.png" width="100" alt="Toolbar image" aria-label="Branding logo"/>
          <div class="title-container flex flex-column justify-content-center line-height-2">
            <p class="title font-semibold " style="letter-spacing: 1px;">GuardianIQ</p>
            <span class="text-sm" style="letter-spacing: .8px;">{{ user.role }}</span>
          </div>
        </div>
      </div>
    </template>
    <template #end>
      <div class="flex flex-row gap-3">
        <div @click="navigateToLogin()" class="inline-flex gap-3 cursor-pointer align-items-center">
          <i class="pi pi-sign-out text-gray-700" style="font-size: 1.5rem;"></i>
          <p class="font-medium text-gray-700" style="margin-bottom: 2px">Log out</p>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

.header {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

.title-container {
  margin-top: 2px;
}

.title {
  letter-spacing: 1px;
  font-size: 1rem;
}

.pi-bars {
  display: none;
}

@media (max-width: 1024px) {

  .pi-bars {
    display: block;
  }
}

</style>
