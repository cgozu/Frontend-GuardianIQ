<template>

  <header>
    <pv-toolbar class="tooolbarrrr">
      <template #start>
        <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer" />
        <div class="d-none d-md-flex align-items-center">
          <img src="https://pageguardianiq.vercel.app/img/Glogo.png" width="100" alt="Toolbar image" aria-label="Branding logo" />
          <h2 class="titulo">GuardianIQ</h2>
          <div class="flex ml-4">
            <router-link v-for="item in items" :key="item.label" :to="item.to">
              <pv-button class="p-button-text text-white">{{ item.label }}</pv-button>
            </router-link>
          </div>
        </div>
      </template>
    </pv-toolbar>
  </header>

  <pv-sidebar v-model:visible="drawer">
    <div class="flex-column">
      <router-link v-for="item in items" :key="item.label" :to="item.to">
        <pv-button class="p-button-text text-dark">{{ item.label }}</pv-button>
      </router-link>

    </div>
  </pv-sidebar>

  <main class="main-content">
    <router-view />
  </main>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home' },
        { label: 'PersonalCardPage', to: '/PersonalCardPage' },
        { label: 'SafetyDevicePage', to: '/SafetyDevicePage' }
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    optionClicked(option) {
      console.log(option);
      // Aquí puedes agregar la lógica para cuando se hace clic en una opción
    }
  }
};
</script>

<style scoped>
.tooolbarrrr {
  background-color: #11315C;
}
.titulo{
  color: white;
}
.text-white {
  color: white;
}

.text-dark {
  color: #343a40;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-4 {
  margin-left: 1rem;
}

.flex {
  display: flex;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.mt-4 {
  margin-top: 1.5rem;
}

.options {
  margin-top: 10px;
}

.option {
  display: block;
  margin: 5px 0;
}

.d-none {
  display: none !important;
}

.d-md-flex {
  display: flex !important;
}

.align-items-center {
  align-items: center;
}

.toolbar {
  width: 100%;
  z-index: 1000; /* Ensure it stays on top of other elements */
  top: 0;
  left: 0;
}

.main-content {
  margin-top: 60px; /* Adjust based on the height of your toolbar */
}

@media (min-width: 768px) {
  .d-md-flex {
    display: flex !important;
  }
}
</style>
