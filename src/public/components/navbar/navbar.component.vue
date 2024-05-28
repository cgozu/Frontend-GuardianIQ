
<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="bg-primary" fixed>
      <template #start>
        <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer" />
        <img src="https://pageguardianiq.vercel.app/img/Glogo.png" width="100" alt="Toolbar image" aria-label="Branding logo"/>
        <h2>GuardianIQ</h2>
        <h1></h1>
        <h1></h1>
        <div class="flex">
          <router-link v-for="item in items" :key="item.label" :to="item.to">
            <pv-button class="p-button-text text-white">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>

  <pv-sidebar v-model:visible="drawer">

    <div>
      <router-link v-for="item in items" :key="item.label" :to="item.to">
        <pv-button class="p-button-text text-white">
          {{ item.label }}
        </pv-button>
      </router-link>
      <div class="options">
        <pv-button class="option" @click="optionClicked('Option 1')">Personal de seguridad</pv-button>
        <pv-button class="option" @click="optionClicked('Option 2')">Dispositivos de seguridad</pv-button>
        <!-- Agrega más opciones aquí -->
      </div>
    </div>
  </pv-sidebar>

  <router-view />
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
.bg-primary {
  background-color: #007bff;
}

.text-white {
  color: white;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.options {
  margin-top: 10px;
}

.option {
  display: block;
  margin: 5px 0;
}
</style>
