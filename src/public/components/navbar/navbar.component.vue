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

      <button @click="logout" class="logout-button">LogOut</button>

    </div>
  </pv-sidebar>

  <main class="main-content">
    <router-view />
  </main>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home' },
        { label: 'PersonalCardPage', to: '/PersonalCardPage' },
        { label: 'SafetyDevicePage', to: '/SafetyDevicePage' },
        {label:   'orderList', to: '/orderList'},
        {label: 'formSupport', to: '/formSupport'}
      ]
    };
  },
  setup() {
    const router = useRouter();

    const logout = () => {
      router.push('/login');
    };

    return {
      logout
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
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

 .logout-button {
   background-color: #f44336; /* Color de fondo rojo */
   color: white; /* Color de texto blanco */
   border: none; /* Sin borde */
   padding: 10px 20px; /* Relleno de 10px arriba y abajo, 20px a los lados */
   text-align: center; /* Alineación de texto al centro */
   text-decoration: none; /* Sin decoración de texto */
   display: inline-block; /* Para que se comporte como un bloque pero se alinee como un elemento en línea */
   font-size: 16px; /* Tamaño de fuente de 16px */
   margin: 4px 2px; /* Margen de 4px arriba y abajo, 2px a los lados */
   cursor: pointer; /* Cambia el cursor a un puntero cuando se pasa por encima */
   border-radius: 5px; /* Bordes redondeados */
 }

.logout-button:hover {
  background-color: #d32f2f;
}

@media (min-width: 768px) {
  .d-md-flex {
    display: flex !important;
  }
}
</style>
