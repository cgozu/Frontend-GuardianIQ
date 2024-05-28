<template>
  <div>
    <pv-toast></pv-toast>
    <pv-toast></pv-toast>
    <pv-toast></pv-toast>
    <header>
      <pv-toolbar class="bg-primary" fixed>
        <template #start>
          <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer" />

          <h3>{{ title }}</h3> <!-- Reemplaza con tu título -->
        </template>
        <template #end>
          <div class="flex-column">
            <router-link v-for="item in items" :key="item.label" :to="item.to">
              <pv-button class="p-button-text text-white">{{ item.label }}</pv-button>
            </router-link>
          </div>
        </template>
      </pv-toolbar>
    </header>
    <pv-sidebar v-model:visible="drawer">
      <ul>
        <li v-for="item in items" :key="item.label">
          <router-link :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>
    </pv-sidebar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'NavbarPersonaliz', // Reemplaza con el nombre de tu componente
  data() {
    return {
      drawer: false,
      title: 'Your Title', // Reemplaza con tu título
      items: [
        { label: 'Label1', to: '/route1' },
        { label: 'Label2', to: '/route2' },
        { label: 'Label3', to: '/route3' }
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}
</script>
<style>
.bg-primary {
  background-color: #007bff;
}
.text-white {
  color: #ffffff;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
</style>
