<template>
  <div id="app">
    <h1 class="title">Seguridad presencial</h1>


    <sidebar-component/>
    <div class="cards-container">
      <PersonalCard
          v-for="guard in guards"
          :key="guard.nombre"
          :personal="guard"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PersonalCard from '/src/securityContext/components/PersonalCard/PersonalCard.component.vue';
import sidebarComponent from "@/securityContext/components/filter/filter.component.vue";
export default {
  name: 'App',
  components: {
    PersonalCard,
    sidebarComponent
  },
  data() {
    return {
      guards: [],
      visible: false
    };
  },
  methods: {
    async fetchPersonals() {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/rivacortez/personsafe/personalsafety');
        this.guards = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
  mounted() {
    this.fetchPersonals();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #0d3b66; /* Fondo azul oscuro */
  padding: 20px;
}

.title {
  font-size: 2.5em; /* Tamaño de la fuente grande */
  color: #fff; /* Color blanco */
  margin-bottom: 20px;
}

.filter-button {
  margin: 20px;
}

.filter-button button {
  background-color: #f0ad4e; /* Color de fondo amarillo */
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
}

.filter-button button:hover {
  background-color: #ec971f;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
